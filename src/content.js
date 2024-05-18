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
buttonElement.className = "css-vh5nmu";

const element =  document.querySelector('[data-testid="News"]');
const navbar = element?.parentElement?.parentElement?.parentElement;
navbar.appendChild(buttonElement);


// Opens the map on button click
buttonElement.addEventListener('click', () => {
  const searchQuery = document.getElementById("q").value;
  const url = baseURL.replace("QUERY", searchQuery);
  window.location.href = url;
});


// Create a style element
var styleElement = document.createElement("style");

// Set the CSS rules
var cssRules = `
  #maps {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    color: #9EA5BD !important;
    background-color: #0C0D0F;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    padding-bottom: 13px;
    padding-top: 0;
    margin-top: 2px;
    border: none;
  }
`;

// Append the rules to the style element
styleElement.appendChild(document.createTextNode(cssRules));

// Append the style element to the head of the document
document.head.appendChild(styleElement);