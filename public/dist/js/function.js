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
});