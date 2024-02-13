import { editorsGames } from "./editors-choice.js";

const gamesPerPage = 24;
let currentPage = 1;

function updateEditorsGames() {
  const startIdx = (currentPage - 1) * gamesPerPage;
  const endIdx = startIdx + gamesPerPage;

  const mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = "";

  for (let i = startIdx; i < endIdx && i < editorsGames.length; i++) {
    const game = editorsGames[i];

    const gameHTML = `
      <div class="main-content-container">
      <a href="${game.link}">
        <div class="thumbnail">
          <img src="${game.thumbnail}" alt="">
        </div>
        <div class="desc">
          <div class="icon">
            <img src="${game.icon}" alt="">
          </div>
          <a href="${game.link}">
            <div class="title">
            ${game.title}
            </div>
          </a>
          <div class="rating">
            <img src="${game.rating}" alt="">
          </div>
          <a href="${game.link}">
            <div class="download">
              <img src="../All Icons/download.png" alt="">
            </div>
          </a>
        </div>
       </a>  
      </div>
  `;
    mainContainer.innerHTML += gameHTML;
  }
}

// get buttons element
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pgNumber = document.querySelector(".pgNumber");

// Add event listeners
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateEditorsGames();
    updatePageNumber();
  }
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(editorsGames.length / gamesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    updateEditorsGames();
    updatePageNumber();
  }
});
// Function to update page number
function updatePageNumber() {
  const totalPages = Math.ceil(editorsGames.length / gamesPerPage);
  pgNumber.textContent = `${currentPage}/${totalPages}`;
}
// wait for the html to fully loaded before calling the js functions
document.addEventListener("DOMContentLoaded", () => {
  updateEditorsGames();
  updatePageNumber();
});
