// date var
var dateDisplayEl = $('#date-display');
var dateDisplayEl1 = $('#date-display1');
var dateDisplayEl2 = $('#date-display2');
var dateDisplayEl3 = $('#date-display3');
var dateDisplayEl4 = $('#date-display4');
var dateDisplayEl5 = $('#date-display5');

// button var
var searchBtn = document.querySelector("#searchBtn");
var clearBtn = document.querySelector("#clearBtn");
var city1 = document.querySelector("#city1");

// local storage var
var cityNameDisplay0 = document.querySelector("#cityNameDisplay0");
var cityNameDisplay1 = document.querySelector("#cityNameDisplay1");
var cityNameDisplay2 = document.querySelector("#cityNameDisplay2");
var cityNameDisplay3 = document.querySelector("#cityNameDisplay3");
var cityNameDisplay4 = document.querySelector("#cityNameDisplay4");
var cityNameDisplay5 = document.querySelector("#cityNameDisplay5");
var cityNameDisplay6 = document.querySelector("#cityNameDisplay6");
var cityNameDisplay7 = document.querySelector("#cityNameDisplay7");

var cityInput = document.querySelector("#city-text");
var cityList = document.querySelector("#city-list");
var cityCountSpan = document.querySelector("#city-count");
var cities = [];

// weather data var
var key = "a6b8c63eda6b4f13328e823d255efd7d";

var tempDisplay0 = document.querySelector("#tempDisplay0");
var tempDisplay1 = document.querySelector("#tempDisplay1");
var tempDisplay2 = document.querySelector("#tempDisplay2");
var tempDisplay3 = document.querySelector("#tempDisplay3");
var tempDisplay4 = document.querySelector("#tempDisplay4");
var tempDisplay5 = document.querySelector("#tempDisplay5");

var humidityDisplay0 = document.querySelector("#humidityDisplay0");
var humidityDisplay1 = document.querySelector("#humidityDisplay1");
var humidityDisplay2 = document.querySelector("#humidityDisplay2");
var humidityDisplay3 = document.querySelector("#humidityDisplay3");
var humidityDisplay4 = document.querySelector("#humidityDisplay4");
var humidityDisplay5 = document.querySelector("#humidityDisplay5");

var windDisplay0 = document.querySelector("#windDisplay0");
var uvDisplay0 = document.querySelector("#uvDisplay0");


// date displays
function displayDate() {
    var today = moment().add(0,'days').format('MM/DD/YYYY');
    dateDisplayEl.text(" "+today);
    today1 = moment().add(1,'days').format('MM/DD/YYYY');
    dateDisplayEl1.text(today1);
    today2 = moment().add(2,'days').format('MM/DD/YYYY');
    dateDisplayEl2.text(today2);
    today3 = moment().add(3,'days').format('MM/DD/YYYY');
    dateDisplayEl3.text(today3);
    today4 = moment().add(4,'days').format('MM/DD/YYYY');
    dateDisplayEl4.text(today4);
    today5 = moment().add(5,'days').format('MM/DD/YYYY');
    dateDisplayEl5.text(today5);
  }
setInterval(displayDate, 1000);
  
// This function is being called below and will run when the page loads.
function init() {
    // Get stored cities from localStorage
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    // If cities were retrieved from localStorage, update the cities array to it
    if (storedCities !== null) {
      cities = storedCities;
    }
  }
function storeCities() {
    // Stringify and set key in localStorage to cities array
    localStorage.setItem("cities", JSON.stringify(cities));
  }
init()

// render all searched cities
if (cities[cities.length-1] != null) {
  cityNameDisplay0.textContent = cities[cities.length-1];
  cityNameDisplay1.textContent = cities[cities.length-2];
  cityNameDisplay2.textContent = cities[cities.length-3];
  cityNameDisplay3.textContent = cities[cities.length-4];
  cityNameDisplay4.textContent = cities[cities.length-5];
  cityNameDisplay5.textContent = cities[cities.length-6];
  cityNameDisplay6.textContent = cities[cities.length-7];
  cityNameDisplay7.textContent = cities[cities.length-8];
} else {cityNameDisplay0.textContent = "...";}


// BUTTONS
// save and then display searched city
searchBtn.addEventListener("click", function(event) {  
    event.preventDefault();
    var cityText = cityInput.value.trim();
    // Return from function early if submitted cityText is blank
    if (cityText === "") {
      alert("Enter SOMETHING!");
      return;
    }
    // Add new cityText to cities array
    cities.push(cityText);
    cityInput.value = "";
    // Store updated cities in localStorage, re-render the list, 
    // refresh page to display item
    storeCities();
    location.reload();
});
// clear just the searched cities from local storage
clearBtn.addEventListener("click", function(event) {  
    localStorage.removeItem('cities');
    location.reload();
});  


// search old cities from local storage, enable buttons  
city1.addEventListener("click", function(event) {  
    cities.push(cities[cities.length-2]);
    cityInput.value = "";
    storeCities();
    location.reload();
});

city2.addEventListener("click", function(event) {  
    cities.push(cities[cities.length-3]);
    cityInput.value = "";
    storeCities();
    location.reload();
});

city3.addEventListener("click", function(event) {  
    cities.push(cities[cities.length-4]);
    cityInput.value = "";
    storeCities();
    location.reload();
});

city4.addEventListener("click", function(event) {  
    cities.push(cities[cities.length-5]);
    cityInput.value = "";
    storeCities();
    location.reload();
});

city5.addEventListener("click", function(event) {  
    cities.push(cities[cities.length-6]);
    cityInput.value = "";
    storeCities();
    location.reload();
});

city6.addEventListener("click", function(event) {  
    cities.push(cities[cities.length-7]);
    cityInput.value = "";
    storeCities();
    location.reload();
});

city7.addEventListener("click", function(event) {  
    cities.push(cities[cities.length-8]);
    cityInput.value = "";
    storeCities();
    location.reload();
});


// CURRENT weather
// get, then display, weather data
var cityName = cities[cities.length-1];
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+key;

fetch(weatherURL)
    .then(response => response.json())
    .then(data =>  {
        console.log(data);
        var cityNameDisplayValue = data['name'];
        var tempDisplayValue0 = parseInt((data['main']['temp'])*9/5-459);
        var humidityDisplayValue0 = data['main']['humidity'];
        var windDisplayValue0 = data['wind']['speed'];
        var iconDisplay0 = data['weather']['0']['icon'];
        var lon = data['coord']['lon'];
        var lat = data['coord']['lat'];


        cityNameDisplay0.innerHTML = cityNameDisplayValue;
        tempDisplay0.innerHTML = tempDisplayValue0+"°F";
        humidityDisplay0.innerHTML = humidityDisplayValue0+"%";
        windDisplay0.innerHTML = windDisplayValue0+" m.p.h.";

        // UV index 
        var uvURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=minutely,hourly,daily,alerts&appid="+key;
        fetch(uvURL)
            .then(response => response.json())
            .then(data =>  {
                console.log(data);
                var uvDisplayValue0 = data['current']['uvi'];
                uvDisplay0.innerHTML = uvDisplayValue0;
        // UV color scale
        var uvBox = document.querySelector(".header3uv"); 
        if (uvDisplayValue0 <= 2) {
            uvBox.setAttribute("style", "background-color: #3EA72D;");
        } else if (uvDisplayValue0 <= 5) {
            uvBox.setAttribute("style", "background-color: #FFF300;");
        } else if (uvDisplayValue0 <= 7) {
            uvBox.setAttribute("style", "background-color: #F18B00;");
        } else if (uvDisplayValue0 <= 10) {
            uvBox.setAttribute("style", "background-color: #E53210;");
        } else { uvBox.setAttribute("style", "background-color: #B567A4;")
        }
        })
        // current weather icon
        $(".image0").attr("src","http://openweathermap.org/img/wn/"+iconDisplay0+"@2x.png");
    
        //5 DAY FORECAST
        var fiveDayWeatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=minutely,hourly,alerts&appid="+key;
        fetch(fiveDayWeatherURL)
            fetch(fiveDayWeatherURL)
            .then(response => response.json())
            .then(data =>  {
                console.log(data);
                var tempDisplayValue1 = parseInt((data['daily']['1']['temp']['day'])*9/5-459);
                var tempDisplayValue2 = parseInt((data['daily']['2']['temp']['day'])*9/5-459);
                var tempDisplayValue3 = parseInt((data['daily']['3']['temp']['day'])*9/5-459);
                var tempDisplayValue4 = parseInt((data['daily']['4']['temp']['day'])*9/5-459);
                var tempDisplayValue5 = parseInt((data['daily']['5']['temp']['day'])*9/5-459);
        
                var humidityDisplayValue1 = data['daily']['1']['humidity'];
                var humidityDisplayValue2 = data['daily']['2']['humidity'];
                var humidityDisplayValue3 = data['daily']['3']['humidity'];
                var humidityDisplayValue4 = data['daily']['4']['humidity'];
                var humidityDisplayValue5 = data['daily']['5']['humidity'];
        
                var iconDisplay1 = data['daily']['1']['weather']['0']['icon'];
                var iconDisplay2 = data['daily']['2']['weather']['0']['icon'];
                var iconDisplay3 = data['daily']['3']['weather']['0']['icon'];
                var iconDisplay4 = data['daily']['4']['weather']['0']['icon'];
                var iconDisplay5 = data['daily']['5']['weather']['0']['icon'];
        
                tempDisplay1.innerHTML = tempDisplayValue1+"°F";
                tempDisplay2.innerHTML = tempDisplayValue2+"°F";
                tempDisplay3.innerHTML = tempDisplayValue3+"°F";
                tempDisplay4.innerHTML = tempDisplayValue4+"°F";
                tempDisplay5.innerHTML = tempDisplayValue5+"°F";
        
                humidityDisplay1.innerHTML = humidityDisplayValue1+"%";
                humidityDisplay2.innerHTML = humidityDisplayValue2+"%";
                humidityDisplay3.innerHTML = humidityDisplayValue3+"%";
                humidityDisplay4.innerHTML = humidityDisplayValue4+"%";
                humidityDisplay5.innerHTML = humidityDisplayValue5+"%";
        
                $(".image1").attr("src","http://openweathermap.org/img/wn/"+iconDisplay1+"@2x.png");
                $(".image2").attr("src","http://openweathermap.org/img/wn/"+iconDisplay2+"@2x.png");
                $(".image3").attr("src","http://openweathermap.org/img/wn/"+iconDisplay3+"@2x.png");
                $(".image4").attr("src","http://openweathermap.org/img/wn/"+iconDisplay4+"@2x.png");
                $(".image5").attr("src","http://openweathermap.org/img/wn/"+iconDisplay5+"@2x.png");
            })

        })
        // .catch(err => alert("Invalid city entry, try again."))
 
    
