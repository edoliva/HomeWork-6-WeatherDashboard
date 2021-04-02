// date var
var dateDisplayEl = $('#date-display');
var dateDisplayEl1 = $('#date-display1');
var dateDisplayEl2 = $('#date-display2');
var dateDisplayEl3 = $('#date-display3');
var dateDisplayEl4 = $('#date-display4');
var dateDisplayEl5 = $('#date-display5');

// local storage var
var localCityName = localStorage.getItem("cityName"); 
var searchBtn = document.querySelector("#searchBtn");
var austinBtn = document.querySelector("#Austin");
var bostonBtn = document.querySelector("#Boston");
var chicagoBtn = document.querySelector("#Chicago");
var denverBtn = document.querySelector("#Denver");
var newYorkBtn = document.querySelector("#NewYork");
var portlandBtn = document.querySelector("#Portland");
var savanahBtn = document.querySelector("#Savanah");
var sanFranciscoBtn = document.querySelector("#SanFrancisco");
var cityNameDisplay = document.querySelector("#cityNameDisplay");
var cityName = document.querySelector("#cityName");


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

// BUTTONS
// save and then display searched city
if (localCityName != null) {
  cityNameDisplay.textContent = localCityName;
} else {cityNameDisplay.textContent = "...";}

searchBtn.addEventListener("click", function(event) {  
    var cityName = document.querySelector("#cityName").value.trim();
    if (cityName === "") {
      alert("Enter SOMETHING!");
      return;
    }
    localStorage.setItem("cityName", cityName);
    cityNameDisplay.textContent = cityName;
    location.reload();
  });

austinBtn.addEventListener("click", function(event) {  
    var cityName = document.querySelector("#cityName").value.trim();
    localStorage.setItem("cityName", "Austin");
    location.reload();
});

bostonBtn.addEventListener("click", function(event) {  
    var cityName = document.querySelector("#cityName").value.trim();
    localStorage.setItem("cityName", "Boston");
    location.reload();
});

chicagoBtn.addEventListener("click", function(event) {  
    var cityName = document.querySelector("#cityName").value.trim();
    localStorage.setItem("cityName", "Chicago");
    location.reload();
});

denverBtn.addEventListener("click", function(event) {  
    var cityName = document.querySelector("#cityName").value.trim();
    localStorage.setItem("cityName", "Denver");
    location.reload();
});

newYorkBtn.addEventListener("click", function(event) {  
    var cityName = document.querySelector("#cityName").value.trim();
    localStorage.setItem("cityName", "New York");
    location.reload();
});


portlandBtn.addEventListener("click", function(event) {  
    var cityName = document.querySelector("#cityName").value.trim();
    localStorage.setItem("cityName", "Portland");
    location.reload();
});

savanahBtn.addEventListener("click", function(event) {  
    var cityName = document.querySelector("#cityName").value.trim();
    localStorage.setItem("cityName", "Savanah");
    location.reload();
});

sanFranciscoBtn.addEventListener("click", function(event) {  
    var cityName = document.querySelector("#cityName").value.trim();
    localStorage.setItem("cityName", "San Francisco");
    location.reload();
});

