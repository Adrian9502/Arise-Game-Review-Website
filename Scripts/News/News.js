import { games } from "./news-link.js";

for (let i = 0; i < 3; i++) {
  const game = games[i];
  const card = `<div class="card mb-3" style="max-width: 992px" id="card">
<div class="row g-0">
  <div class="col-md-4">
    <a href="${game.link}"
      ><img
        src="${game.img}"
        alt="..."
        class="img-fluid"
        id="img"
    /></a>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${game.title}</h5>
      <p class="card-text">
        ${game.description}
      </p>
      <p class="card-text">
        <small class="text-body-secondary"
          >Last updated 3 mins ago</small
        >
      </p>
    </div>
  </div>
</div>
</div>`;

  document.getElementById("cards-container").innerHTML += "" + card;
}
