
function toggleMenu(){

let menu = document.getElementById("navMenu");
let auth = document.querySelector(".auth-links-containar");

menu.classList.toggle("active");
auth.classList.toggle("active");
}
function addDefaultTreks() {

    let defaultTreks = [
        { 
            name: "Rajmachi Fort", 
            difficulty: "Easy",
            image: "./../images/rajmachi fort .png"
        },
        { 
            name: "Harishchandragad", 
            difficulty: "Medium",
            image: "./../images/harishchandragad.png"
        },
        { 
            name: "Kalsubai Peak", 
            difficulty: "Hard",
            image: "./../images/kalsubai peak.png"
        },
        { 
            name: "Lohagad Fort", 
            difficulty: "Easy",
            image: "./../images/lohagad-fort.png"
        },
        { 
            name: "Sinhagad Fort", 
            difficulty: "Easy",
            image: "./../images/sinhagad-fort.png"
        },
        { 
            name: "Torna Fort", 
            difficulty: "Medium",
            image: "./../images/torna-fort.png"
        }
    ];

    localStorage.setItem("favorites", JSON.stringify(defaultTreks));
}
// ADD TO FAVORITES (Call from treks.html)
function addToFavorites(name, difficulty) {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let exists = favorites.some(trek => trek.name === name);

    if (!exists) {
        favorites.push({
            name: name,
            difficulty: difficulty
        });

        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Trek Added to Favorites ");
    } else {
        alert("Already in Favorites ");
    }
}

// LOAD FAVORITES (favorites.html)
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

        let card = document.createElement("div");
        card.className = "trek-card";

       card.innerHTML = `
    <img src="${trek.image}" class="trek-img">
    <h3>${trek.name}</h3>
    <p>Difficulty: ${trek.difficulty}</p>
    <button onclick="removeFavorite(${index})">Remove</button>
`;

        container.appendChild(card);
    });

    updateStats(favorites);
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

    if (confirm("Are you sure you want to clear all favorites?")) {
        localStorage.removeItem("favorites");
        loadFavorites();
    }
}

// UPDATE STATS
function updateStats(favorites) {

    let total = favorites.length;
    let easy = 0, medium = 0, hard = 0;

    favorites.forEach(trek => {
        if (trek.difficulty === "Easy") easy++;
        if (trek.difficulty === "Medium") medium++;
        if (trek.difficulty === "Hard") hard++;
    });

    document.getElementById("totalCount").innerText = total;
    document.getElementById("easyCount").innerText = easy;
    document.getElementById("mediumCount").innerText = medium;
    document.getElementById("hardCount").innerText = hard;
}

//  SEARCH FUNCTION
function searchTreks() {

    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".trek-card");

    cards.forEach(card => {

        let name = card.querySelector("h3").innerText.toLowerCase();

        if (name.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


// FILTER BY DIFFICULTY

function filterTreks() {

    let filterValue = document.getElementById("filterSelect").value;
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let container = document.querySelector(".favorites-container");
    container.innerHTML = "";

    let filtered = filterValue === "All" 
        ? favorites 
        : favorites.filter(trek => trek.difficulty === filterValue);

    if (filtered.length === 0) {
        document.querySelector(".empty-msg").style.display = "block";
    } else {
        document.querySelector(".empty-msg").style.display = "none";
    }

    filtered.forEach(trek => {

        let originalIndex = favorites.findIndex(f => f.name === trek.name);

        let card = document.createElement("div");
        card.className = "trek-card";

        card.innerHTML = `
            <h3>${trek.name}</h3>
            <p>Difficulty: ${trek.difficulty}</p>
            <button onclick="removeFavorite(${originalIndex})">Remove</button>
        `;

        container.appendChild(card);
    });

    updateStats(filtered);
}
// AUTO LOAD WHEN PAGE OPENS
document.addEventListener("DOMContentLoaded", function(){
    addDefaultTreks();
    loadFavorites();
});