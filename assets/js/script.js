let informationEl = document.getElementById("information");
let searchBtn = document.getElementById("searchbtn")
let blankSearch = document.getElementById("blanksearch")


//Get the value put into the search box
function searchValue() {
    let searchValue = document.querySelector("#search-value").value;
    console.log(searchValue);

    //Check if searchValue is blank, and tell user to input a search term
    if (searchValue == "") {
        let pleaseInput = "Please input a search term."
        console.log(pleaseInput);
        blankSearch.append(pleaseInput);
    }
}

//Call the searchValue function when the search button is clicked
searchBtn.addEventListener("click", searchValue);