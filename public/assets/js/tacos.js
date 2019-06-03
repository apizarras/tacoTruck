$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
console.log("clicked submit for this: " + taco);
        const newTaco = {
            taco: $("#taco").val().trim(),
            shell: $("#shell").val().trim(),
            vegetarian: $("#veg")
        };

        $.ajax("/api/tacos", {
            type: "POST",
            data: newTaco
        }).then( function() {
            console.log("new taco created");
            location.reload();
        })
    });
});