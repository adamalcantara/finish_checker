let informationEl = document.getElementById("information");
let searchBtn = document.getElementById("searchbtn")
let blankSearch = document.getElementById("blanksearch")


//Get the value put into the search box
function searchValue() {
    let searchValue = document.querySelector("#search-value").value;
    console.log(searchValue);

    //Check if searchValue is blank, and tell user to input a search term
    if (searchValue == "") {
        blankSearch.append("Please input a search term.");
        return false;
    }
    getWeather(searchValue);
}

function getWeather(searchValue) {
    let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + apiKey + "&units=imperial";

    fetch(apiURL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data);
        })
}

//Call the searchValue function when the search button is clicked
searchBtn.addEventListener("click", searchValue);