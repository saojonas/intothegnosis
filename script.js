const cards = {
    "cc": [
      "ANUNNAKIS CAN HELP US", "CARELESS SHEEP SHEPHERD", "CRISTOPHANY", "DOUBTS", "ENIGMA", "ENJOY THE SILENCE",
      "EPISTEME", "FACE OF GOD", "FORGING", "GNOSTIC AWAKENING", "GOSPEL OF JUDAS", "GOSPEL OF MARY MAGDALENE",
      "HYPNOTIC ILLUSION", "INTO THE VOID", "INTUITION", "LIGHT SPIRITS", "LOSS OF FAITH", "LOVE WITHOUT MEASURE",
      "MAGICK", "MEDITATE ON THE CROSS", "MESOPOTAMIA", "OPHANIM EYES", "PAGAN FOOD", "PILGRIMAGE BAREFOOT",
      "PRAY", "SEEKING THE TRUTH", "SELF AWARENESS", "SELF DESTRUCTION", "SIN OF THE FLESH", "SLEEP OF THE INNOCENT",
      "SPECULA PRINCIPUM", "SPIRITUAL BALANCE", "STRIKE THE LIGHTNING", "TEMPTATION WHISPERS", "THE FALSE MESSIAH",
      "THE MOB", "THEOSOPHY", "THOUGHT", "THROUGH THE VEIL", "TRIP TO INDIA"
    ],
    "cp": [
      "BLACK KABBALAH", "DONT USE THE FORGE", "EXTERNAL INFLUENCE", "LABOR PAINS", "LIBRARY OF THE NAG HAMMADI",
      "LIFE AFTER DEATH", "LIONS", "MASTER OF REALITY", "MERCYFUL", "MERCILESS", "OUR LADY OF SORROWS",
      "PACT WITH THE DEVIL", "PAGAN HERMETICISM", "PARABLES", "REST IN GRACE", "SACRED MATRIMONY", "THE COSMIC FALL",
      "THE DEAD SEA SCROLLS", "WITCH OF ENDOR", "YALDABAOTH WRATH"
    ],
    "cdc": [
      "ABSORBING THE EVIL", "AGE OF DARKNESS", "APOCRYPHAL SCRIPTURES", "APOSTLE FOUND DEAD",
      "BONDAGE TO THE MATERIAL REALM", "DHU SHARA", "GNOSIS BY THE GREEKS", "JONAS IN NINIVE", "LAZARUS", "LUCIFER",
      "NOAHS ARK", "PANTEISM", "SOLOMONS DEMONS", "THE ARRIVAL OF THE NEW AEON",
      "THE CHURCH AT THE END OF THE WORLD", "THE COPYIST", "THE DEMIURGE", "THE FORCES OF NATURE",
      "THE GREAT APOSTASY", "THE MESSIAH", "THE MIRACLE", "THE PRIEST", "THE REVELATION", "THE SERPENT",
      "THE SHEEP SHEPHERD", "THE SOPHIA", "THE VIRGIN", "THE WARRIOR", "THE WIZARD", "TOWER OF BABEL"
    ]
  };

  function createCard(name, category) {
    const path = `assets/${category}/${name.replace(/ /g, "_")}.webp`;

    

    const cardInfo = cardData[name];

  // Verifica se os dados da carta existem
  const effect = cardInfo ? cardInfo.effect : "Efeito não disponível";
  const comment = cardInfo ? cardInfo.comment : "Comentário não disponível";
    
    return `
      <div class="card" data-name="${name.toLowerCase()}" data-category="${category}">
        <img src="${path}" alt="${name}">
        <h3>${name}</h3>
        <p><em>${effect}</em></p>
        <p><small>${comment}</small></p>
      </div>
    `;
  }

  function displayCards() {
    const container = document.getElementById("cardContainer");
    container.innerHTML = "";
    for (const cat of ["cc", "cp", "cdc"]) {
      const title = {
        cc: "Cartas de Caminho",
        cp: "Cartas de Perpetuidade",
        cdc: "Cartas de Decisão Cósmica"
      }[cat];
      container.innerHTML += `<div class="category-title">${title}</div>`;
      container.innerHTML += `<div class="card-grid" id="grid-${cat}"></div>`;
      const grid = document.getElementById(`grid-${cat}`);
      cards[cat].forEach(name => {
        grid.innerHTML += createCard(name, cat);
      });
    }
  }

  function filterCards() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const filter = document.getElementById("categoryFilter").value;

    document.querySelectorAll(".card").forEach(card => {
      const name = card.getAttribute("data-name");
      const category = card.getAttribute("data-category");
      const matchName = name.includes(searchValue);
      const matchCategory = filter === "all" || filter === category;
      card.style.display = (matchName && matchCategory) ? "block" : "none";
    });
  }

  displayCards();
