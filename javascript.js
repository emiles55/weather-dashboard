var cityInput =$("input");
console.log(cityInput);
let weather={
fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        Denver +
        "&units=imperial&appid=" +
        "9258a0385e244fedfb9b649c2c90053a"
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => console.log(data));
  }
}
function renderWeather(){

}
function fetchWeather(query){
var url= "https://api.openweathermap.org/data/2.5/weather?q=" +
query +
"&units=imperial&appid=" +
"9258a0385e244fedfb9b649c2c90053a"
}