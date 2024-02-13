import { games } from "./games.js";

// function to update the page
//Pagination Start
export function updateGamesContent() {
  const startIdx = (currentPage - 1) * gamesPerPage;
  const endIdx = startIdx + gamesPerPage;

  const mainContentContainer = document.querySelector(
    ".main-content-container"
  );
  mainContentContainer.innerHTML = "";

  for (let i = startIdx; i < endIdx && i < games.length; i++) {
    const game = games[i];

    const gameHTML = `
    <a href="${game.link}">
      <div class="main-container">
          <div class="game-thumbnail"><img src="${game.img}"></div>
          <div class="game-description-container">
            <span class="game-title">${game.title}</span>
            <div class="game-description">${game.description}</div>
          </div>
      </div>
      </a>`;

    mainContentContainer.innerHTML += gameHTML;
  }
}
const gamesPerPage = 10;
let currentPage = 1;

// Pagination section
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pgNumber = document.querySelector(".pgNumber");

// Add event listeners
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateGamesContent();
    updatePageNumber();
  }
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(games.length / gamesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    updateGamesContent();
    updatePageNumber();
  }
});
// Function to update page number
function updatePageNumber() {
  const totalPages = Math.ceil(games.length / gamesPerPage);
  pgNumber.textContent = `${currentPage}/${totalPages}`;
}
