// import array of objects (allReviews) from allReviews.js
import { allReviews } from "./AllReviews.js";

//Pagination Start
const reviewsPerPage = 5;
let currentPage = 1;

//get the container
const mainContentContainer = document.querySelector(".main-container");

function updateReviewsContent() {
  const startIdx = (currentPage - 1) * reviewsPerPage;
  const endIdx = startIdx + reviewsPerPage;

  mainContentContainer.innerHTML = "";
  for (let i = startIdx; i < endIdx && i < allReviews.length; i++) {
    const reviews = allReviews[i];

    const reviewsHTML = `

        <a href="${reviews.link}">
          <div class="grid-container">
            <div class="grid-container-image">
              <img src="${reviews.img}" alt="Image">
            </div>
            <div class="grid-container-description">
              <span class="grid-container-description-title">
                ${reviews.title}
              </span>
              <span class="grid-container-description-date">
              ${reviews.date}
              </span>
              <span class="grid-container-description-text">
              ${reviews.description}
              </span>
            </div>
          </div>
        </a>`;
    mainContentContainer.innerHTML += reviewsHTML;
  }
}

//Navigator buttons
const homebtn = document.getElementById("js-home-nav");
homebtn.addEventListener("click", updateReviewsContent);

// Search input
function handleSearch() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const mainContentContainer = document.querySelector(".main-container");
  mainContentContainer.innerHTML = "";

  // if search input is empty, the page will restore to the original state
  if (!searchInput) {
    updateReviewsContent();
  } else {
    // Check each review for matching keywords
    const matchingReviews = allReviews.filter((review) =>
      review.keyword.some((keyword) =>
        keyword.toLowerCase().includes(searchInput)
      )
    );

    if (matchingReviews.length > 0) {
      const resultMessageHTML = `<span class="show-result">Showing Result for: ${searchInput}</span>`;
      mainContentContainer.innerHTML += resultMessageHTML;
      // Display matching reviews
      matchingReviews.forEach((result) => {
        const reviewsHTML = `
          
          <a href="${result.link}">
            <div class="grid-container">
              <div class="grid-container-image">
                <img src="${result.img}" alt="Image">
              </div>
              <div class="grid-container-description">
                <span class="grid-container-description-title">
                  ${result.title}
                </span>
                <span class="grid-container-description-date">
                  ${result.date}
                </span>
                <span class="grid-container-description-text">
                  ${result.description}
                </span>
              </div>
            </div>
          </a>`;
        mainContentContainer.innerHTML += reviewsHTML;
      });
    } else {
      // If no matching reviews, display a message
      const reviewsHTML = `
        <div class="cant-find-description">
          We couldn't find what you are looking for. Care to try again?
          <br><br>
          No result for: ${searchInput}
        </div>
        `;
      mainContentContainer.innerHTML += reviewsHTML;
    }
  }
}
// "enter" event key
document
  .getElementById("searchInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
document
  .getElementById("js-search-btn")
  .addEventListener("click", handleSearch);

// genre buttons
function handleGenre(genre) {
  const mainContentContainer = document.querySelector(".main-container");
  mainContentContainer.innerHTML = "";

  const matchingReviewsGenre = allReviews.filter((allReviews) =>
    allReviews.genre.includes(genre.toLowerCase())
  );

  if (matchingReviewsGenre.length > 0) {
    const showResultHTML = `<span class="show-result">Displaying : ${genre} Reviews</span>`;

    mainContentContainer.innerHTML += showResultHTML;

    matchingReviewsGenre.forEach((review) => {
      const reviewsHTML = `
          
        <a href="${review.link}">
          <div class="grid-container">
            <div class="grid-container-image">
              <img src="${review.img}" alt="Image">
            </div>
            <div class="grid-container-description">
              <span class="grid-container-description-title">
                ${review.title}
              </span>
              <span class="grid-container-description-date">
                ${review.date}
              </span>
              <span class="grid-container-description-text">
                ${review.description}
              </span>
            </div>
          </div>
        </a>`;
      mainContentContainer.innerHTML += reviewsHTML;
    });
  }
}
const genreAction = document.getElementById("search-btn-action");
const genreAdv = document.getElementById("search-btn-adv");
const genreRpg = document.getElementById("search-btn-rpg");
const genreSimu = document.getElementById("search-btn-simu");
const genreStrat = document.getElementById("search-btn-strat");
const genreSports = document.getElementById("search-btn-sports");
const genreRacing = document.getElementById("search-btn-racing");
const genreFighting = document.getElementById("search-btn-fighting");
const genreMmorpg = document.getElementById("search-btn-mmorpg");

genreAction.addEventListener("click", () => handleGenre("Action"));
genreAdv.addEventListener("click", () => handleGenre("Adventure"));
genreRpg.addEventListener("click", () => handleGenre("RPG"));
genreSimu.addEventListener("click", () => handleGenre("Simulation"));
genreStrat.addEventListener("click", () => handleGenre("Strategy"));
genreSports.addEventListener("click", () => handleGenre("Sports"));
genreRacing.addEventListener("click", () => handleGenre("Racing"));
genreFighting.addEventListener("click", () => handleGenre("Fighting"));
genreMmorpg.addEventListener("click", () => handleGenre("MMORPG"));

// pagination
// get the element

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pgNumber = document.querySelector(".pgNumber");

// Add event listeners
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateReviewsContent();
    updatePageNumber();
  }
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    updateReviewsContent();
    updatePageNumber();
  }
});
// Function to update page number
function updatePageNumber() {
  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);
  pgNumber.textContent = `${currentPage}/${totalPages}`;
}

updateReviewsContent();
updatePageNumber();
