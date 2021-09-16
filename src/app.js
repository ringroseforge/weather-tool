function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "4f53bb6fbafe6f11bafb0801af7db36a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Yosemite,US&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
