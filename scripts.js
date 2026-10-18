const loadButton = document.getElementById("load-consoles-btn");
const statusMessage = document.getElementById("status-message");
const summaryLine = document.getElementById("summary-line");
const cardsContainer = document.getElementById("cards-container");

const API_URL = "https://ozarktechwebdev.com/api/consoles.json";

function loadConsoles() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = JSON.parse(xhr.responseText);

      console.log(data);
      console.log(data.consoles);
      console.log(data.consoles.length);
    }
  };

  xhr.send();
}

loadButton.addEventListener("click", loadConsoles);