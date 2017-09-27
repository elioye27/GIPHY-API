HW - {GIPHY API HW #6}
https://github.com/elioye27/GIPHY-API.git
This app was created to enable users to look up their favorite action movie hero in the past or present.
Requirements
1. Create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
2. App should take the topics in this array and create buttons in your HTML.
3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
5. Under every gif, display its rating (PG, G, so on). 
      * This data is provided by the GIPHY API.
* Only once you get images displaying with button presses should you move on to the next step.
6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.
7. Deploy your assignment to Github Pages

Technologies Used
* jQuery for Dom Manipulation
* AJAX for API GET requests
* API Key to access Giphy data
* Watched a demo video provided by UCLA Codding Booth Camp.
* HTML
* CSS
* JavaScript

Code Explaination

I created a function that allowed me to make an AJAX request to the Giphy API and then allowed me to pass through a callback function in order to further process the JSON object that was returned.
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
