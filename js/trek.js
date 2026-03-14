function toggleMenu(){

let menu = document.getElementById("navMenu");
let auth = document.querySelector(".auth-links-containar");

menu.classList.toggle("active");
auth.classList.toggle("active");
}

const searchInput = document.getElementById("searchInput");
const difficultyFilter = document.getElementById("difficultyFilter");
const cards = document.querySelectorAll(".trek-card");

function filterTreks() {

    const searchText = searchInput.value.toLowerCase();
    const difficultyValue = difficultyFilter.value;

    cards.forEach(card => {

        const trekName = card.dataset.name.toLowerCase();
        const trekDifficulty = card.dataset.difficulty;

        const matchSearch = trekName.includes(searchText);
        const matchDifficulty = difficultyValue === "all" || trekDifficulty === difficultyValue;

        if(matchSearch && matchDifficulty){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}
searchInput.addEventListener("keyup", filterTreks);
difficultyFilter.addEventListener("change", filterTreks);

const popup = document.getElementById("bookingPopup");

function openPopup(){
popup.style.display = "flex";
}

function closePopup(){
popup.style.display = "none";
}

document.querySelector(".confirm-book").addEventListener("click", function(){
alert("Booking Successful!");
closePopup();
});

const personsInput = document.getElementById("personsInput");
const totalPrice = document.getElementById("totalPrice");
let pricePerPerson = 0;

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(button => {

button.addEventListener("click", function(){

const card = this.closest(".trek-card");
const priceText = card.querySelector(".price").innerText;

pricePerPerson = parseInt(priceText.replace(/[^0-9]/g, ""));

openPopup();

});

});

personsInput.addEventListener("input", function(){

const persons = personsInput.value;
const total = persons * pricePerPerson;

totalPrice.innerText = "Total Price: ₹" + total;

});