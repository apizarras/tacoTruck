$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
console.log("clicked submit for this taco");
        const newTaco = {
            taco: $("#taco").val().trim(),
            shell: $("#shell").val().trim(),
            vegetarian: $("#veg").val().trim()
        };
console.log(newTaco);
        $.ajax("/api/tacos", {
            type: "POST",
            data: newTaco
        }).then( function() {
            console.log("new taco created");
            location.reload();
        })
    });
});

$(function() {
    $(".delTaco").on("click", function(event) {
        event.preventDefault();
        let id = $(this).data("id");

        $.ajax("/api/tacos/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("deleted taco id = " + id);
            location.reload();
        });
    });
});

$(function() {
    $(".pickTaco").on("click", function(event) {
        event.preventDefault();
        let id = $(this).data("id");
        let newPickup = $(this).data("newpickup");
        console.log("pickup value: " + newPickup);
        let pickupYes = {
            pickup: newPickup
        };

        $.ajax("/api/tacos/" + id, {
            type: "PUT",
            pickup: pickupYes
        }).then(function() {
            console.log("pickup? " + data);
            location.reload();
        })
    })
})