function openpost(postId) {
	sessionStorage.setItem('userName', document.getElementById(postId.id).getElementsByTagName('p')[0].innerHTML);
	sessionStorage.setItem('postTitle', document.getElementById(postId.id).getElementsByTagName('p')[1].innerHTML);
	sessionStorage.setItem('postContent', document.getElementById(postId.id).getElementsByTagName('p')[2].innerHTML);
	window.location.href = './post.html';
}
if (document.getElementById('post') != null) {
	var userName = sessionStorage.getItem('userName');
var postTitle = sessionStorage.getItem('postTitle');
var postContent = sessionStorage.getItem('postContent');
	var template = '<div id="postTitle">' + 
            '<p>'+ postTitle +'</p>' +
        '</div>' +
        '<div id="postDetails">' +
                '<div id="userName">' +
            '<p>'+ userName +'</p>' +
            '<span id="editpost">Edit <i class="fa fa-edit"></i></span>' +
        '</div>' +
        '<div id="postContent">' + postContent + '</div>' 
	document.getElementById('post').innerHTML = template; 
}