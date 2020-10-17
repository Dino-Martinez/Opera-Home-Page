let searchForm = document.getElementById("search-form");
let submitButton = document.getElementById("submit-form");
let googleButton = document.getElementById("send-to-google");
let queryBox = document.getElementById("google-query");
console.log("Ready");
queryBox.addEventListener("keydown", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    submitButton.click();
  }
});
submitButton.addEventListener("click", function() {
  const regex = /^(https?:\/\/)?(www\.)?\w+((\.com)|(\.org)|(\.net)|(\.io))$/g;
  let searchQuery = queryBox.value;
  if(searchQuery.match(regex)) {
    if (!searchQuery.startsWith('https://') && !searchQuery.startsWith('http://')) {
      searchQuery = "https://" + searchQuery;
    }
    window.location.href = searchQuery;
  } else {
    searchForm.submit();
  }
});

googleButton.addEventListener("click", function() {
   window.location.href = "http://www.google.com";
});