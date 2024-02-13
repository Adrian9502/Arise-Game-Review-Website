import { behindTheScene } from "./behindTheScene.js";

function generateBehindTheScene() {
  const startIdx = (currentPage - 1) * videoPerPage;
  const endIdx = startIdx + videoPerPage;

  const container = document.getElementById("js-container");
  container.innerHTML = "";

  let behindTheSceneHTML = "";

  for (let i = startIdx; i < endIdx && i < behindTheScene.length; i++) {
    const bts = behindTheScene[i];

    behindTheSceneHTML += `
      <div class="content-container">
        <div class="video-container">
          <iframe src="${bts.video}?autoplay=0&mute=1&controls=1" allowfullscreen" ></iframe>
        </div>
        <div class="description-container">
          <div class="vid-title">${bts.title}</div>
          <div class="description">
            ${bts.description}
          </div>
        </div>
      </div>
    `;
  }
  container.innerHTML = behindTheSceneHTML;
}

// set up numbers of videos to be display per page
const videoPerPage = 10;
let currentPage = 1;
// pagination buttons
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pgNumber = document.querySelector(".pgNumber");

// Add event listeners
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    generateBehindTheScene();
    updatePageNumber();
  }
});
nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(behindTheScene.length / videoPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    generateBehindTheScene();
    updatePageNumber();
  }
});
// Function to update page number
function updatePageNumber() {
  const totalPages = Math.ceil(behindTheScene.length / videoPerPage);
  pgNumber.textContent = `${currentPage}/${totalPages}`;
}
document.addEventListener("DOMContentLoaded", function () {
  generateBehindTheScene();
});
