function openpost(postId) {
	sessionStorage.setItem('userName', document.getElementById(postId.id).getElementsByTagName('p')[0].innerHTML);
	sessionStorage.setItem('postTitle', document.getElementById(postId.id).getElementsByTagName('p')[1].innerHTML);
	sessionStorage.setItem('postContent', document.getElementById(postId.id).getElementsByTagName('p')[2].innerHTML);
	window.location.href = './post.html';
}