function UpdateWeather(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let degrees = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  let city = response.data.city;
  temperatureElement.innerHTML = degrees;
  cityElement.innerHTML = city;
}

function SearchCity(city) {
  let apiKey = "409358oa0b2d74cc98fa66aabc1789t2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(UpdateWeather);
}
function HandleSubmit(event) {
  //preventing the normal behaviour of a form
  event.preventDefault();
  //selecting the input form and accesing the input of the user and storing it in a variable of city
  let SearchCityElement = document.querySelector("#search-form");
  let city = SearchCityElement.value;
  SearchCity(city);
}

//selecting the whole form
let SearchForm = document.querySelector("#form");
SearchForm.addEventListener("submit", HandleSubmit);

SearchCity("Rwanda");
