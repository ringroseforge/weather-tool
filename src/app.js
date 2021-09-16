function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "4f53bb6fbafe6f11bafb0801af7db36a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Yosemite,US&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
