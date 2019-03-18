$(document).ready(function () {
    // code here
    $('#todo-form').submit(function (event) {
        // alert("Form submitted");
        let item = $('#todo-list-item').val();
        event.preventDefault();

        if (item !== "") {
            let newItem = $("<li></li>").text(item);
            let newCheck = $('<input type="checkbox" class="todo-item checkbox"/>');
            
            //if the checkbox is Checked
            newCheck.click(function () {
                $(this).parent().toggleClass('completed');
            })

            let deleteLink = $('<a href="#" class="todo-item">x</a> <hr/>').click(function (event) {
                newItem.remove();
            });

            // clear textbox
            $("#todo-list-item").val("");

            // add checkbox and delete link
            newItem.prepend(newCheck).append(deleteLink);




            $('#todo-items').append(newItem);
        }
    });

});


