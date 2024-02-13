// import functions
import { interviews } from "./Interviews.js";

// export functions to seperate them base on their purpose/script
export function generateInterviews() {
  const startIdx = (currentPage - 1) * videoPerPage;
  const endIdx = startIdx + videoPerPage;

  const container = document.getElementById("js-container");
  container.innerHTML = "";

  let interviewsHTML = "";

  for (let i = startIdx; i < endIdx && i < interviews.length; i++) {
    const interview = interviews[i];

    interviewsHTML += `
      <div class="content-container">
        <div class="content-container-grid">
          <div class="video-container">
            <iframe id="interview-videos" src="${interview.video}?autoplay=0&mute=1&controls=1" allowfullscreen>
            </iframe>
          </div>
          <div class="description-container">
            <div class="video-title">
              ${interview.title}
            </div>
            <div class="channel-container">
              <div class="channel-profile">
                <img src="${interview.channelPic}" alt="channel picture">
              </div>
              <div class="channel-author">
                <p>
                  by ${interview.channelName} &check;
                </p>
              </div>
              <div class="video-views">
                <p>
                  ${interview.views}
                </p>
              </div>
            </div>
            <div class="video-desc">
              <p>
                ${interview.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  container.innerHTML = interviewsHTML;
}

// set up numbers of videos to be display per page
const videoPerPage = 5;
let currentPage = 1;
// pagination buttons
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pgNumber = document.querySelector(".pgNumber");

// Add event listeners
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    generateInterviews();
    updatePageNumber();
  }
});
nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(interviews.length / videoPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    generateInterviews();
    updatePageNumber();
  }
});
// Function to update page number
function updatePageNumber() {
  const totalPages = Math.ceil(interviews.length / videoPerPage);
  pgNumber.textContent = `${currentPage}/${totalPages}`;
}

generateInterviews();
