let dateElement= document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayIndex = currentTime.getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthIndex = currentTime.getMonth();
let months = [
  "January",
  "February",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let yearIndex = currentTime.getFullYear();

dateElement.innerHTML = `${days[dayIndex]} ${months[monthIndex]}, ${yearIndex} ${hours}:${minutes}`;

function displayWeatherCondition(response){
document.querySelector("#city").innerHTML = response.data.name;
document.querySelector("#currentTemperature").innerHTML = Math.round(response.data.main.temp);
document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#windSpeed").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function search(event){
    event.preventDefault();
    let apiKey = "dff5c692192605ee5ed7f95b423ae857";
    let city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(displayWeatherCondition);
}


let searchInput = document.querySelector("#city-input");
let h3 = document.querySelector("h3");
  if (searchInput.value) {
    h3.innerHTML = `Searching for ${searchInput.value}...`;
  } else {
    h3.innerHTML = null;
    alert("Please type a city");
  }

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);



function current(event) {
  let temperature = Math.round(response.data.main.temp);
current.innerHTML = `It is ${temperature} ℃ `;
let currentT = document.querySelector("#currentTemperature");
currentT.addEventListener("submit",current);
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
navigator.geolocation.getCurrentPosition(showPosition)}
