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
		'<p>' + postTitle + '</p>' +
		'</div>' +
		'<div id="postDetails">' +
		'<div id="userName">' +
		'<p>' + userName + '</p>' +
		'<span id="editpost">Edit <i class="fa fa-edit"></i></span>' +
		'</div>' +
		'<div id="postContent">' + postContent + '</div>'
	document.getElementById('post').innerHTML = template;
}
document.getElementsByTagName('span')[0].addEventListener("click", function () {
	if (document.getElementsByTagName('span')[0].id == 'editpost') {
		document.getElementById('postTitle').style = 'border: 1px solid red';
		document.getElementById('postTitle').contentEditable = true;
		document.getElementById('postContent').style = 'border: 1px solid red';
		document.getElementById('postContent').contentEditable = true;
		document.getElementsByTagName('span')[0].setAttribute("id", "savepost");
		document.getElementsByTagName('span')[0].innerHTML = 'Save <i class="fa fa-save"></i>';
	} else {
		document.getElementById('postTitle').contentEditable = false;
		document.getElementById('postContent').contentEditable = false;
		document.getElementById('postTitle').style = 'border: 0px';
		document.getElementById('postContent').style = 'border: 0px';
		document.getElementsByTagName('span')[0].setAttribute("id", "editpost");
		document.getElementsByTagName('span')[0].innerHTML = 'Edit <i class="fa fa-edit"></i></span>';
	}
});