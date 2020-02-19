function modal(modalId) {
    if (modalId === 'signup_modal') {
        document.getElementById(modalId).style.display = 'flex';
        var template = '<div class="modal-content">' +
        '<div class="modal-header">' +
            '<p id="modal_title">Get Started</p>' +
            '<i class="fa fa-times close" onclick="closeModal('+ modalId +')" aria-hidden="true"></i>' +
        '</div>' +
        '<div class="modal-body">' +
            '<form>' +
                '<label for="Name">Name</label>' +
                '<input type="text" placeholder="Enter your name" required id="Name" />' +
                '<label for="Username">Username</label>' +
                '<input type="text" placeholder="Enter your username" required id="Username" />' +
                '<label for="Password">Password</label>' +
                '<input type="password" placeholder="Enter your password" required id="Password" />' +
                '<label for="Confirm-Password">Confirm Password</label>' +
                '<input type="password" placeholder="Re-nter your password" required id="Confirm-Password" />' +
                '<button class="signup_submit_btn">Sign Up</button>' +
            '</form>'+
        '</div>' +
    '</div>'
    document.getElementById(modalId).innerHTML = template;
    } else if(modalId === 'signin_modal') {
        document.getElementById(modalId).style.display = 'flex';
        var template = '<div class="modal-content">' +
        '<div class="modal-header">' +
            '<p id="modal_title">Welcome Back!</p>' +
            '<i class="fa fa-times close" onclick="closeModal('+ modalId +')" aria-hidden="true"></i>' +
        '</div>' +
        '<div class="modal-body">' +
            '<form>' +
                '<label for="Username">Username</label>' +
                '<input type="text" placeholder="Enter your username" required id="Username">' +
                '<label for="Password">Password</label>' +
                '<input type="text" placeholder="Enter your password" required id="Password">' +
                '<button class="signin_submit_btn">Sign In</button>' +
                '<p>Not a member? <a id="signIn_close">Sign Up</a></p>' +
            '</form>' +
        '</div>' +
    '</div>' 
    document.getElementById(modalId).innerHTML = template;
    document.getElementById('signIn_close').addEventListener("click", function() {
        modal('signup_modal');
        document.getElementById(modalId).style.display = 'none';
        document.getElementById('signup_modal').style.display = 'flex';
    });
    }
}

function closeModal(modalName) {
    document.getElementById(modalName.id).style.display = 'none';
}