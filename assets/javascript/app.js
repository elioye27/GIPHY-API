$(document).ready(function() {
    var actors = ["JASON STATHAM", "STEVEN SEAGAL", "ARNOLD SCHWARZENEGGER", "SYLVESTER STALLONE", "VIN DIESEL", "JEAN-CLAUDE VAN DAMME", "BRUCE LEE", "JET LI", "JACKIE CHAN", "BRUCE WILLIS", "WESLEY SNIPES"];

    function displayActors() {


        var actor = $(this).attr("data-person");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=PwMyIctI8WaZj9idQLzdd61z84QsAW42&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {
            var results = response.data
            for (var i = 0; i < results.length; i++) {
                var actorDiv = $("<div class='actor'>");
                var pOne = $("<p>").text("Rating: " + results[i].rating);
                actorDiv.append(pOne);
                $("#actors-view").append('<img class="gif" src="' + response.data[i].images.fixed_height_still.url + '">');
                $("#actors-view").append(pOne);
            }
        });

        $("#actors-view").empty();
    }

    renderButtons();

    $('body').on('click', '.gif', function() {
        var src = $(this).attr("src");
        if ($(this).hasClass('playing')) {
            //stop
            $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
            $(this).removeClass('playing');
        } else {
            //play
            $(this).addClass('playing');
            $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
        }
    });

    function renderButtons() {

        $("#actorButtons").empty();
        for (var i = 0; i < actors.length; i++) {
            var b = $("<button>");
            b.addClass("actor");
            b.attr("data-person", actors[i]);
            b.text(actors[i]);
            $("#actorButtons").append(b);
        }
    }

    $("#addActor").on("click", function(event) {
        event.preventDefault();
        var actor = $("#actor-input").val().trim().toUpperCase();
        actors.push(actor);

        renderButtons();
    });

    $(document).on("click", ".actor", displayActors);

    renderButtons();
});