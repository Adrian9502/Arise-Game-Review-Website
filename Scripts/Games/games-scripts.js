import { updateGamesContent } from "./generate-games.js";
import { games } from "./games.js";

//home button before search bar (if you search and want to refresh. this will reset the page )
const homebtn = document.getElementById("js-home-nav");
homebtn.addEventListener("click", updateGamesContent);

//search button
const searchButton = document.getElementById("js-search-btn");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", handleSearch);

// Search input
function handleSearch() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const mainContentContainer = document.querySelector(
    ".main-content-container"
  );
  mainContentContainer.innerHTML = "";

  // if search input is empty, the page will restore to the original state
  if (!searchInput) {
    updateGamesContent();
  } else {
    // Check each games for matching keywords
    const matchingGames = games.filter((games) =>
      games.keyword.some((keyword) =>
        keyword.toLowerCase().includes(searchInput)
      )
    );

    if (matchingGames.length > 0) {
      const resultMessageHTML = `<span class="show-result">Showing Result for : ${searchInput}</span>`;
      mainContentContainer.innerHTML += resultMessageHTML;
      // Display matching reviews
      matchingGames.forEach((game) => {
        const gamesHTML = `
        
      <a href="${game.link}">
      <div class="main-container">
          <div class="game-thumbnail"><img src="${game.img}"></div>
          <div class="game-description-container">
            <span class="game-title">${game.title}</span>
            <div class="game-description">${game.description}</div>
          </div>
      </div>
      </a>`;

        mainContentContainer.innerHTML += gamesHTML;
      });
    } else {
      const resultMessageHTML = `<div class="no-result">We couldn't find what you are looking for. 
    Care to try again? <br><br> No result for : ${searchInput}</div>`;
      mainContentContainer.innerHTML += resultMessageHTML;
    }
  }
}
//keydown enter
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

// handle genre of games
function handleGenre(genre) {
  const mainContentContainer = document.querySelector(
    ".main-content-container"
  );
  mainContentContainer.innerHTML = "";

  const matchingGamesGenre = games.filter((game) =>
    game.genre.includes(genre.toLowerCase())
  );

  if (matchingGamesGenre.length > 0) {
    const showResultHTML = `<span class="show-result">Displaying : ${genre}</span>`;

    mainContentContainer.innerHTML += showResultHTML;

    matchingGamesGenre.forEach((game) => {
      const gamesHTML = `
      <a href="${game.link}">
      <div class="main-container">
          <div class="game-thumbnail"><img src="${game.img}"></div>
          <div class="game-description-container">
            <span class="game-title">${game.title}</span>
            <div class="game-description">${game.description}</div>
          </div>
      </div>
      </a>`;

      mainContentContainer.innerHTML += gamesHTML;
    });
  }
}
// get the genre elements
const genreAction = document.getElementById("search-btn-action");
const genreAdv = document.getElementById("search-btn-adv");
const genreRpg = document.getElementById("search-btn-rpg");
const genreSimu = document.getElementById("search-btn-simu");
const genreStrat = document.getElementById("search-btn-strat");
const genreSports = document.getElementById("search-btn-sports");
const genreRacing = document.getElementById("search-btn-racing");
const genreFighting = document.getElementById("search-btn-fighting");
const genreMmorpg = document.getElementById("search-btn-mmorpg");
// add event listener
genreAction.addEventListener("click", () => handleGenre("Action"));
genreAdv.addEventListener("click", () => handleGenre("Adventure"));
genreRpg.addEventListener("click", () => handleGenre("RPG"));
genreSimu.addEventListener("click", () => handleGenre("Simulation"));
genreStrat.addEventListener("click", () => handleGenre("Strategy"));
genreSports.addEventListener("click", () => handleGenre("Sports"));
genreRacing.addEventListener("click", () => handleGenre("Racing"));
genreFighting.addEventListener("click", () => handleGenre("Fighting"));
genreMmorpg.addEventListener("click", () => handleGenre("MMORPG"));

// make sure the HTML elements loaded before calling the function
document.addEventListener("DOMContentLoaded", () => {
  updateGamesContent();
});
