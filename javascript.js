let weather={
"apiKey": "9258a0385e244fedfb9b649c2c90053a",
fetchWeather: function(){
fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=2bdcf4a80dd9deb5726ef62daec520a9&units=imperial"
)
.then((response)=> response.json())
.then((data)=>console.log(data))
}
}