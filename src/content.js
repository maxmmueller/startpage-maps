const baseURL = "https://duckduckgo.com/?hps=1&q=QUERY&ia=web&iaxm=maps";

// creates the Maps button and adds it to the toolbar
const divElement = document.createElement('div');
divElement.className = 'categories css-1j2749q';

const formElement = document.createElement('form');
formElement.className = 'css-122cu71';

const buttonElement = document.createElement('button');
buttonElement.className = 'css-k54ldh';
buttonElement.textContent = 'Maps';

buttonElement.addEventListener('click', () => {
  const searchQuery = document.getElementById("q").value;
  const url = baseURL.replace("QUERY", searchQuery);
  window.open(url);
});

formElement.appendChild(buttonElement);
divElement.appendChild(formElement);

const targetElement = document.querySelector('.categories.css-1j2749q');
targetElement.appendChild(divElement);
