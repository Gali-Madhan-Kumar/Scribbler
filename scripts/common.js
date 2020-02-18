var modal = document.getElementById("signup_modal");
var button = document.getElementById("signup_btn");
var closeModal = document.getElementsByClassName("close")[0];

button.onclick = function() {
    modal.style.display = 'flex';
}

closeModal.onclick = function() {
    modal.style.display = 'none';
}