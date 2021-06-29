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
    //Call the get weather function
    getWeather(searchValue);
    //Set the search box value to nothing after button click
    document.querySelector("#search-value").value = "";
}

//Geolocation test begins here
let x = document.getElementById("geotest")

function currentLocation() {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported");
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude;
}

currentLocation();

//Function to get the current weather
function getWeather(searchValue) {
    informationEl.innerHTML = "";
    //API URL
    let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + apiKey + "&units=imperial";

    //Fetch the data from the API, and print it in the console
    fetch(apiURL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data);

            //Get the city name, temperature, and humidity
            let cityName = data.name;
            let temperature = data.main.temp;
            let humidity = data.main.humidity;

            //Get the city name, and append it to the page
            let cityNameEl = document.createElement("h2");
            $(cityNameEl).text(cityName);
            informationEl.append(cityNameEl);

            //create an empty div for the lacquer
            let lacquerDiv = document.createElement("div");
            lacquerDiv.classList.add("lacquerDiv");

            //create elements for the title and the text
            let lacquerTitle = document.createElement("h3");
            let lacquerEl = document.createElement("p");
            lacquerEl.classList.add("lacquerEl")

            //if statement for appending information to the page
            if (humidity < 65 && temperature < 90) {
                lacquerEl.classList.add("lacquerGood");
                lacquerEl.append("Go ahead");
            } else {
                lacquerEl.classList.add("lacquerBad");
                lacquerEl.append("Don't you dare");
            }

            //Append the title to the lacquerTitle H2
            lacquerTitle.append("Nitrocellulose Lacquer:");

            //Append the information and title to the empty div
            lacquerDiv.append(lacquerTitle);
            lacquerDiv.append(lacquerEl);

            //Append the information to the page
            informationEl.append(lacquerDiv);
        })
}

//Call the searchValue function when the search button is clicked
searchBtn.addEventListener("click", searchValue);