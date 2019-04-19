// var topics = ["baseball", "basketball", "soccer", "volleyball", "tennis"]
//         //function to add buttons 
//         function renderButtons() {

//             $("#sportsbuttons").empty();

//             for (var i = 0; i < topics.length; i++) {

//                 var a = $("<button>");

//                 a.addClass("sport");
//                 a.attr("data-sport", topics[i]);
//                 a.text(topics[i]);
//                 $("#sportsbuttons").append(a);
//             }
//         }

//         $("#add-sport").on("click", function (event) {
//             event.preventDefault();

//             var sport = $("#sportInput").val().trim();
//             topics.push(sport);

//             renderButtons();


//         });

//         renderButtons();

//         $("#sportsbuttons").on("click", ".sport", function () {
//             var x = $(this).data("sport");
//             console.log(x);
//             $("#holdGifs").empty();

//             var queryURL = "http://api.giphy.com/v1/gifs/search?&q=" + x + "&api_key=LNcpMaEEgVFj8hjBqGm8dHJbh2wulb8j&limit=10&offset=0&rating=G&lang=en";
//             console.log(queryURL);
//             $.ajax({ url: queryURL, method: 'GET' })
//                 .done(function (response) {

//                     for (var i = 0; i < response.data.length; i++) {
//                         var sportsDiv = $("<div>");
//                         var p = $("<p>").text("Rating: " + response.data[i].rating);

//                         var sportsGif = $("<img>");
//                         sportsGif.attr('src', response.data[i].images.fixed_height.url);

//                         sportsDiv.append(p);
//                         sportsDiv.append(sportsGif);

//                         $("#holdGifs").append(sportsDiv);
//                     }
//                 })
//         });