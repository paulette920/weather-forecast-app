function HandleSubmit(event) {
  //preventing the normal behaviour of a form
  event.preventDefault();
  //selecting the input form and accesing the input of the user and storing it in a variable of city
  let SearchCityElement = document.querySelector("#search-form");
  let cityElement = document.querySelector("#city");
  let city = SearchCityElement.value;
  cityElement.innerHTML = city;
}

//selecting the whole form
let SearchForm = document.querySelector("#form");
SearchForm.addEventListener("submit", HandleSubmit);
