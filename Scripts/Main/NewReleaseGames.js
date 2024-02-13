const newReleaseGames = [
  {
    link: "https://www.nintendo.com/us/store/products/fire-emblem-engage-switch/",
    title: "Fire Emblem Engage (Switch)",
  },
  {
    link: "https://store.steampowered.com/app/1680880/Forspoken/",
    title: "Forspoken (PS5, PC)",
  },
  {
    link: "https://m.apkpure.com/nba-all-world/com.nianticlabs.nbaallworld/download",
    title: "NBA All-World (Mobile)",
  },
  {
    link: "https://store.steampowered.com/app/1675900/Warlander/",
    title: "Warlander (PC)",
  },
  {
    link: "https://store.steampowered.com/app/1451190/Undisputed/",
    title: "Undisputed (PC)",
  },
  {
    link: "https://store.steampowered.com/app/1770080/Superfuse/",
    title: "Superfuse (PC)",
  },
  {
    link: "https://store.steampowered.com/app/1016360/PERISH/",
    title: "Perish (PC)",
  },
  {
    link: "https://store.steampowered.com/app/1090100/Scorchlands/",
    title: "Scorchlands (PC)",
  },
  {
    link: "https://store.steampowered.com/app/1982340/Blanc/",
    title: "Blanc (Switch, PC)",
  },
  {
    link: "https://www.playstation.com/en-ph/games/returnal/",
    title: "Returnal (PC)",
  },
  {
    link: "https://www.nintendo.com/us/store/products/elderand-switch/",
    title: "Elderand (Switch, PC)",
  },
  {
    link: "https://store.steampowered.com/app/1491490/Cosmonious_High/",
    title: "Cosmonius High (PSVR 2) ",
  },
  {
    link: "https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Rumble-Sus-2345897.html",
    title: "Rumble Sus (Switch)",
  },
  {
    link: "https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/",
    title: "Sons of the Forest (PC) ",
  },
  {
    link: "https://store.steampowered.com/app/1082930/The_Signifier_Directors_Cut/",
    title: "The Signifier VR (Quest 2)",
  },
  {
    link: "https://store.steampowered.com/app/1634220/Rytmos/",
    title: "Rytmos (Switch, PC) ",
  },
  {
    link: "https://store.steampowered.com/app/1286280/Pronty/",
    title: "Pronty (Switch) ",
  },
  {
    link: "https://store.steampowered.com/app/1058830/Spin_Rhythm_XD/",
    title: "Spin Rhythm XD (PC)",
  },
  {
    link: "https://store.steampowered.com/app/1285670/Post_Void/",
    title: "Post Void (PS4, Switch) ",
  },
  {
    link: "https://store.steampowered.com/app/1402120/9_Years_of_Shadows/",
    title: "9 Years of Shadows (PC)",
  },
  {
    link: "https://store.steampowered.com/app/1498740/Troublemaker/",
    title: "Troublemaker (PC) ",
  },
];

const container = document.querySelector(".new-release");
container.innerHTML = "";

newReleaseGames.forEach((newgames) => {
  const newReleaseHTML = `
    <a href="${newgames.link}">
    <div class="new-release-games-content-container">
      <div class="new">
        <img src="../All Icons/Main-icons/new.png" alt="">
      </div>
      ${newgames.title}
    </div>
  </a>
    <hr style="width: 95%; margin-top: 2px; margin-bottom: 2px;">`;
  container.innerHTML += newReleaseHTML;
});
