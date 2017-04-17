function deletePage(pageId) {
    $.ajax({
        url: '/admin/page/' + pageId,
        type: 'delete',
        success: function (result) {
            window.location.reload();
        }
    });
}