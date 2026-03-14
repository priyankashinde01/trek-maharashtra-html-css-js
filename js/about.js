// Navbar
function toggleMenu() {

    let menu = document.getElementById("navMenu");
    let auth = document.querySelector(".auth-links-containar");

    menu.classList.toggle("active");
    auth.classList.toggle("active");
}

// IIFE
(function () {
    console.log("About Page Loaded");
})();


// Higher Order Function
function displayAnswer(callback) {
    callback();
}


// FAQ Switch Case

function showAnswer(question) {

    displayAnswer(function () {

        let text = "";

        switch (question) {

            case 1:
                text = "Maharashtra Trekking Portal is an online platform that helps users explore famous trekking forts in Maharashtra. It provides information about trekking routes, locations, history, and difficulty levels of different forts. The portal helps trekkers plan their trips easily and safely. It is useful for both beginners and experienced trekking enthusiasts. ";
                break;

            case 2:
                text = "Some of the best forts for trekking in Maharashtra are Rajgad, Torna, Raigad, and Sinhagad. These forts are popular for their scenic views, historical importance, and adventurous trekking routes. They attract many trekking enthusiasts and history lovers every year.";
                break;

            case 3:
                text = "Yes, trekking can be safe for beginners if they start with easy and well-known forts like Sinhagad or Lohagad. Beginners should carry proper trekking gear, enough water, and follow safety guidelines. It is also better to trek with friends or a group for safety.";
                break;

            default:
                text = "Answer not available.";

        }

        let answer = document.getElementById("faq" + question);

        answer.innerHTML = text;

        let item = answer.parentElement.parentElement;

        item.classList.toggle("active");

    });

}