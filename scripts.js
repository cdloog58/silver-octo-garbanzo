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

      for (const item of data.consoles) {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;

        const h2 = document.createElement("h2");
        h2.textContent = item.name;

        const p = document.createElement("p");
        p.textContent = item.manufacturer + " - " + item.year;

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(p);

        cardsContainer.appendChild(card);
      }
    }
  };

  xhr.send();
}

loadButton.addEventListener("click", loadConsoles);