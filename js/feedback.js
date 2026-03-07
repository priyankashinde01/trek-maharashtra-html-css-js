/* STAR RATING SYSTEM (Arrow Function) */
let stars = document.querySelectorAll(".star");
let rating = 0;

stars.forEach((star,index)=>{
    star.addEventListener("click", () => {
        rating = index + 1;

        stars.forEach((s,i)=>{
            s.classList.toggle("active", i < rating);
        });
    });
});


/* CALLBACK FUNCTION FOR FORM PROCESSING */
const processFeedback = (callback) => {

    const name = document.getElementById("name").value;
    const opinion = document.getElementById("opinion").value;

    if(name === "" || opinion === "" || rating === 0){
        alert("Please fill all fields and select rating!");
        return;
    }

    // confirm() popup
    const confirmation = confirm("Are you sure you want to submit feedback?");

    if(confirmation){
        callback(name, opinion, rating);
    }
};


/* FORM SUBMIT EVENT (Arrow Function) */
document.getElementById("feedbackForm")
.addEventListener("submit", (e)=>{
    e.preventDefault();

    processFeedback((name, opinion, rating)=>{

        // Create new testimonial card dynamically
        const newCard = document.createElement("div");
        newCard.classList.add("card");

        newCard.innerHTML = `
            <div class="profile">
                <img src="https://via.placeholder.com/60">
                <div>
                    <h4>${name}</h4>
                    <small>User</small>
                    <div class="rating">${"★".repeat(rating)}${"☆".repeat(5-rating)}</div>
                </div>
            </div>
            <p>${opinion}</p>
        `;

        document.getElementById("testimonialSection").prepend(newCard);

        document.getElementById("feedbackForm").reset();
        stars.forEach(s=>s.classList.remove("active"));
        rating = 0;

        alert("Feedback Submitted Successfully!");
    });

});