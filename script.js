// insert fetch here that will retrieve weather api
// make it target container class
// then function response
// catch function console.error();

// const container = query need to make const that targets container and then target data to it

//move the fetch setup into function
//function will have to take input from field

function getSearch(element) {
    const formData = new FormData(element);
    return formData.get("search");
} // should i add this as an await function in the searchSubmit?

function searchSubmit() {
    const container = document.querySelector(".container");
    const form = document.querySelector("#search-form");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        console.log("test");
        //need to extract data from field
        //do i use the formdata.get? pretty sure i do
        //can i put the data from here to the fetch function
        //convert this to an async function and implement await
        //definitely not a promise
    })
    //add fetch section to here? or maybe inside form listener
    //needs to pull the search function data
    //then needs to populate the container with info
}

searchSubmit();

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

