const IMAGE = [
    { url: "../images/Anjaneri.jpeg", title: "Anjaneri Fort",
     description: "Birthplace of Lord Hanuman."
     },
    { url: "../images/bramahgiri.jpeg", title: "Bramhagiri",
    description: "Origin of the Godavari river."
     },
    { url: "../images/Harishchandragad.jpeg", title: "Harishchandragad",
    description: "Known for Konkan Kada cliff."
   },
    { url: "../images/janjira.jpeg", title: "Janjira Fort",
     description: "Powerful sea fort."
     },
    { url: "../images/kalasubai.jpeg", title: "Kalsubai Peak",
    description: "Highest peak in Maharashtra."
  },
    { url: "../images/kokankada.jpeg", title: "Konkan Kada",
         description: "Massive cliff at Harishchandragad."
         },
    { url: "../images/Rajgad fort.jpeg", title: "Rajgad Fort", 
        description: "Capital of Shivaji Maharaj." 
    },
    { url: "../images/Ratangad.jpeg", title: "Ratangad", 
        description: "Famous for Nedhe rock window." 
    },
    { url: "../images/shivneri.jpeg", title: "Shivneri Fort", 
        description: "Birthplace of Shivaji Maharaj." 
    },
    { url: "../images/sindhudurg.jpeg", title: "Sindhudurg Fort",
         description: "Historic sea fort near Malvan." 
    },
    { url: "../images/sinhagad.jpeg", title: "Sinhgad Fort",
         description: "Battle of Tanaji Malusare." 
    },
    { url: "../images/vijaydurga.jpeg", title: "Vijaydurg Fort", 
        description: "Strong Maratha Empire sea fort." 
    }
];

let currentIndex = 0;


// SHOW MAIN IMAGE
function showCurrentIndexImage() {

    const imgElement = document.getElementById("mainImage");
    const headerElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");

    const currentImage = IMAGE[currentIndex];

    imgElement.src = currentImage.url;
    headerElement.innerText = currentImage.title;
    descriptionElement.innerText = currentImage.description;
}


// SLIDER LEFT
function slideLeft() {

    currentIndex = (currentIndex > 0) ? currentIndex - 1 : IMAGE.length - 1;

    showCurrentIndexImage();
}


// SLIDER RIGHT
function slideRight() {

    currentIndex = (currentIndex < IMAGE.length - 1) ? currentIndex + 1 : 0;

    showCurrentIndexImage();
}


// SHOW IMAGE BY CLICK
function showImage(index) {

    currentIndex = index;

    showCurrentIndexImage();
}


// CREATE GALLERY PREVIEW
function createGalleryPreview() {

    const container = document.getElementById("gallery-preview");

    let html = "";

    IMAGE.forEach((img, i) => {

        html += `
        <div class="img-box">
            <img src="${img.url}" class="preview-img" onclick="showImage(${i})">
            <span class="heart" onclick="like(this)">♡</span>
        </div>
        `;
    });

    container.innerHTML = html;
}


// LIKE + ADD TO FAVORITES
function like(element) {

    let imgFullUrl = element.parentElement.querySelector("img").src;

    // Match image with data
    const trekData = IMAGE.find(item =>
        imgFullUrl.includes(item.url.split("/").pop())
    );

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Check duplicate
    if (!favorites.some(fav => fav.image === imgFullUrl)) {

        favorites.push({
            name: trekData ? trekData.title : "Maharashtra Trek",
            difficulty: "Medium",
            image: imgFullUrl
        });

        localStorage.setItem("favorites", JSON.stringify(favorites));

        element.innerText = "♥";
        element.style.color = "red";

        alert("Trek Added to Favorites ❤️");

    } else {

        alert("Already in Favorites");

    }
}


// NAVBAR MENU TOGGLE
function toggleMenu() {

    let menu = document.getElementById("navMenu");
    let auth = document.querySelector(".auth-links-containar");

    menu.classList.toggle("active");
    auth.classList.toggle("active");
}


// INITIAL LOAD
createGalleryPreview();
showCurrentIndexImage();