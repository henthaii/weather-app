// insert fetch here that will retrieve weather api
// make it target container class
// then function response
// catch function console.error();

// const container = query need to make const that targets container and then target data to it

//move the fetch setup into function
//function will have to take input from field



async function searchSubmit() {
    try {
        const container = document.querySelector(".container");
        const form = document.querySelector("#search-form");

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
            const searchValue = formData.get("search");
            
            fetch ('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + 'searchValue' + '?unitGroup=us&key=JPG5TASYBNQ5RGAXP7T8GE2YP&contentType=json')
                .then(function(response) {
                    return response.json();
                    //need to extract form data into where lewisville is
                })
                .then(function(data) {
                    //populate the container with the data
                    console.log(data);
                })
                .catch(function(err) {
                    console.log("No");
                });
            console.log(searchValue);
            });
    } catch (error) {
        console.error("Error",error);
    }
}
// searchSubmit();