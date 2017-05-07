function deletePage(pageId) {
    $.ajax({ url: '/admin/page/' + pageId, type: 'delete'})
        .success(function (result) {
            window.location.reload();
        })
        .error(function (error) {
            console.log('Error occurred while deleting page', error);
        });
}
/* Google maps */
var map;
var markers = [];
var marker;
//initial setup
function initMap() {
    var haightAshbury = {lat: 50.424, lng: 30.569};
    //setting map
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: haightAshbury
    });
    // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {
        deleteMarkers();
        addMarker(event.latLng);
        map.setCenter(marker.getPosition());
    });

    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
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
        infowindowContent.children['place-name'].textContent = place.name;
        infowindowContent.children['place-id'].textContent = place.place_id;
        infowindowContent.children['place-address'].textContent = place.formatted_address;
        // infowindow.open(map, marker);
    });
}
// Adds a marker to the map and push to the array.
function addMarker(location) {
    marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);
    //updating coordinates
    var coordinates = JSON.parse(JSON.stringify(location));
    $('#lat').val(coordinates.lat);
    $('#lng').val(coordinates.lng);
    //getting address string by coordinates
    var _url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+
        coordinates.lat + ',' + coordinates.lng + '&sensor=true';
    $.get(_url, function (resp) {
        console.log(resp);
        //address string
        $('#address').val(resp.results[0].formatted_address);
        //district
        $('#district').val(resp.results[1].address_components[0].long_name);
    });
}
// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}
// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
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
    //placing existing marker
    var _lat = parseFloat($('#lat').val()),
        _lng = parseFloat($('#lng').val());
    if (_lat && _lng) {
        setTimeout(function () {
            addMarker({lat: _lat, lng: _lng});
            map.setCenter({lat: _lat, lng: _lng});
        }, 1000);
    }
});