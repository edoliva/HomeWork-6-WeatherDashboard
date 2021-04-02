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


// search old cities from local storage  
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








// city1.addEventListener("click", function(event) {  
//     var cityName = document.querySelector("#cityName").value.trim();
//     localStorage.setItem("cityName", "Boston");
//     location.reload();
// });

// city2.addEventListener("click", function(event) {  
//     var cityName = document.querySelector("#cityName").value.trim();
//     localStorage.setItem("cityName", "Chicago");
//     location.reload();
// });

// city3.addEventListener("click", function(event) {  
//     var cityName = document.querySelector("#cityName").value.trim();
//     localStorage.setItem("cityName", "Denver");
//     location.reload();
// });

// city4.addEventListener("click", function(event) {  
//     var cityName = document.querySelector("#cityName").value.trim();
//     localStorage.setItem("cityName", "New York");
//     location.reload();
// });


// city5.addEventListener("click", function(event) {  
//     var cityName = document.querySelector("#cityName").value.trim();
//     localStorage.setItem("cityName", "Portland");
//     location.reload();
// });

// city6.addEventListener("click", function(event) {  
//     var cityName = document.querySelector("#cityName").value.trim();
//     localStorage.setItem("cityName", "Savanah");
//     location.reload();
// });

// clear.addEventListener("click", function(event) {  
//     localStorage.clear()
//     location.reload();
// });

