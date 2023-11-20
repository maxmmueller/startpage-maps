const mapsProvider = "Apple";

let baseURL = "";
if (mapsProvider == "Apple") {
  baseURL = "https://duckduckgo.com/?hps=1&q=QUERY&ia=web&iaxm=maps";
}
else if (mapsProvider == "Google") {
  baseURL = "https://www.google.com/maps/place/QUERY";
}

// Creates the Maps button and adds it to the navbar
const buttonElement = document.createElement('button');
buttonElement.textContent = 'Maps';
buttonElement.id = "maps"
const navbar = document.querySelector("#header > div > header > div.inline-nav.css-a1y78t > div.categories.css-ze09hc");
navbar.appendChild(buttonElement);

// Opens the map on button click
buttonElement.addEventListener('click', () => {
  const searchQuery = document.getElementById("q").value;
  const url = baseURL.replace("QUERY", searchQuery);
  window.location.href = url;
});
