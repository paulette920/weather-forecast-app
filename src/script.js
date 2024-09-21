function UpdateWeather(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let degrees = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  let city = response.data.city;
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  let timeElement = document.querySelector("#time");
  let now = new Date(response.data.time * 1000);

  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  descriptionElement.innerHTML = response.data.condition.description;
  speedElement.innerHTML = `${response.data.wind.speed}km/hr`;
  temperatureElement.innerHTML = degrees;
  cityElement.innerHTML = city;
  timeElement.innerHTML = getDate(now);
}
function getDate(now) {
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hour}:${minutes}`;
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
