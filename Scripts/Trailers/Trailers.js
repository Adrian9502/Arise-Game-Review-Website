//array of objects for generating html
const trailers = [
  {
    // 1-[PROTOTYPE] - Opening Cinematic Trailer
    video: 'https://www.youtube.com/embed/Nc3XptLacMM',
    title: '[PROTOTYPE] - Opening Cinematic Trailer',
    keyword:[
      'prototype','prototype 1'
    ],
    genre:[
      'action'
    ]
  },
  {
    // 2-Alan Wake 2 - Official Launch Trailer
    video: 'https://www.youtube.com/embed/dlQ3FeNu5Yw',
    title: 'Alan Wake 2 - Official Launch Trailer',
    keyword:[
      'alan wake 2','alanwake2','alan','wake 2','alan 2', 
    ],
    genre:[
      'adventure'
    ]
  },
  {
    // 3-All Star Brawl 2 - Announce Trailer | PS5 & PS4 Games
    video: 'https://www.youtube.com/embed/KDlOIc9HsyA',
    title: 'All Star Brawl 2 - Announce Trailer | PS5 & PS4 Games',
    keyword:[
      'all star brawl 2','all star brawl','all','star','brawl', 
    ],
    genre:[
      'fighting'
    ]
  },
  {
    // 4-Among Us Roles Trailer
    video: 'https://www.youtube.com/embed/9pyYq9lpjls',
    title: 'Among Us Roles Trailer',
    keyword:[
      'the wolf among us','the','wolf','among us','among','us'
    ],
    genre:[
      'action'
    ]
  },
  {
    // 5-Apex Legends - Official Cinematic Launch Trailer
    video: 'https://www.youtube.com/embed/oQtHENM_GZU',
    title: 'Apex Legends - Official Cinematic Launch Trailer',
    keyword:[
      'apex legends','apex','legends',
    ],
    genre:[
      'action'
    ]
  },
  {
    // 6-Ara : History Untold - Announce Trailer - Xbox & Bethesda Games Showcase 2022
    video: 'https://www.youtube.com/embed/O_ebBkL14Cg',
    title: 'Ara : History Untold - Announce Trailer - Xbox & Bethesda Games Showcase 2022',
    keyword:[
      'ara','ara history untold','history untold',
    ],
    genre:[
      'strategy'
    ]
    
  },
  {
    // 7-ARMORED CORE VI FIRES OF RUBICON — Launch Trailer
    video: 'https://www.youtube.com/embed/kQJb8He0pYA',
    title: 'ARMORED CORE VI FIRES OF RUBICON — Launch Trailer',
    keyword:[
      'armored core 6','armored core','armored','armor','core','armored core vi',
    ],
    genre:[
      'fighting'
    ]
  },
  {
    // 8-Assassin's Creed Mirage Launch Trailer
    video: "https://www.youtube.com/embed/IRNOoOYVn80",
    title: "Assassin's Creed Mirage Launch Trailer",
    keyword:[
      'assasins creed mirage','mirage','creed','assasins','creed mirage','assasins creed','assasins mirage'
    ],
    genre:[
      'action'
    ]
  },
  {
    // 9-Avatar: Frontiers of Pandora - Official Story Trailer
    video: 'https://www.youtube.com/embed/sIYHK0Q2Jkc',
    title: 'Avatar: Frontiers of Pandora - Official Story Trailer',
    keyword:[
      'avatar','ava','avatar frontiers of pandora','frontier','pandora', 'avatar frontier','avatar frontiers','frontiers'
    ],
    genre:[
      'action'
    ]
  },
  {
    // 10-Avowed - Official Gameplay Trailer
    video: 'https://www.youtube.com/embed/ULsF7B6bFuU',
    title: 'Avowed - Official Gameplay Trailer',
    keyword:[
      'avowed','avow '
    ],
    genre:[
      'rpg'
    ]
  },
  {
    // 11-Baldur's Gate 3 - Gameplay Trailer  State of Play 2023
    video: "https://www.youtube.com/embed/okFSR8CCOPY",
    title: "Baldur's Gate 3 - Gameplay Trailer  State of Play 2023",
    keyword:[
      'baldurs gate 3','baldurs','baldur','baldurs gate three','bg3','bg'
    ],
    genre:[
      'strategy'
    ]
  },
  {
    // 12-Battlefield 2042 Official Gameplay Trailer
    video: 'https://www.youtube.com/embed/WomAGoEh-Ss',
    title: 'Battlefield 2042 Official Gameplay Trailer',
    keyword:[
      'battlefield 2042','2042','battle','field',
    ],
    genre:[
      'adventure'
    ]
  },
  {
    // 13-Black Myth_ Wukong - Official Trailer
    video: 'https://www.youtube.com/embed/5pL3joRyeGY',
    title: 'Black Myth : Wukong - Official Trailer',
    keyword:[
      'black','myth','wukong','black myth wukong'
    ],
    genre:[
      'rpg'
    ]
  },
  {
    // 14-bluey
    video: 'https://www.youtube.com/embed/qgY7OZshWHg',
    title: 'Bluey: The Videogame - Launch Trailer - Nintendo Switch',
    keyword:[
      'bluey the videogame','videogame','bluey'
    ],
    genre:[
      'adventure'
    ]
  },
  {
    // 15-Boundary - Official Launch Trailer
    video: 'https://www.youtube.com/embed/pDBy6CADau8',
    title: 'Boundary - Official Launch Trailer',
    keyword:[
      'boundary','boun','dary'
    ],
    genre:[
      'adventure'
    ]
  },
  {
    // 16-Brawlhalla Gameplay Trailer - the Free to Play Fighting Game
    video: 'https://www.youtube.com/embed/Odj7pIsHRt0',
    title: 'Brawlhalla Gameplay Trailer - the Free to Play Fighting Game',
    keyword:[
      'brawhalla','braw'
    ],
    genre:[
      'fighting'
    ]
  },
  {
    // 17-Call of Duty_ Modern Warfare II _ Official Launch Gameplay Trailer
    video: 'https://www.youtube.com/embed/ho3jY94txHI',
    title: 'Call of Duty : Modern Warfare II  Official Launch Gameplay Trailer',
    keyword:[
      'call of duty modern warface 2','cod modern warfare','modern','warfare','call of duty','cod','call of duty',
    ],
    genre:[
      'fighting'
    ]
  },
  {
    // 18-Call of Duty®_ Black Ops Cold War - Official Launch Trailer
    video: 'https://www.youtube.com/embed/JXOY-HWTErs',
    title: 'Call of Duty®_ Black Ops Cold War - Official Launch Trailer',
    keyword:[
      'call of duty black ops cold war','call of duty black ops','call of duty','cod black ops','cod black ops cold war','codbocw','coldwar','cod'
    ],
    genre:[
      'fighting'
    ]
  },
  {
    // 19-Call of Duty®_Mobile - Cinematic Trailer
    video: 'https://www.youtube.com/embed/tv7LfFeamsc',
    title: 'Call of Duty®_Mobile - Cinematic Trailer',
    keyword:[
      'codm','call of duty mobile','call of duty','codmobile','cod mobile'
    ],
    genre:[
      'fighting'
    ]
  },
  {
    // 20-Gameplay Reveal Trailer | Call of Duty: Modern Warfare III
    video: 'https://www.youtube.com/embed/mHDEDDrGYvo',
    title: 'Gameplay Reveal Trailer | Call of Duty: Modern Warfare III',
    keyword:[
      'call of duty modern warface 3','cod modern warfare','modern','warfare','call of duty','cod','call of duty',
    ],
    genre:[
      'fighting'
    ]
  },
  {
    // 21-Company of Heroes 3 - Official Features Trailer _ gamescom 2022
    video: 'https://www.youtube.com/embed/ro3YUfwta3Y',
    title: 'Company of Heroes 3 - Official Features Trailer',
    keyword:[
      'company of heroes 3','heroes','company','company of','heroes 3'
    ],
    genre:[
      'strategy'
    ]
  },
  {
    // 22-Control - Gamescom 2019 Launch Trailer _ PS4
    video: 'https://www.youtube.com/embed/PT5yMfC9LQM',
    title: 'Control - Gamescom 2019 Launch Trailer PS4',
    keyword:[
      'control'
    ],
    genre:[
      'adventure'
    ]
  },
  {
    // 23-Counter-Strike 2 - Official Launch Trailer
    video: 'https://www.youtube.com/embed/c80dVYcL69E',
    title: 'Counter-Strike 2 - Official Launch Trailer',
    keyword:[
      'counter-strike 2', 'counter-strike', 'cs2'
    ],
    genre:[
      'action'
    ]
  },
  {
    // 24-CCyberpunk 2077 — Official E3 2018 Trailer
    video: 'https://www.youtube.com/embed/8X2kIfS6fb8',
    title: 'Cyberpunk 2077 — Official E3 2018 Trailer',
    keyword:[
      'cyberpunk','2077','cy'
    ],
    genre:[
      'adventure'
    ]
  },
  {
    // 25-Cyberpunk 2077_ Phantom Liberty — Official Launch Trailer
    video: 'https://www.youtube.com/embed/kfX9n_G0N2Y',
    title: 'Cyberpunk 2077 : Phantom Liberty — Official Launch Trailer',
    keyword:[
      'cy','2077','cyberpunk', 'cyberpunk 2077','phantom liberty','liberty','phantom'
    ],
    genre:[
      'rpg','fighting'
    ]
  },
  {
    // 26-Dead Island_ Official Announcement Trailer
    video: 'https://www.youtube.com/embed/lZqrG1bdGtg',
    title: 'Dead Island Official Announcement Trailer',
    keyword:[
      'dead island','dead','island'
    ],
    genre:[
      'rpg'
    ]
  },
  {
    // 27-Death Stranding Director's Cut - Pre-order Trailer _ PS5
    video: "https://www.youtube.com/embed/6tgsz7WbidU",
    title: "Death Stranding Director's Cut - Pre-order Trailer PS5",
    keyword:[
      'death stranding directors cut','death','stranding','directors cut','directors'
    ],
    genre:[
      'adventure','fighting'
    ]
  },
  {
    // 28-Deliver Us Mars - Story Trailer _ PS5 & PS4 Games
    video: 'https://www.youtube.com/embed/XmHWaryqA_c',
    title: 'Deliver Us Mars - Story Trailer PS5 & PS4 Games',
    keyword:[
      'deliver us mars','deliver','deliver us','mars','us mars',
    ],
    genre:[
      'adventure','action'
    ]
  },
  {
    // 29-Destiny 2  - Official Live Action Trailer - New Legends Will Rise
    video: 'https://www.youtube.com/embed/m_4bFPISgwI',
    title: 'Destiny 2  - Official Live Action Trailer - New Legends Will Rise',
    keyword:[
      'destiny 2','destiny','destiny2'
    ],
    genre:[
      'mmorpg','fighting','action','rpg'
    ]
  },
  {
    // 30-Devil May Cry 5 - E3 2018 Announcement Trailer
    video: 'https://www.youtube.com/embed/g_2VZvi0fQ0',
    title: 'Devil May Cry 5 - E3 2018 Announcement Trailer',
    keyword:[
      'devil may cry 5','devil','may','cry',
    ],
    genre:[
      'action','fighting','adventure'
    ]
  },
  {
    // 31-Diablo 4 Official Cinematic Release Date Trailer
    video: 'https://www.youtube.com/embed/Ro26B394ZBM',
    title: 'Diablo IV Official Cinematic Release Date Trailer',
    keyword:[
      'diablo 4','diablo' ,'diablo iv'
    ],
    genre:[
      'mmorpg','fighting'
    ]
  },
  {
    // 32-Dota 2 Gamescom Trailer
    video: 'https://www.youtube.com/embed/-cSFPIwMEq4',
    title: 'Dota 2 Gamescom Trailer',
    keyword:[
      'dota 2','dota2','dotatwo','dota'
    ],
    genre:[
      'mmorpg','strategy'
    ]
  },
  {
    // 33-EA SPORTS FC 24 _ Official Gameplay Trailer
    video: 'https://www.youtube.com/embed/XhP3Xh4LMA8',
    title: 'EA SPORTS FC 24 Official Gameplay Trailer',
    keyword:[
      'ea sports fc 24','ea sports fc','ea sports 24','ea','sports','sport'
    ],
    genre:[
      'simulation','sports'
    ]
  },
  {
    // 34-Far Cry 6 - Official Reveal Trailer _ Ubisoft Forward
    video: 'www.youtube.com/embed/-IJuKT1mHO8',
    title: 'Far Cry 6 - Official Reveal Trailer Ubisoft Forward',
    keyword:[
      'far cry 6','fc','farcry','far','cry'
    ],
    genre:[
      'action','adventure','fighting'
    ]
  },
  {
    // 35-FIFA 23 Reveal Trailer _ The World’s Game
    video: 'https://www.youtube.com/embed/o3V-GvvzjE4',
    title: 'FIFA 23 Reveal Trailer : The World’s Game',
    keyword:[
      'ea sports fifa 23','ea','sports','23','fifa','ea fifa'
    ],
    genre:[
      'simulation','sports'
    ]
  },
  {
    // 36-FINAL FANTASY XIV_ DAWNTRAIL - Extended Teaser Trailer
    video: 'https://www.youtube.com/embed/2ISoqghadkE',
    title: 'FINAL FANTASY XIV : DAWNTRAIL - Extended Teaser Trailer',
    keyword:[
      'final fantasy xiv','final fantasy 14','final','fantasy','14'
    ],
    genre:[
      'action','fighting','rpg','adventure'
    ]
  },
  {
    // 37-flashback
    video: 'https://www.youtube.com/embed/3Qze73xgXn4',
    title: 'Flashback 2 : Launch Trailer',
    keyword:[
      'flashback','flash','back','flashback2','flashback 2'
    ],
    genre:[
      'action','adventure'
    ]
  },
  {
    // 38-Forspoken - Cinematic Trailer _ PS5 Games
    video: 'https://www.youtube.com/embed/AdZUrXCqUck',
    title: 'Forspoken - Cinematic Trailer _ PS5 Games',
    keyword:[
      'forspoken','spoken','for'
    ],
    genre:[
      'action','fighting','adventure'
    ]
  },
  {
    // 39-Fortnite Chapter 4_ Season OG - Blast Off! Trailer
    video: 'https://www.youtube.com/embed/OHLjHuLVisA',
    title: 'Fortnite Chapter 4 Season OG - Blast Off! Trailer',
    keyword:[
      'fortnite','for'
    ],
    genre:[
      'action','simulation','action','rpg','strategy'
    ]
  },
  {
    // 40-Forza Horizon 5 - Official Launch Trailer
    video: 'https://www.youtube.com/embed/Rv7xLt5yNsM',
    title: 'Forza Horizon 5 - Official Launch Trailer',
    keyword:[
      'forza horizon 5','forza','horizon'
    ],
    genre:[
      'racing','action','adventure'
    ]
  },
  {
    // 41-Genshin Impact - Official Launch Trailer
    video: 'https://www.youtube.com/embed/HLUY1nICQRY',
    title: 'Genshin Impact - Official Launch Trailer',
    keyword:[
      'genshin impact','genshin','impact'
    ],
    genre:[
      'adventure','action','rpg','mmorpg'
    ]
  },
  {
    // 42-Ghost of Tsushima - A Storm is Coming Trailer _ PS4
    video: 'https://www.youtube.com/embed/RcWk08PBe7k',
    title: 'Ghost of Tsushima - A Storm is Coming Trailer PS4',
    keyword:[
      'ghost of tsushima','ghost of','ghost','tsushima',
    ],
    genre:[
      'rpg','fighting','action','adventure'
    ]
  },
  {
    // 43-God of War – Story Trailer _ PS4
    video: 'https://www.youtube.com/embed/K0u_kAWLJOA',
    title: 'God of War – Story Trailer PS4',
    keyword:[
      'god of war','war','god of','god','of'
    ],
    genre:[
      'action','fighting','rpg','adventure'
    ]
  },
  {
    // 44-Grand Theft Auto IV Trailer 1 _Things Will Be Different_
    video: 'https://www.youtube.com/embed/M80K51DosFo',
    title: 'Grand Theft Auto IV Trailer 1 : Things Will Be Different',
    keyword:[
      'gta 4','gta4','grandtheftauto4','grand theft auto 4','gtaiv','gta iv'
    ],
    genre:[
      'action','adventure'
    ]
  },
  {
    // 45-Grand Theft Auto V Trailer (1)
    video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    title: 'Grand Theft Auto V Trailer',
    keyword:[
      'gta 5','gta5','grandtheftauto5','grand theft auto 5','gtav','gta v'
    ],
    genre:[
      'action','adventure'
    ]
  },
  {
    // 46-Grand Theft Auto VI Trailer 1
    video: 'https://www.youtube.com/embed/QdBZY2fkU-0',
    title: 'Grand Theft Auto VI Trailer 1',
    keyword:[
      'gta 6','gta6','grandtheftauto6','grand theft auto 6','gtavi'
    ],
    genre:[
      'action','adventure'
    ]
  },
  {
    // 47-Halo Infinite _ Campaign Launch Trailer
    video: 'https://www.youtube.com/embed/PyMlV5_HRWk',
    title: 'Halo Infinite Campaign Launch Trailer',
    keyword:[
      'halo infinite','halo','infinite'
    ],
    genre:[
      'adventure'
    ]
  },
  {
    // 48-Hogwarts Legacy - Official Reveal Trailer | PS5
    video: 'https://www.youtube.com/embed/1O6Qstncpnc',
    title: 'Hogwarts Legacy - Official Reveal Trailer | PS5',
    keyword:[
      'hogwarts legacy','hogwarts','legacy'
    ],
    genre:[
      'action','rpg'
    ]
  },
  {
    // 49-Horizon Call of the Mountain - Launch Trailer _ PS VR2 Games
    video: 'https://www.youtube.com/embed/cUWB3NBpcbo',
    title: 'Horizon Call of the Mountain - Launch Trailer PS VR2 Games',
    keyword:[
      'horizon call of the mountain','mountain','call of the mountain','horizon','call'
    ],
    genre:[
      'action','adventure'
    ]
  },
  {
    // 50-Immortals of Aveum™ _ Official Launch Trailer
    video: 'https://www.youtube.com/embed/KPBJlCWCtco',
    title: 'Immortals of Aveum™  Official Launch Trailer',
    keyword:[
      'immortals of aveum','aveum','immortal','immortals','of aveum'
    ],
    genre:[
      'rpg','adventure'
    ]
  },
  {
    // 51-Inside Rainbow Official Trailer – Tom Clancy's Rainbow Six Siege
    video: "https://www.youtube.com/embed/KlbLLRdg9u8",
    title: "Inside Rainbow Official Trailer – Tom Clancy's Rainbow Six Siege",
    keyword:[
      'rainbox six siege','rainbow','six','siege','ra',
    ],
    genre:[
      'action','fighting'
    ]
  },
  {
    // 52-L4D2 Teaser
    video: 'https://www.youtube.com/embed/WOPLHOoZ0Dc',
    title: 'Left 4 Dead 2 Teaser',
    keyword:[
      'l4d2','left 4 dead 2','left 4 dead','dead','left',
    ],
    genre:[
      'action','adventure','fighting'
    ]
  },
  {
    // 53-League of Legends_ Wild Rift _ Announce Trailer
    video: 'https://www.youtube.com/embed/e2TZAAQmGho',
    title: 'League of Legends : Wild Rift Announce Trailer',
    keyword:[
      'league of legends wild rift','lol wild rift','lol wr','wr','lol mobile'
    ],
    genre:[
      'mmorpg','strategy'
    ]
  },
  {
    // 54-Lies of P - Official Launch Trailer
    video: 'https://www.youtube.com/embed/kXZoKdr-xeo',
    title: 'Lies of P - Official Launch Trailer',
    keyword:[
      'lies of p','p','lies','lies of','of p'
    ],
    genre:[
      'rpg','adventure','fighting'
    ]
  },
  {
    // 55-LifeAfter - Official Trailer
    video: 'https://www.youtube.com/embed/5d1B9PYdv34',
    title: 'LifeAfter - Official Trailer',
    keyword:[
      'lifeafter','life after','life','after'
    ],
    genre:[
      'adventure','action','simulation','rpg','mmorpg'
    ]
  },
  {
    // 56-Little Kitty, Big City - Announcement Trailer - Nintendo Switch
    video: 'https://www.youtube.com/embed/-39kuBXyKWo',
    title: 'Little Kitty, Big City - Announcement Trailer - Nintendo Switch',
    keyword:[
      'little kitty','little','kitty','big city','big','city'
    ],
    genre:[
      'adventure','simulation'
    ]
  },
  {
    // 57-Little Nightmares - Launch Trailer
    video: 'https://www.youtube.com/embed/aOadxZBsPiA',
    title: 'Little Nightmares - Launch Trailer',
    keyword:[
      'little nightmares','little','nightmares','nightmare','little nightmare'
    ],
    genre:[
      'adventure'
    ]
  },
  {
    // 58-lotr
    video: 'https://www.youtube.com/embed/L5hIxc58YhQ',
    title: 'The Lord of the Rings: Return to Moria - Official Launch Trailer',
    keyword:[
      'lord of the rings return to moira','lordofherings','return to moira','lord of the rings','rings','moira'
    ],
    genre:[
      'rpg','fighting'
    ]
  },
  {
    // 59-Marvel's Spider-Man 2 - Launch Trailer I PS5 Games
    video: "https://www.youtube.com/embed/9fVYKsEmuRo",
    title: "Marvel's Spider-Man 2 - Launch Trailer I PS5 Games",
    keyword:[
      'spiderman 2','spider man 2','spiderman2','spider','man'
    ],
    genre:[
      'action','adventure','fighting'
    ]
  },
  {
    // 60-Marvel’s Spider-Man Remastered _ PC Launch Trailer
    video: 'https://www.youtube.com/embed/mrT5q5xXb7Y',
    title: 'Marvel’s Spider-Man Remastered PC Launch Trailer',
    keyword:[
      'marvels spider man','marvels spiderman','spiderman','spider','spider man','marvels','man'
    ],
    genre:[
      'action','adventure','fighting'
    ]
  },
  {
    // 61-Marvel’s Spider-Man_ Miles Morales Launch Trailer I PS5, PS4
    video: 'https://www.youtube.com/embed/NTunTURbyUU',
    title: 'Marvel’s Spider-Man : Miles Morales Launch Trailer I PS5, PS4',
    keyword:[
      'marvels spider man miles morales','spiderman','spider man','marvels','marvel spiderman','marvels spiderman','miles','morales'
    ],
    genre:[
      'action','adventure','fighting'
    ]
  },
  {
    // 62-Microsoft Flight Simulator 2024 - Announce Trailer - 4K
    video: 'https://www.youtube.com/embed/p3xp-SnZDoY',
    title: 'Microsoft Flight Simulator 2024 - Announce Trailer - 4K',
    keyword:[
      'microsoft flight simulator','simulator','flight','microsoft'
    ],
    genre:[
      'simulation','sports'
    ]
  },
  {
    // 63-MIR4 - The Legend Rising official game trailer
    video: 'https://www.youtube.com/embed/vvKcbXTudPM',
    title: 'MIR4 - The Legend Rising official game trailer',
    keyword:[
      'mir4','mir 4','mir',
    ],
    genre:[
      'adventure','fighting','mmorpg','rpg'
    ]
  },
  {
    // 64-Mobile Legends Bang Bang - New Official Trailer
    video: 'https://www.youtube.com/embed/cftqT7au9gk',
    title: 'Mobile Legends Bang Bang - New Official Trailer',
    keyword:[
      'mobile legends bang bang','mlbb','ml','bang bang','mobile legends'
    ],
    genre:[
      'mmorpg','strategy'
    ]
  },
  {
    // 65-Mortal Kombat 11 - Official Launch Trailer
    video: 'https://www.youtube.com/embed/7zwQPJmg-Kg',
    title: 'Mortal Kombat 11 - Official Launch Trailer',
    keyword:[
      'mortal kombat 11','mortal','kombat','kombat 11',
    ],
    genre:[
      'fighting','adventure'
    ]
  },
  {
    // 66-Naruto
    video: 'https://www.youtube.com/embed/yFTEZqwXJzY',
    title: 'Naruto X Boruto Ultimate Ninja Storm Connections - Sneak Peek: Special Story Mode | PS5 & PS4 Games',
    keyword:[
      'naruto x boruto','naruto','boruto','narutoboruto',
    ],
    genre:[
      'fighting','adventure'
    ]
  },
  {
    // 67-NBA 2K23 - First Look Trailer _ PS5 & PS4 Games
    video: 'https://www.youtube.com/embed/MCU18y25WeQ',
    title: 'NBA 2K23 - First Look Trailer PS5 & PS4 Games',
    keyword:[
      'nba 2k23','nba','2k23'
    ],
    genre:[
      'sports','simulation'
    ]
  },
  {
    // 68-Official Minecraft Trailer
    video: 'https://www.youtube.com/embed/MmB9b5njVbA',
    title: 'Official Minecraft Trailer',
    keyword:[
      'minecraft','mine','craft'
    ],
    genre:[
        'simulation','adventure'
    ]
  },
  {
    // 69-Official Release Trailer - _Interstellar Journey_ _ Honkai_ Star Rail
    video: 'https://www.youtube.com/embed/w8vPZrMFiZ4',
    title: 'Official Release Trailer - Interstellar Journey : Honkai - Star Rail',
    keyword:[
      'honkai starrail','honkai','starrail',
    ],
    genre:[
      'mmorpg','rpg'
    ]
  },
  {
    // 70-Official Trailer _ Call of Duty_ Warzone (1)
    video: 'https://www.youtube.com/embed/0E44DClsX5Q',
    title: 'Official Trailer  Call of Duty : Warzone',
    keyword:[
      'cod warzone','call of duty warzone','warzone','call of duty','codw','call of duty war'
    ],
    genre:[
      'action','fighting'
    ]
  },
  {
    // 71-Official Trailer _ Farlight 84
    video: 'https://www.youtube.com/embed/-qVRvg9DmCY',
    title: 'Official Trailer Farlight 84',
    keyword:[
      'farlight 84','farlight','fl',
    ],
    genre:[
      'action','rpg','strategy'
    ]
  },
  {
    // 72-Overwatch 2 Gameplay Trailer
    video: 'https://www.youtube.com/embed/dZl1yGUetjI',
    title: 'Overwatch 2 Gameplay Trailer',
    keyword:[
      'overwatch 2','overwatch',
    ],
    genre:[
      'action','fighting' 
    ]
  },
  {
    // 73-Party Animals 2023 Official Trailer
    video: 'https://www.youtube.com/embed/Cunvu8b7rj0',
    title: 'Party Animals 2023 Official Trailer',
    keyword:[
      'party animals','party','animals',
    ],
    genre:[
      'fighting','action'
    ]
  },
  {
    // 74-PAYDAY 3_ Gameplay Trailer
    video: 'https://www.youtube.com/embed/dc5gw3ctb0o',
    title: 'PAYDAY 3 Gameplay Trailer',
    keyword:[
      'payday 3','pay','day'
    ],
    genre:[
      'action','adventure','fighting'
    ]
  },
  {
    // 75-Phasmophobia - Announcement Trailer
    video: 'https://www.youtube.com/embed/pQ3SlgA9R7k',
    title: 'Phasmophobia - Announcement Trailer',
    keyword:[
      'phas','phasmophobia'
    ],
    genre:[
      'adventure','action'
    ]
  },
  {
    // 76-poke
    video: 'https://www.youtube.com/embed/wOEHUANP-vo',
    title: 'Pokémon Legends: Arceus Trailer - Pokemon Presents',
    keyword:[
      'pokemon legends arceus','arceus','pokemon','legends'
    ],
    genre:[
      'rpg','action'
    ]
  },
  {
    // 77-Prey – Official Gameplay Trailer
    video: 'https://www.youtube.com/embed/LNHZ9WAertc',
    title: 'Prey – Official Gameplay Trailer',
    keyword:[
      'prey','pr','pre'
    ],
    genre:[
      'adventure'
    ]
  },
  {
    // 78-Project bloodstrike trailer
    video: 'https://www.youtube.com/embed/VwGYKtEGoYc',
    title: 'Project : Bloodstrike Trailer',
    keyword:[
      'project blood strike','blood strike','blood','strike','project'
    ],
    genre:[
      'action','rpg','strategy'
    ]
  },
  {
    // 79-Prototype 2_ Trailer
    video: 'https://www.youtube.com/embed/-X0DfqkXeU8',
    title: 'Prototype 2 Trailer',
    keyword:[
      'prototype','prototype 2',
    ],
    genre:[
      'action','fighting','adventure'
    ]
  },
  {
    // 80-PUBG MOBILE Global Launch Trailer
    video: 'https://www.youtube.com/embed/uCd6tbUAy6o',
    title: 'PUBG MOBILE Global Launch Trailer',
    keyword:[
      'pubgm','pubg mobile','players unknown battlegrounds','pubg',
    ],
    genre:[
      'action','rpg','strategy'
    ]
  },
  {
    // 81-PUBG_ BATTLEGROUNDS Cinematic trailer _ PUBG
    video: 'https://www.youtube.com/embed/u1oqfdh4xBY',
    title: 'PUBG : BATTLEGROUNDS Cinematic Trailer - PUBG',
    keyword:[
      'pubg battlegrounds','pubg','battlegrounds','player unknown battlegrounds','pubgbg'
    ],
    genre:[
      'mmorpg','action','adventure'
    ]
  },
  {
    // 82-re
    video: 'https://www.youtube.com/embed/j5Ic2z3_xp0',
    title: 'Resident Evil 4 Remake - Reveal Trailer | PlayStation State of Play 2022',
    keyword:[
      'resident evil 4','resident','evil','4','review','re4','re'
    ],
    genre:[
      'action','adventure'
    ]
  },
  {
    // 83-Red Dead Redemption 2 Trailer
    video: 'https://www.youtube.com/embed/gmA6MrX81z4',
    title: 'Red Dead Redemption 2 Trailer',
    keyword:[
      'red dead redemption 2','rdd2','red dead','dead','redemption 2','redemption'
    ],
    genre:[
      'action','adventure'
    ]
  },
  {
    // 84-Resident Evil 2 _ Launch Trailer _ PS4
    video: 'https://www.youtube.com/embed/u3wS-Q2KBpk',
    title: 'Resident Evil 2 Launch Trailer PS4',
    keyword:[
      'resident evil 2','re2','re 2','resident','evil 2',
    ],
    genre:[
      'action','fighting','adventure'
    ]
  },
  {
    // 85-Resident Evil 4 Remake - Reveal Trailer _ PlayStation State of Play 2022
    video: 'https://www.youtube.com/embed/j5Ic2z3_xp0',
    title: 'Resident Evil 4 Remake - Reveal Trailer PlayStation State of Play 2022',
    keyword:[
      'resident evil 4','resident','evil','4','review','re4','re'
    ],
    genre:[
      'action','adventure'
    ]
  },
  {
    // 86-Rise of the Ronin - State of Play Sep 2022 Reveal Trailer _ PS5 Games
    video: 'https://www.youtube.com/embed/0gwsQvDGh4o',
    title: 'Rise of the Ronin - State of Play Sep 2022 Reveal Trailer _ PS5 Games',
    keyword:[
      'rise of the ronin','rise','of the ronin','ronin'
    ],
    genre:[
      'action','rpg','fighting'
    ]
  },
  {
    // 87-Roblox _ Official Trailer (2020)
    video: 'https://www.youtube.com/embed/eAvXhNlO-rA',
    title: 'Roblox Official Trailer (2020)',
    keyword:[
      'roblox','rob','lox'
    ],
    genre:[
      'simulation','adventure','action'
    ]
  },
  {
    // 88-Rocket League - Official 4K Cinematic Free To Play Trailer
    video: 'https://www.youtube.com/embed/SgSX3gOrj60',
    title: 'Rocket League - Official 4K Cinematic Free To Play Trailer',
    keyword:[
      'rocket league','league','rocket'
    ],
    genre:[
      'simulation'
    ]
  },
  {
    // 89-S.T.A.L.K.E.R  2 Heart of Chornobyl — Official Gameplay Trailer _ Gamescom 2023
    video: 'https://www.youtube.com/embed/cR9B1naRMwY',
    title: 'S.T.A.L.K.E.R  2 Heart of Chornobyl — Official Gameplay Trailer Gamescom 2023',
    keyword:[
      'stalker','stalker2','stalker 2'
    ],
    genre:[
      'action','adventure'
    ]
  },
  {
    // 90-Season 2024 Gameplay Teaser _ League of Legends
    video: 'https://www.youtube.com/embed/oBpZb7Y496o',
    title: 'Season 2024 Gameplay Teaser - League of Legends',
    keyword:[
      'league','lol','league of legends','legends'
    ],
    genre:[
      'strategy','mmorpg'
    ]
  },
  {
    // 91-Sekiro_ Shadows Die Twice - Official Launch Trailer _ PS4
    video: 'https://www.youtube.com/embed/rXMX4YJ7Lks',
    title: 'Sekiro : Shadows Die Twice - Official Launch Trailer PS4',
    keyword:[
      'sekiro shadows die twice','sekiro','shadow','sekiro shadow','die twice','die','twice'
    ],
    genre:[
      'action','rpg','adventure'
    ]
  },
  {
    // 92-Senua's Saga_ Hellblade II - The Senua Trailer
    video: "https://www.youtube.com/embed/nRqLDCBxW04",
    title: "Senua's Saga_ Hellblade II - The Senua Trailer",
    keyword:[
      'senuas saga hellblade 2','senuas saga hellblade ii','senuas saga','senuas','hellblade','hellblade 2','saga'
    ],
    genre:[
      'adventure','fighting'
    ]
  },
  {
    // 93-Star Wars Jedi_ Survivor - Official Reveal Trailer
    video: 'https://www.youtube.com/embed/VRaobDJjiec',
    title: 'Star Wars Jedi Survivor - Official Reveal Trailer',
    keyword:[
      'star wars Jedi Survivor','star','starwars','star war','star wars','jedi','jedi survivor'
    ],
    genre:[
      'action','adventure','rpg','fighting'
    ]
  },
  {
    // 94-Star Wars Outlaws_ World Premiere Trailer
    video: 'https://www.youtube.com/embed/XF0kMT39GNY',
    title: 'Star Wars Outlaws_ World Premiere Trailer',
    keyword:[
      'star wars outlaws','star','wars','outlaw','outlaws'
    ],
    genre:[
      'action','adventure'
    ]
  },
  {
    // 95-Starfield Official Gameplay Trailer
    video: 'https://www.youtube.com/embed/kfYEiTdsyas',
    title: 'Starfield Official Gameplay Trailer',
    keyword:[
      'starfield','star','field'
    ],
    genre:[
      'action','adventure','rpg',''
    ]
  },
  {
    // 96-Street Fighter 6 - Launch Trailer
    video: 'https://www.youtube.com/embed/4EnsDg6DCTE',
    title: 'Street Fighter 6 - Launch Trailer',
    keyword:[
      'street fighter 6','street','fighter'
    ],
    genre:[
      'action','fighting'
    ]
  },
  {
    // 97-SuperMario
    video: 'https://www.youtube.com/embed/uhkhTpREfxU',
    title: 'SuperMario Trailer',
    keyword:[
      'super mario','super','mario'
    ],
    genre:[
      'adventure'
    ]
  },
  {
    // 98-Tekken 8 - State of Play Sep 2022 Announcement Trailer _ PS5 Games
    video: 'https://www.youtube.com/embed/2hPuRQz6IlM',
    title: 'Tekken 8 - State of Play Sep 2022 Announcement Trailer PS5 Games',
    keyword:[
      'tekken 8','tekken','8',
    ],
    genre:[
      'action','fighting'
    ]
  },
  {
    // 99-The Callisto Protocol - Official Launch Trailer _ PS5 & PS4 Games
    video: 'https://www.youtube.com/embed/IT7swHyN8FQ',
    title: 'The Callisto Protocol - Official Launch Trailer PS5 & PS4 Games',
    keyword:[
      'callisto protocol', 'the', 'callisto', 'protocol'
    ],
    genre:[
      'adventure','fighting'
    ]
  },
  {
    // 100-The Invincible - Official Launch Trailer
    video: 'https://www.youtube.com/embed/iY1avQjPT6Q',
    title: 'The Invincible - Official Launch Trailer',
    keyword:[
      'invincible','the','adventure','the invinsible',
    ],
    genre:[
      'action' , 'adventure'
    ]
  },{
    //101-The Last of Us Part I - Announce Trailer _ PS5 Games
    video:'https://www.youtube.com/embed/WxjeV10H1F0',
    title:'The Last of Us Part I - Announce Trailer _ PS5 Games',
    keyword:[
      'the last of us','the','last','tlou','part 1'
    ],
    genre:[
      'action','adventure'
    ]
  },{
    //102-The Plucky Squire - Gameplay Trailer _ PS5 Games
    video:'https://www.youtube.com/embed/Sxv072ksoMU',
    title:'The Plucky Squire - Gameplay Trailer PS5 Games',
    keyword:[
      'the plucky squire','plucky','squire','the plucky','plucky squire'
    ],
    genre:[
      'adventure','action'
    ]
  },{
    //103-The Sims 4 Free Base Game Launch Trailer
    video:'https://www.youtube.com/embed/WCVS01ZXBrk',
    title:'The Sims 4 Free Base Game Launch Trailer',
    keyword:[
      'the sims 4','the sims','sims 4'
    ],
    genre:[
      'simulation','adventure'
    ]
  },{
    //104-The Wolf Among Us - Trailer
    video:'https://www.youtube.com/embed/7a_St9DTuO0',
    title:'The Wolf Among Us - Trailer',
    keyword:[
      'the wolf among us','the','wolf','among us','among','us'
    ],
    genre:[
      'action','adventure'
    ]
  },{
    //105-Undawn _  Official Launch Trailer
    video:'https://www.youtube.com/embed/DBSTcMwGW0o',
    title:'Undawn Official Launch Trailer',
    keyword:[
      'undawn','un','dawn'
    ],
    genre:[
      'adventure','action','simulation','rpg','mmorpg'
    ]
  },{
    //106-Wo Long_ Fallen Dynasty - Official Launch Trailer
    video:'https://www.youtube.com/embed/SWRcZN4jMW8',
    title:'Wo Long : Fallen Dynasty - Official Launch Trailer',
    keyword:[
      'wolong','wolong fallen dynasty','fallen dynasty','dynasty','fallen','wolong dynasty','wolong fallen'
    ],
    genre:[
      'action','rpg','adventure','fighting'
    ]
  },{
    //107-World of Warships - Launch Trailer
    video:'https://www.youtube.com/embed/RQK6hH5-nwU',
    title:'World of Warships - Launch Trailer',
    keyword:[
      'world of warships','world','of','warships',
    ],
    genre:[
      'simulation','action'
    ]
  },{
    //108-Zombie Catchers_ Gameplay Trailer
    video:'https://www.youtube.com/embed/63wKeHfZ3sA',
    title:'Zombie Catchers Gameplay Trailer',
    keyword:[
      'zombie catchers','catchers','zombie','catcher','zom','bie'
    ],
    genre:[
      'adventure'
    ]
  }
];

// pagination
const videosPerPage = 16;
let currentPage = 1;

//generate the html 
function generateTrailers()
{
  const startIdx = (currentPage - 1) * videosPerPage;
  const endIdx = startIdx + videosPerPage;
  //get the element
  const container = document.getElementById('js-vid-container');
  container.innerHTML = '';

  //for loop to iterate every objects in array
  for (let i = startIdx; i < endIdx && i < trailers.length; i++)
  {
    const vids = trailers[i];
    //generate html and concatenate with the element container 
    let trailersHTML = `
      <div class="video-content-container">
        <div class="video-container">
          <iframe class="video" id="trailer-videos" src="${vids.video}?autoplay=0&mute=1&controls=1" allowfullscreen >
          </iframe>
        </div>
        <div class="video-title">
          ${vids.title}
        </div>
      </div>
    `;
    container.innerHTML += trailersHTML;
  }
}
// handle search
function handleSearch() 
{
  //get the value of the input element
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  //get the container 
  const mainContentContainer = document.getElementById('js-vid-container');
  mainContentContainer.innerHTML = '';

  //if search input is empty, the page will restore to the original state
  if (!searchInput) 
  {
    generateTrailers();
  } 
  else 
  {
    // Check each trailers for matching keywords
    const matchingVidKeyword = trailers.filter(trailers =>
      trailers.keyword.some(keyword => keyword.toLowerCase().includes(searchInput))
    );
    //inside of else (line 1232)
    if (matchingVidKeyword.length > 0) 
    {
      //if the input matches the keywords
      const resultMessageHTML = `<span class="show-result">Showing Result for : ${searchInput}</span>`;
      mainContentContainer.innerHTML += resultMessageHTML;
      // Display matching reviews
      matchingVidKeyword.forEach(vids => {
        const vidTrailerHTML = `
        <div class="video-content-container">
          <div class="video-container">
            <video class="video" id="trailer-videos" onmouseover="playVideo(this)" onmouseout="pauseVideo(this)" onclick="toggleFullScreen(this)" src="${vids.video}" muted>
            </video>
          </div>
          <div class="video-title">
            ${vids.title}
          </div>
        </div>`;
        //after generating html, it will be added in the html element (container)
        mainContentContainer.innerHTML += vidTrailerHTML;
      });
    }
    //inside of else (line 1232)
    else
    {
      //if the input doesn't match any keywords
      const resultMessageHTML = `<div class="no-result">We couldn't find the videos/trailers you're looking for. It may have been moved or doesn't exist. <br><br> No result for : ${searchInput} 😔</div>`;
      mainContentContainer.innerHTML += resultMessageHTML;
    }
  }
}
// search keydown enter
searchInput.addEventListener('keydown', (event) => 
{
  if (event.key === 'Enter') {
    handleSearch();
  }
});


// function to handle the genre buttons
function handleGenre(genre) 
{ //get the element of html where we concatenate with generated html
  const mainContentContainer = document.getElementById('js-vid-container');
  mainContentContainer.innerHTML = '';

  const startIdx = (currentPage - 1) * videosPerPage;
  const endIdx = startIdx + videosPerPage;

  const matchingTrailersGenre = trailers.filter(trailer =>
    trailer.genre.includes(genre.toLowerCase())
  );
  //if found matches
  if (matchingTrailersGenre.length > 0) 
  {
    const showResultHTML = `<span class="show-result">Displaying : ${genre} Game Trailers</span>`;
    mainContentContainer.innerHTML += showResultHTML;

    for (let i = startIdx; i < endIdx && i < Math.min(matchingTrailersGenre.length, startIdx + 20); i++) 
    {
      const trailer = matchingTrailersGenre[i];
      const gamesHTML = `
        <div class="video-content-container">
          <div class="video-container">
            <video class="video" id="trailer-videos" onmouseover="playVideo(this)" onmouseout="pauseVideo(this)" onclick="toggleFullScreen(this)" src="${trailer.video}" muted></video>
          </div>
          <div class="video-title">
            ${trailer.title}
          </div>
        </div>
      `;
      //concatenate the generated html to the html element
      mainContentContainer.innerHTML += gamesHTML;
    }
  }
}

// get the elements of genre buttons
const genreAction = document.getElementById('search-btn-action');
const genreAdv = document.getElementById('search-btn-adv');
const genreRpg = document.getElementById('search-btn-rpg');
const genreSimu = document.getElementById('search-btn-simu');
const genreStrat = document.getElementById('search-btn-strat');
const genreSports = document.getElementById('search-btn-sports');
const genreRacing = document.getElementById('search-btn-racing');
const genreFighting = document.getElementById('search-btn-fighting');
const genreMmorpg = document.getElementById('search-btn-mmorpg');

// add event listener in home button / reset the page 
const homeSearch = document.querySelector('.homeSearch');
homeSearch.addEventListener('click',generateTrailers);

//runs the function when the HTML is fully loaded (to improve performance)
document.addEventListener('DOMContentLoaded', function () 
{
  generateTrailers();
  updatePageNumber();
  genreAction.addEventListener('click', () => handleGenre('Action'));
  genreAdv.addEventListener('click', () => handleGenre('Adventure'));
  genreRpg.addEventListener('click', () => handleGenre('Rpg'));
  genreSimu.addEventListener('click', () => handleGenre('Simulation'));
  genreStrat.addEventListener('click', () => handleGenre('Strategy'));
  genreSports.addEventListener('click', () => handleGenre('Sports'));
  genreRacing.addEventListener('click', () => handleGenre('Racing'));
  genreFighting.addEventListener('click', () => handleGenre('Fighting'));
  genreMmorpg.addEventListener('click', () => handleGenre('MMORPG'));
});

// get buttons pagination element
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const pgNumber = document.querySelector('.pgNumber');

// Add event listeners to pagination buttons
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    generateTrailers();
    updatePageNumber();
  }
});
nextBtn.addEventListener('click', () => {
  const totalPages = Math.ceil(trailers.length / videosPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    generateTrailers();
    updatePageNumber();
  }
});
// Function to update page number
function updatePageNumber() {
  const totalPages = Math.ceil(trailers.length / videosPerPage);
  pgNumber.textContent = `${currentPage}/${totalPages}`;
}


//function to play video
function playVideo(videoElement) 
{
  if (videoElement) 
  {
    videoElement.currentTime = 6;
    videoElement.play();
  }
}
//function to pause video
function pauseVideo(videoElement) 
{
  if (videoElement) 
  {
    videoElement.pause();
  }
}
//function to toggle full screen when user click on the video 
function toggleFullScreen(videoElement) 
{
  if (videoElement) 
  {
    if (!document.fullscreenElement) 
    {
      videoElement.requestFullscreen();
      videoElement.muted = false;
    } else 
    {
      if (document.exitFullscreen) 
      {
        document.exitFullscreen();
      }
    }
  }
}





