let informationEl = document.getElementById("information");
let searchBtn = document.getElementById("searchbtn")


//Get the value put into the search box
function searchValue() {
    let searchValue = document.querySelector("#search-value").value;
    console.log(searchValue);
}

//Call the searchValue function when the search button is clicked
searchBtn.addEventListener("click", searchValue);