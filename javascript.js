

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
  humidFour=document.getElementById("humidityFour");
  humid=document.getElementById("humidity");
  dateChange=document.getElementById("date");
  dateChangeTwo=document.getElementById("dateTwo");
  icon = document.getElementById("weatherIcon");
  date.textContent=weather.list[0].dt_txt;
  city.textContent=weather.city.name;
  temp.textContent=weather.list[0].main.temp;
  humid.textContent=weather.list[0].main.humidity;
  wind.textContent=weather.list[0].wind.speed;
  icon.setAttribute("src", "https://openweathermap.org/img/wn/"+weather.list[0].weather[0].icon+"@2x.png");
  tempTwo.textContent=weather.list[1].main.temp;
  humidTwo.textContent=weather.list[1].main.humidity;
  windTwo.textContent=weather.list[1].wind.speed;
  iconTwo.setAttribute("src", "https://openweathermap.org/img/wn/"+weather.list[1].weather[0].icon+"@2x.png");
  tempThree.textContent=weather.list[2].main.temp;
  humidThree.textContent=weather.list[2].main.humidity;
  windThree.textContent=weather.list[2].wind.speed;
  iconThree.setAttribute("src", "https://openweathermap.org/img/wn/"+weather.list[2].weather[0].icon+"@2x.png");
  tempFour.textContent=weather.list[3].main.temp;
  humidFour.textContent=weather.list[3].main.humidity;
  windFour.textContent=weather.list[3].wind.speed;
  iconFour.setAttribute("src", "https://openweathermap.org/img/wn/"+weather.list[3].weather[0].icon+"@2x.png");
  

}
function fetchWeatherByCity(query){
var url= "https://api.openweathermap.org/data/2.5/weather?q=" +"Denver"+
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
