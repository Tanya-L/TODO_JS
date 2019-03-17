$(document).ready(function () {
    // code here
    $('#todo-form').submit(function (event) {
        // alert("Form submitted");
        let item = $('#todo-list-item').val();
        event.preventDefault();

        let newItem = $("<li></li>").text(item);
        $('#todo-items').append(newItem);
    });

});


