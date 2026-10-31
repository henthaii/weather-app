// insert fetch here that will retrieve weather api
// make it target container class
// then function response
// catch function console.error();

// const container = query need to make const that targets container and then target data to it

//move the fetch setup into function
//function will have to take input from field

function searchSubmit() {
    const container = projectElement.querySelector(".container");
    const form = projectElement.querySelector("#search-form");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("test");
    })
}

fetch ('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lewisville?unitGroup=us&key=JPG5TASYBNQ5RGAXP7T8GE2YP&contentType=json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        //populate the container with the data
        console.log(data);
    })
    .catch(function(err) {
        console.log("No");
    });

