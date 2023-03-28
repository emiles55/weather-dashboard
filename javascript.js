var searchBtn = document.getElementById('search');
const tomorrow = dayjs().add(1, 'day');
const tomorrowFormatted = tomorrow.format('dddd, MMMM D, YYYY');
const day3=dayjs().add(2, 'day');
const day3Formatted = day3.format('dddd, MMMM D, YYYY');
console.log(tomorrowFormatted);
var today = dayjs().format("dddd, MMMM D, YYYY");
const day4=dayjs().add(3, 'day');
const day4Formatted = day4.format('dddd, MMMM D, YYYY');
const day5=dayjs().add(4, 'day');
const day5Formatted = day5.format('dddd, MMMM D, YYYY');
addDay2=document.getElementById("dateTwo");
addDay3=document.getElementById("dateThree");
addDay4=document.getElementById("dateFour");
addDay5=document.getElementById("dateFive");
addDay2.textContent=tomorrowFormatted;
addDay3.textContent=day3Formatted;
addDay4.textContent=day4Formatted;
addDay5.textContent=day5Formatted;
dateChange=document.getElementById("date");
date.textContent=today;
var time = new Date(new Date().getTime()).toLocaleTimeString();
timeDisplay=document.getElementById("currentTime");
timeDisplay.textContent="Your local current time: "+time;
searchBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (input.value == null) {
    return;
  } else
    fetchWeatherByCity(input.value);
})

//var year=dayjs().get('year');
//var month= dayjs().get('month');
//var day=dayjs().get('day');
//console.log("${day} ${month} ${year}");
function renderWeather(weather){
  city=document.getElementById("location");
  wind=document.getElementById("windSpeed");
  temp=document.getElementById("dayOneTemp");
  windTwo=document.getElementById("windSpeedTwo");
  tempTwo=document.getElementById("dayTwoTemp");
  iconTwo = document.getElementById("weatherIconTwo");
  humidTwo=document.getElementById("humidityTwo");
  windThree=document.getElementById("windSpeedThree");
  tempThree=document.getElementById("dayThreeTemp");
  iconThree = document.getElementById("weatherIconThree");
  humidThree=document.getElementById("humidityThree");
  windFour=document.getElementById("windSpeedFour");
  tempFour=document.getElementById("dayFourTemp");
  iconFour = document.getElementById("weatherIconFour");
  humidFour=document.getElementById("humidityFive");
  windFive=document.getElementById("windSpeedFive");
  tempFive=document.getElementById("dayFiveTemp");
  iconFive = document.getElementById("weatherIconFive");
  humidFive=document.getElementById("humidityFour");
  humid=document.getElementById("humidity");
  
  dateChangeTwo=document.getElementById("dateTwo");
  icon = document.getElementById("weatherIcon");
  city.textContent=weather.city.name;
  temp.textContent="Temperature: "+Math.floor(((weather.list[0].main.temp) - 273.15) * 1.8 + 32) + " °F";
  humid.textContent="Humidity: "+weather.list[0].main.humidity+ "%";
  wind.textContent="Wind Speed: "+weather.list[0].wind.speed+"MPH";
  icon.setAttribute("src", "https://openweathermap.org/img/wn/"+weather.list[0].weather[0].icon+"@2x.png");
  tempTwo.textContent="Temperature: "+Math.floor(((weather.list[1].main.temp) - 273.15) * 1.8 + 32) + " °F";
  humidTwo.textContent="Humidity: "+weather.list[1].main.humidity+ "%";
  windTwo.textContent="Wind Speed: "+weather.list[1].wind.speed+"MPH";
  iconTwo.setAttribute("src", "https://openweathermap.org/img/wn/"+weather.list[1].weather[0].icon+"@2x.png");
  tempThree.textContent="Temperature: "+Math.floor(((weather.list[2].main.temp) - 273.15) * 1.8 + 32) + " °F";
  humidThree.textContent="Humidity: "+weather.list[2].main.humidity+ "%";
  windThree.textContent="Wind Speed: "+weather.list[2].wind.speed+"MPH";
  iconThree.setAttribute("src", "https://openweathermap.org/img/wn/"+weather.list[2].weather[0].icon+"@2x.png");
  tempFour.textContent="Temperature: "+Math.floor(((weather.list[3].main.temp) - 273.15) * 1.8 + 32) + " °F";
  humidFour.textContent="Humidity: "+weather.list[3].main.humidity+ "%";
  windFour.textContent="Wind Speed: "+weather.list[3].wind.speed+"MPH";
  iconFour.setAttribute("src", "https://openweathermap.org/img/wn/"+weather.list[3].weather[0].icon+"@2x.png");
  tempFive.textContent="Temperature: "+Math.floor(((weather.list[4].main.temp) - 273.15) * 1.8 + 32) + " °F";
  humidFive.textContent="Humidity: "+weather.list[4].main.humidity+ "%";
  windFive.textContent="Wind Speed: "+weather.list[4].wind.speed+"MPH";
  iconFive.setAttribute("src", "https://openweathermap.org/img/wn/"+weather.list[4].weather[0].icon+"@2x.png");
  
  

}
function fetchWeatherByCity(query){
var url= "https://api.openweathermap.org/data/2.5/weather?q=" +"Raleigh"+
"&units=metric&appid=" +
"9258a0385e244fedfb9b649c2c90053a";
fetch(url)
.then((response) => {
  if (!response.ok) {
    alert("No weather found.");
    throw new Error("No weather found.");
  }
  return response.json();
})
.then((data) => fetchWeatherByCoordinates(data))
//.then((data)=>console.log(data))
}
fetchWeatherByCity();
function fetchWeatherByCoordinates(weather){
  var lon=weather.coord.lon;
  var lat=weather.coord.lat;
  console.log(lon);
  console.log(lat);
  var searchByCoord="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+"9258a0385e244fedfb9b649c2c90053a";
  fetch(searchByCoord)
.then((response) => {
  if (!response.ok) {
    alert("No weather found.");
    throw new Error("No weather found.");
  }
    return response.json();
  })
 .then((data) => renderWeather(data))
// .then((data) => console.log(data))
}
