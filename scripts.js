let searchForm = document.getElementById("search-form");
let submitButton = document.getElementById("submit-form");
let googleButton = document.getElementById("send-to-google");
let weather = document.getElementById("weather-object");
window.addEventListener('load', function() {
  console.log(weather.childNodes);
});
submitButton.addEventListener("click", function() {
  searchForm.submit();
});

googleButton.addEventListener("click", function() {
  window.location.href = "http://www.google.com";
});