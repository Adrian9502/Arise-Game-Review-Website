import {
  wildRift,
  mobileLegends,
  farlight84,
  pubgBattleGrounds,
  gta5,
  freeFire,
  valorant,
  apexLegends,
} from "./gameplays.js";

// generate html (parameterized function)
function generateHTML(containerId, dataArray) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  dataArray.forEach((gamePlay) => {
    let vids = `
      <div class="video-container">
        <div class="video-thumbnail">
        <iframe class="video" src="${gamePlay.video}?autoplay=0&mute=1&controls=1" allowfullscreen>
        </iframe>
        </div>
        <div class="video-description-grid">
          <div class="channel-picture">
            <div class="channel">
              <img src="${gamePlay.channelPicture}" alt="">
            </div>
          </div>
          <div class="video-info">
            <p class="video-title vid-title">
              ${gamePlay.vidTitle}
            </p>
            <p class="video-author">
              ${gamePlay.vidAuthor} &check;
            </p>
          </div>
        </div>
      </div>`;

    container.innerHTML += vids;
  });
}

// calling functions
generateHTML("wild-rift-js-container", wildRift);
generateHTML("mobile-legends-js-container", mobileLegends);
generateHTML("farlight84-js-container", farlight84);
generateHTML("pubgBattleGrounds-js-container", pubgBattleGrounds);
generateHTML("gta5-js-container", gta5);
generateHTML("freeFire-js-container", freeFire);
generateHTML("valorant-js-container", valorant);
generateHTML("apex-legends-js-container", apexLegends);
