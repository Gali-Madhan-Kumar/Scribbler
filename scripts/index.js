function createpostModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
    if (modalId === 'createpost_modal') {
        var template = '<div class="modal_content">' +
            '<div class="modal-header">' +
            '<p id="modal_title">Pen Your Post</p>' +
            '<i class="fa fa-times close" onclick="closeModal(' + modalId + ')" aria-hidden="true"></i>' +
            '</div>' +
            '<div class="modal-body">' +
            '<form>' +
            '<label for="title">Title</label>' +
            '<input type="text" placeholder="Enter title of your post" required />' +
            '<label for="contents">Contents</label>' +
            '<textarea id="contents" rows="20" placeholder="Enter the contents of your post" required></textarea>' +
            '<button class="createpost_submit_btn">Create</button>' +
            '</form>' +
            ' </div>' +
            '</div>'
        document.getElementById(modalId).innerHTML = template;
    }
}

function allPosts() {
    window.location.href = './html/postslist.html';
}