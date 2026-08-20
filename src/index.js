function refreshWeatherTemp(response) {
  console.log(response.data);
  let currentTemperature = document.querySelector("#presenttemperature");
  let cityInput = document.querySelector("#nameCity");

  cityInput.innerHTML = response.data.city;

  let temperature = response.data.temperature.current;
  currentTemperature.innerHTML = `${Math.round(temperature)}℃`;
}

function searchCity(city) {
  let apiKey = "t0da92baba343cd544ba68bf04f77ao7";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(refreshWeatherTemp);
}

function handleSearchSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let weatherSearchForm = document.querySelector("#search-form");
weatherSearchForm.addEventListener("submit", handleSearchSubmit);
