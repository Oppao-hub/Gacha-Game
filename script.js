// 1. DEFINE ITEMS WITH REAL IMAGES
const items = [
  {
    name: "White Rabbit",
    rarity: "common",
    value: 0.5,
    image: "",
  },
  {
    name: "Maxx Candy",
    rarity: "common",
    value: 0.5,
    image: "",
  },
  {
    name: "Kiss ni Driel",
    rarity: "common",
    value: 0.7,
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/14188042364386336436_0",
  },
  {
    name: "Date Night With Ms. L",
    rarity: "uncommon",
    value: 1.5,
    image: "images/Gemini_Generated_Image_uif60vuif60vuif6.png",
  },
  {
    name: "30 seconds Cuddle",
    rarity: "uncommon",
    value: 1.8,
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/18110797067325667892_0",
  },
  {
    name: "Ballpen",
    rarity: "uncommon",
    value: 1.8,
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/4059145212066280782_0",
  },
  {
    name: "Choose 1 Member to Date for 1 Hour",
    rarity: "rare",
    value: 5,
    image: "images/Gemini_Generated_Image_xaa073xaa073xaa0.png",
  },
  {
    name: "Free Sticker of Choice",
    rarity: "rare",
    value: 8,
    image: "images/Gemini_Generated_Image_u9kjb1u9kjb1u9kj.png",
  },
  {
    name: "Spin Again",
    rarity: "mythical",
    value: 15,
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/14517973594713390846_0",
  },
  {
    name: "Green Penguin",
    rarity: "mythical",
    value: 30,
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/4539044425153451119_0",
  },
  {
    name: "Siomai Rice",
    rarity: "legendary",
    value: 100,
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/9162815950658782631_0",
  },
  {
    name: "5 Pesos",
    rarity: "legendary",
    value: 50,
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/12909619649702799181_0",
  },
  {
    name: "Bouquet of Rose",
    rarity: "ancient",
    value: 2000,
    image: "images/Gemini_Generated_Image_bp8clkbp8clkbp8c.png",
  },
  {
    name: "Bouquet of Roses",
    rarity: "ancient",
    value: 2000,
    image: "images/Gemini_Generated_Image_2tnxe72tnxe72tnx.png",
  },
  {
    name: "Blue Penguin",
    rarity: "exceedingly-rare",
    value: 3000, // FIXED: Using a relative path
    image: "images/Gemini_Generated_Image_7s0kfv7s0kfv7s0k.png",
  },
  {
    name: "Sky Blue Penguin",
    rarity: "exceedingly-rare",
    value: 3000, // FIXED: Using a relative path
    image: "images/Gemini_Generated_Image_wszjuswszjuswszj.png",
  },
  {
    name: "Green Penguin",
    rarity: "exceedingly-rare",
    value: 3000, // FIXED: Using a relative path
    image: "images/Gemini_Generated_Image_kx6dv3kx6dv3kx6d.png",
  },
  {
    name: "Red Penguin",
    rarity: "exceedingly-rare",
    value: 3000, // FIXED: Using a relative path
    image: "images/Gemini_Generated_Image_g0v69ug0v69ug0v6.png",
  },
  {
    name: "Black Penguin",
    rarity: "exceedingly-rare",
    value: 3000,
    image: "images/Gemini_Generated_Image_jywi1wjywi1wjywi.png",
  },
  {
    name: "Beige Penguin",
    rarity: "exceedingly-rare",
    value: 3000,
    image: "images/Gemini_Generated_Image_ofr4foofr4foofr4.png",
  },
  {
    name: "Pink Penguin",
    rarity: "exceedingly-rare",
    value: 3000, // FIXED: Using a relative path
    image: "images/Gemini_Generated_Image_8i7ya48i7ya48i7y.png",
  },
  {
    name: "Peach Penguin",
    rarity: "exceedingly-rare",
    value: 3000, // FIXED: Using a relative path
    image: "images/Gemini_Generated_Image_2bvk6l2bvk6l2bvk.png",
  },
  {
    name: "Purple Penguin",
    rarity: "exceedingly-rare",
    value: 3000, // FIXED: Using a relative path
    image: "images/Gemini_Generated_Image_pwxuqnpwxuqnpwxu.png",
  },
  {
    name: "100 Pesos Cash",
    rarity: "infinity",
    value: 10000,
    image: "images/100 Pesos.png",
  },
];

// 2. DEFINE RARITY WEIGHTS
const rarityWeights = {
  common: 6000,
  uncommon: 2000,
  rare: 800,
  mythical: 250,
  legendary: 50,
  ancient: 10,
  "exceedingly-rare": 3,
  infinity: 1,
};

// 3. DEFINE CASES
const neutralCaseItems = items.filter((item) =>
  [
    "common",
    "uncommon",
    "rare",
    "mythical",
    "legendary",
    "ancient",
    "exceedingly-rare",
    "infinity",
  ].includes(item.rarity)
);

// 4. SETUP VARIABLES
const reel = document.getElementById("reel");
const openNormalCaseBtn = document.getElementById("open-normal-case-btn");
const openRareCaseBtn = document.getElementById("open-rare-case-btn");
const openInfinityCaseBtn = document.getElementById("open-infinity-case-btn");
const liveFeed = [];

// 5. HELPER FUNCTION: WEIGHTED RANDOM PICKER
function getWeightedItem(availableItems) {
  let totalWeight = 0;

  availableItems.forEach((item) => {
    totalWeight += rarityWeights[item.rarity] || 0;
  });

  let randomNum = Math.random() * totalWeight;

  for (let i = 0; i < availableItems.length; i++) {
    const itemWeight = rarityWeights[availableItems[i].rarity] || 0;
    if (randomNum < itemWeight) {
      return availableItems[i];
    }
    randomNum -= itemWeight;
  }
  return availableItems[0];
}

// 6. EVENT LISTENERS
openNormalCaseBtn.addEventListener("click", () => openCase(neutralCaseItems));
openRareCaseBtn.addEventListener("click", () => openCase(neutralCaseItems));
openInfinityCaseBtn.addEventListener("click", () => openCase(neutralCaseItems));

// 7. MAIN OPEN CASE LOGIC
function openCase(caseItems) {
  // Disable buttons during spin
  openNormalCaseBtn.disabled = true;
  openRareCaseBtn.disabled = true;
  openInfinityCaseBtn.disabled = true;

  const reelItems = []; // --- NEW LOGIC: GUARANTEE ALL ITEMS ARE SHOWN --- // 1. Add all unique items once to the start of the reel for guaranteed visual presence

  const shuffledUniqueItems = [...caseItems].sort(() => Math.random() - 0.5);
  reelItems.push(...shuffledUniqueItems); // 2. Add random weighted items to complete the reel length (100 total slots)

  const startingIndex = shuffledUniqueItems.length;

  for (let i = startingIndex; i < 100; i++) {
    let item = getWeightedItem(caseItems);

    if (Math.random() < 0.1) {
      item = { ...item, name: `StatTrak™ ${item.name}` };
    }
    reelItems.push(item);
  } // DECIDE THE WINNER (The winning item logic remains weighted and unchanged)

  let winningItem = {
    ...getWeightedItem(caseItems),
  };

  if (Math.random() < 0.1) {
    winningItem.name = `StatTrak™ ${winningItem.name}`;
    winningItem.value *= 5;
    winningItem.isStatTrak = true;
  } // Place winning item near the end

  reelItems[95] = winningItem; // RENDER THE REEL

  reel.innerHTML = "";
  reelItems.forEach((item) => {
    const itemElement = document.createElement("div");
    const rarityClass = item.rarity.toLowerCase().replace(" ", "-");
    itemElement.classList.add("item", rarityClass);

    let nameSpan = `<span>${item.name}</span>`;
    if (item.name.includes("StatTrak™")) {
      nameSpan = `<span class="stattrack">${item.name}</span>`;
    }

    itemElement.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    ${nameSpan}
   `;
    reel.appendChild(itemElement);
  }); // ANIMATION

  reel.style.transition = "none";
  reel.style.transform = "translateX(0)";

  setTimeout(() => {
    reel.style.transition = "transform 7s cubic-bezier(0.15, 0.5, 0.3, 1)";
    const winningItemIndex = 95;
    const itemWidth = 150;
    const containerWidth = reel.parentElement.offsetWidth;
    const offset = containerWidth / 2 - itemWidth / 2;
    const winningPosition = winningItemIndex * itemWidth - offset;

    reel.style.transform = `translateX(-${winningPosition}px)`;
  }, 100);

  const transitionEndHandler = () => {
    // Remove the event listener immediately after it fires
    reel.removeEventListener("transitionend", transitionEndHandler);

    // --- SPIN AGAIN LOGIC CHECK ---
    const isSpinAgain =
      winningItem.name === "Spin Again" ||
      winningItem.name === "StatTrak™ Spin Again";

    if (isSpinAgain) {
      console.log("Won 'Spin Again'! Re-rolling automatically...");

      // Re-enable buttons briefly before starting the next spin
      openNormalCaseBtn.disabled = false;
      openRareCaseBtn.disabled = false;
      openInfinityCaseBtn.disabled = false;

      // Rerun the openCase function immediately with the same case items
      setTimeout(() => {
        openCase(caseItems); // Recursive call to spin again
      }, 500); // Small delay for visual effect

      return; // Exit the handler to prevent the modal from opening
    } // Normal Win Logic (if it's not Spin Again) // Re-enable buttons
    // --- END SPIN AGAIN LOGIC ---

    openNormalCaseBtn.disabled = false;
    openRareCaseBtn.disabled = false;
    openInfinityCaseBtn.disabled = false; // Update Live Feed

    liveFeed.unshift(winningItem);
    if (liveFeed.length > 5) {
      liveFeed.pop();
    }
    updateLiveFeedDisplay();

    const wonItemContainer = document.getElementById("won-item-container");
    const rarityClass = winningItem.rarity.toLowerCase().replace(" ", "-");
    let nameSpan = `<span>${winningItem.name}</span>`;
    if (winningItem.isStatTrak) {
      nameSpan = `<span class="stattrack">${winningItem.name}</span>`;
    }

    wonItemContainer.innerHTML = `
    <h2>You Won:</h2>
    <div class="item ${rarityClass}">
     <img src="${winningItem.image}" alt="${winningItem.name}">
     ${nameSpan}
    </div>
    <button id="close-modal-btn">Spin Again</button>
   `;
    wonItemContainer.style.display = "block"; // Add listener to the 'Spin Again' button to close the modal

    document.getElementById("close-modal-btn").addEventListener(
      "click",
      () => {
        dismissWonItemModal({ target: wonItemContainer });
      },
      { once: true }
    ); // Dismiss modal when clicking outside

    setTimeout(() => {
      document.addEventListener("click", dismissWonItemModal, true);
    }, 50);
  };

  reel.addEventListener("transitionend", transitionEndHandler);
}

// --- Dismissal Logic ---
function dismissWonItemModal(event) {
  const wonItemContainer = document.getElementById("won-item-container"); // Check if the click occurred on the container itself or inside it

  if (
    wonItemContainer.contains(event.target) &&
    event.target.id !== "close-modal-btn"
  ) {
    return;
  } // Hide the modal

  wonItemContainer.style.display = "none"; // Remove the document listener

  document.removeEventListener("click", dismissWonItemModal, true);
}

// 8. UI UPDATERS
function updateLiveFeedDisplay() {
  const liveFeedList = document.getElementById("live-feed-list");
  if (!liveFeedList) return;
  liveFeedList.innerHTML = "";
  liveFeed.forEach((item) => {
    const li = document.createElement("li");
    const rarityClass = item.rarity.toLowerCase().replace(" ", "-");
    let nameSpan = `<span class="${rarityClass}">${item.name}</span>`;
    if (item.isStatTrak) {
      nameSpan = `<span class="stattrack">${item.name}</span>`;
    }
    li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="40" style="vertical-align: middle; margin-right: 10px;">
        ${nameSpan}
      `;
    liveFeedList.appendChild(li);
  });
}

function calculateAndDisplayChances() {
  const chanceList = document.getElementById("chance-list");
  if (!chanceList) return;

  // 1. Calculate the total weight of all available items
  let totalWeight = 0;
  neutralCaseItems.forEach((item) => {
    totalWeight += rarityWeights[item.rarity] || 0;
  });

  chanceList.innerHTML = "";

  // Sort items by rarity (descending weight/ascending chance) for better presentation
  const sortedItems = [...neutralCaseItems].sort((a, b) => {
    return (rarityWeights[b.rarity] || 0) - (rarityWeights[a.rarity] || 0);
  });

  // 2. Build the list items as "cards"
  sortedItems.forEach((item) => {
    const itemWeight = rarityWeights[item.rarity] || 0;

    // Probability = (Item Weight / Total Weight) * 100
    const probability = (itemWeight / totalWeight) * 100;

    const li = document.createElement("li");

    // Use the 'item' class for styling consistency with the reel/modal
    const rarityClass = item.rarity.toLowerCase().replace(" ", "-");
    li.classList.add("prize-card", rarityClass);

    // Format for display
    const chancePercent = probability.toFixed(4); // Show 4 decimal places for precision

    // Handle images/placeholders
    const itemImage = item.image
      ? `<img src="${item.image}" alt="${item.name}" class="prize-card-img">`
      : `<span class="prize-card-img-placeholder">🚫</span>`;

    li.innerHTML = `
            ${itemImage}
            <div class="card-details">
                <span class="item-name">${item.name}</span>
                <span class="item-rarity">Rarity: ${item.rarity}</span>
                <span class="item-chance">${chancePercent}% Drop Chance</span>
            </div>
        `;
    chanceList.appendChild(li);
  });
}

// --- INITIALIZATION ---
calculateAndDisplayChances();
