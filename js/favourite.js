function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
    document.querySelector(".auth-links-containar").classList.toggle("active");
}

// Only add defaults if storage is empty
function addDefaultTreks() {

    let current = JSON.parse(localStorage.getItem("favorites")) || [];

    if (current.length === 0) {

        let defaultTreks = [
            { name: "Rajmachi Fort", difficulty: "Easy", image: "./../images/Anjaneri.jpeg" },
            { name: "Harishchandragad", difficulty: "Medium", image: "./../images/Harishchandragad.jpeg" },
            { name: "Kalsubai Peak", difficulty: "Hard", image: "./../images/kalsubai peak.png" },
            { name: "Lohagad Fort", difficulty: "Easy", image: "./../images/lohagad-fort.png" },
            { name: "Sinhagad Fort", difficulty: "Easy", image: "./../images/sinhagad-fort.png" },
            { name: "Torna Fort", difficulty: "Medium", image: "./../images/torna-fort.png" }
        ];

        localStorage.setItem("favorites", JSON.stringify(defaultTreks));
    }
}

// ADD TO FAVORITES
function addToFavorites(name, difficulty, image) {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let exists = favorites.some(trek => trek.name === name);

    if (!exists) {

        favorites.push({
            name: name,
            difficulty: difficulty,
            image: image
        });

        localStorage.setItem("favorites", JSON.stringify(favorites));

        alert("Trek Added to Favorites ");
    }
    else {
        alert("Already in Favorites ");
    }
}


// LOAD FAVORITES
function loadFavorites() {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let container = document.querySelector(".favorites-container");
    let emptyMsg = document.querySelector(".empty-msg");

    if (!container) return;

    container.innerHTML = "";

    if (favorites.length === 0) {

        emptyMsg.style.display = "block";
        updateStats([]);
        return;
    }

    emptyMsg.style.display = "none";

    favorites.forEach((trek, index) => {
        renderCard(trek, index, container);
    });

    updateStats(favorites);
}


// CARD RENDER FUNCTION
function renderCard(trek, index, container) {

    let card = document.createElement("div");

    card.className = "trek-card";

    card.innerHTML = `
        <img src="${trek.image}" class="trek-img">
        <h3>${trek.name}</h3>
        <p>Difficulty: ${trek.difficulty}</p>
        <button onclick="removeFavorite(${index})">Remove</button>
    `;

    container.appendChild(card);
}


// REMOVE SINGLE FAVORITE
function removeFavorite(index) {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.splice(index, 1);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    loadFavorites();
}


// CLEAR ALL FAVORITES
function clearAllFavorites() {

    if (confirm("Clear all favorites?")) {

        localStorage.setItem("favorites", JSON.stringify([]));

        loadFavorites();
    }
}


// UPDATE STATS
function updateStats(favorites) {

    document.getElementById("totalCount").innerText = favorites.length;

    document.getElementById("easyCount").innerText =
        favorites.filter(f => f.difficulty === "Easy").length;

    document.getElementById("mediumCount").innerText =
        favorites.filter(f => f.difficulty === "Medium").length;

    document.getElementById("hardCount").innerText =
        favorites.filter(f => f.difficulty === "Hard").length;
}


// SEARCH FUNCTION
function searchTreks() {

    let val = document.getElementById("searchInput").value.toLowerCase();

    document.querySelectorAll(".trek-card").forEach(card => {

        let name = card.querySelector("h3").innerText.toLowerCase();

        card.style.display = name.includes(val) ? "block" : "none";
    });
}


// FILTER BY DIFFICULTY
function filterTreks() {

    let filterValue = document.getElementById("filterSelect").value;

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let container = document.querySelector(".favorites-container");

    container.innerHTML = "";

    let filtered =
        (filterValue === "All")
            ? favorites
            : favorites.filter(t => t.difficulty === filterValue);

    document.querySelector(".empty-msg").style.display =
        (filtered.length === 0) ? "block" : "none";

    filtered.forEach((trek) => {

        let originalIdx = favorites.findIndex(f => f.name === trek.name);

        renderCard(trek, originalIdx, container);
    });

    updateStats(filtered);
}


// AUTO LOAD
document.addEventListener("DOMContentLoaded", function () {

    addDefaultTreks();

    loadFavorites();
});