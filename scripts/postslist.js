var postsList = [{
    user_name: "Srishti Gupta",
    post_title: "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
    post_content: "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."
},
{
    user_name: "Colby Fayock",
    post_title: "What is linting and how can it save you time?",
    post_content: "One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have."
},
{
    user_name: "Yazeed Bzadough",
    post_title: "How to Get More Views on Your Tech Blog",
    post_content: "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."
},
{
    user_name: "Cedd Burge",
    post_title: "How to write easily describable code",
    post_content: "When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code."
},
{
    user_name: "Srishti Gupta",
    post_title: "Everything you should know about ‘module’ & ‘require’ in Node.js",
    post_content: "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz."
}
];


function showposts(postsList) {
    postsList.forEach(function (value, index) {
        var post_Id = 'postcard_' + (index + 1);
        var template = '<div class="postcard" id=' + post_Id + '>' +
            '<div class="username">' +
            '<p>' + value.user_name + '</p>' +
            '</div>' +
            '<div class="postdetails">' +
            '<div class="post_header">' +
            '<p class="post_title">' + value.post_title + '</p>' +
            '<span>' +
            '<i class="fa fa-trash" onclick="deletemodal(deletepost_modal, ' + post_Id + ')" aria-hidden="true"></i>' +
            '</span>' +
            '</div>' +
            '<p class="post_content">' + value.post_content + '</p>' +
            '<span>' +
            '<i class="fa fa-ellipsis-h" onclick="openpost('+ post_Id +')" aria-hidden="true"></i>' +
            '</span>' +
            '</div>' +
            '</div>'
        document.getElementsByClassName('postslist')[0].innerHTML += template;
    });
}
showposts(postsList);

function deletemodal(modalName, postId) {
    document.getElementById(modalName.id).style.display = 'flex';
    var template = '<div class="modal_content">' +
        '<div class="modal_body">' +
        '<p id="deletepost_title">Are you sure you want to delete this post?</p>' +
        '<button id="yes_btn" onclick="deletepost(' + modalName.id + ', ' + postId.id + ')">Yes</button>' +
        '<button id="no_btn" onclick="closeModal(' + modalName.id + ')">No</button>' +
        '</div>' +
        '</div>'
    document.getElementById(modalName.id).innerHTML = template;
}

function deletepost(modalId, postId) {
    document.getElementById(postId.id).style.display = 'none';
    document.getElementById(modalId.id).style.display = 'none';
}