function deletePage(pageId) {
    $.ajax({ url: '/admin/page/' + pageId, type: 'delete'})
        .success(function (result) {
            console.log('+');
            window.location.reload();
        })
        .error(function (error) {
            console.log('-');
            console.log('Error occurred while deleting page', error);
        });
}
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 13
    });

    var input = document.getElementById('pac-input');

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    var marker = new google.maps.Marker({
        map: map
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    autocomplete.addListener('place_changed', function () {
        infowindow.close();
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(20);
        }

        // Set the position of the marker using the place ID and location.
//            marker.setPlace({
//                placeId: place.place_id,
//                location: place.geometry.location
//            });
//            marker.setVisible(true);

        infowindowContent.children['place-name'].textContent = place.name;
        infowindowContent.children['place-id'].textContent = place.place_id;
        infowindowContent.children['place-address'].textContent = place.formatted_address;
        infowindow.open(map, marker);
    });
    google.maps.event.addListener(map, 'click', function(event) {
        //adding marker
        placeMarker(event.latLng);
        var coordinates = JSON.parse(JSON.stringify(event.latLng));
        //updating coordinates
        $('#lat').val(coordinates.lat);
        $('#lng').val(coordinates.lng);
        //getting address string by coordinates
        var _url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+
            coordinates.lat + ',' + coordinates.lng + '&sensor=true';
        $.get(_url, function (resp) {
            $('#address').val(resp.results["0"].formatted_address);
        });
    });
    function placeMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }
}
$(document).ready(function () {
    $('#sign-out').on('click', function (e) {
        e.preventDefault();
        $.post('/admin/logout')
            .success(function (result) {
                window.location.reload();
            })
            .error(function (error) {
                console.log('Error occurred during logout', error);
            });
    });
    //file upload
    $('#file-upload').submit(function() {
        $("#status").empty().text("File is uploading...");
        $(this).ajaxSubmit({
            error: function(xhr) {
                status('Error: ' + xhr.status);
            },
            success: function(response) {
                $("#status").empty().text(response);
                console.log(response);
                addUploadedImage(response.originalname);
            }
        });
        return false;
    });
    //show uploaded image in the gallery list
    function addUploadedImage(filename) {
        var _div = '<div class="col-sm-6">' +
            '<img class="img-responsive" src="/img/' + filename + '" alt="Photo">' +
            '</div>';
        $('#gallery').append(_div);
        //adding uploaded urls
        if ($('#pics').val().length > 0) {
            var _existing = $('#pics').val();
            $('#pics').val(_existing + ',' + filename);
        } else {
            $('#pics').val(filename);
        }
        $('#empty-img').remove();
    }
});