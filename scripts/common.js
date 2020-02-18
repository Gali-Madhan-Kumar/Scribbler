var modal = document.getElementById("signup_modal");
var button = document.getElementById("signup_btn");
var closeModal = document.getElementsByClassName("close")[0];

button.onclick = function () {
    modal.style.display = 'flex';
}

closeModal.onclick = function () {
    modal.style.display = 'none';
}
var signInModal = document.getElementById("signin_modal");
var signInButton = document.getElementById("signin_btn");
var modalClose = document.getElementsByClassName("close")[1];
var signUp = document.getElementById("signIn_close");

signInButton.onclick = function () {
    signInModal.style.display = 'flex';
}

modalClose.onclick = function () {
    signInModal.style.display = 'none';
}

signUp.onclick = function () {
    signInModal.style.display = 'none';
    modal.style.display = 'flex';
}