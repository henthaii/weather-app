// insert fetch here that will retrieve weather api
// make it target container class
// then function response
// catch function console.error();

fetch ('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lewisville?unitGroup=us&key=JPG5TASYBNQ5RGAXP7T8GE2YP&contentType=json')
    .then(function(response) {
        // return response.json();
        console.log("Yes");
    })
    .catch(function(err) {
        console.log("No");
    });