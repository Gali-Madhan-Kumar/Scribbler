/* openpost method takes postId as parameter and stores username,posttile and postcontent inside session storage,
 and redirects to post.html page. when user clicks on ellipsis icon of post inside postlist page */
function openpost(postId) {
	sessionStorage.setItem('userName', document.getElementById(postId.id).getElementsByTagName('p')[0].innerHTML);
	sessionStorage.setItem('postTitle', document.getElementById(postId.id).getElementsByTagName('p')[1].innerHTML);
	sessionStorage.setItem('postContent', document.getElementById(postId.id).getElementsByTagName('p')[2].innerHTML);
	window.location.href = './post.html';
}
//if post.html page is loaded then only the below if condition executes, displays username,posttitle and postcontent of post.
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
	document.getElementById('likepost').innerHTML = '<div id="like_btn">' +
		'<span id="like_icon" onclick="like()"><i class="fa fa-thumbs-up"> Like</i></span>' +
		'</div>' +
		'<p id="totalLikes">Be the first one to like this!</p>';
}
//edit button changes to save button and save button changes to edit button once user edited and saved the post
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
//like button code starts here
var likes = 0;
function like() {
	likes += 1;
	if (likes == 1) {
		document.getElementById('totalLikes').innerHTML = likes + ' person likes this!';
	}
	if (likes > 1) {
		document.getElementById('totalLikes').innerHTML = likes + ' people likes this!';
	}
	document.getElementsByClassName('fa-thumbs-up')[0].innerHTML = ' Liked';
}
//like button code ends here

//comments are displayed in reverse order(last one as first)
function addComment() {
	var comment = document.getElementsByTagName('textarea')[0].value;
	if (comment != '') {
		document.getElementById('allcomments').innerHTML = '<p>' + comment + '</p>' + document.getElementById('allcomments').innerHTML;
		document.getElementsByTagName('textarea')[0].value = '';
	}
}