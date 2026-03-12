const IMAGE = [

{
url:"../images/Anjaneri.jpeg",
title:"Anjaneri Fort",
description:"Anjaneri Fort near Nashik is believed to be the birthplace of Lord Hanuman. It is a popular trekking destination."
},

{
url:"../images/bramahgiri.jpeg",
title:"Bramhagiri",
description:"Bramhagiri hill near Trimbakeshwar is the origin of the Godavari river and a famous trekking spot."
},

{
url:"../images/Harishchandragad.jpeg",
title:"Harishchandragad",
description:"Harishchandragad is a famous fort known for Konkan Kada cliff and beautiful sunrise views."
},

{
url:"../images/janjira.jpeg",
title:"Janjira Fort",
description:"Murud-Janjira is a powerful sea fort located on an island off the Maharashtra coast."
},

{
url:"../images/kalasubai.jpeg",
title:"Kalsubai Peak",
description:"Kalsubai is the highest peak in Maharashtra and a popular trekking location."
},

{
url:"../images/kokankada.jpeg",
title:"Konkan Kada",
description:"Konkan Kada is a massive cliff in Harishchandragad offering breathtaking valley views."
},

{
url:"../images/Rajgad fort.jpeg",
title:"Rajgad Fort",
description:"Rajgad was the capital of Chhatrapati Shivaji Maharaj for many years."
},

{
url:"../images/Ratangad.jpeg",
title:"Ratangad",
description:"Ratangad Fort is famous for its natural rock window called 'Nedhe'."
},

{
url:"../images/shivneri.jpeg",
title:"Shivneri Fort",
description:"Shivneri Fort is the birthplace of Chhatrapati Shivaji Maharaj."
},

{
url:"../images/sindhudurg.jpeg",
title:"Sindhudurg Fort",
description:"Sindhudurg is a historic sea fort built by Shivaji Maharaj near Malvan."
},

{
url:"../images/sinhagad.jpeg",
title:"Sinhgad Fort",
description:"Sinhgad Fort near Pune is famous for the battle of Tanaji Malusare."
},

{
url:"../images/vijaydurga.jpeg",
title:"Vijaydurg Fort",
description:"Vijaydurg is one of the strongest sea forts of the Maratha Empire."
}

]

let currentIndex = 0

function showCurrentIndexImage(){

const imgElement = document.getElementById("mainImage")
const headerElement = document.getElementById("title")
const descriptionElement = document.getElementById("description")

const currentImage = IMAGE[currentIndex]

imgElement.src = currentImage.url
headerElement.innerText = currentImage.title
descriptionElement.innerText = currentImage.description

}

function slideLeft(){

if(currentIndex > 0){
currentIndex--
}
else{
currentIndex = IMAGE.length - 1
}

showCurrentIndexImage()

}

function slideRight(){

if(currentIndex < IMAGE.length - 1){
currentIndex++
}
else{
currentIndex = 0
}

showCurrentIndexImage()

}

function showImage(index){
currentIndex = index
showCurrentIndexImage()
}function showImage(index){
currentIndex = index
showCurrentIndexImage()
}

function createGalleryPreview(){

const galleryPreviewContainer = document.getElementById("gallery-preview")

let previewHTML = ""

for(let i=0;i<IMAGE.length;i++){

const currentImg = IMAGE[i]

previewHTML += `<img src='${currentImg.url}' class='preview-img' onclick='showImage(${i})'>`

}

galleryPreviewContainer.innerHTML = previewHTML

}

createGalleryPreview()
showCurrentIndexImage()


function like(element){

if(element.classList.contains("active")){
element.classList.remove("active")
element.innerText = "♡"
}
else{
element.classList.add("active")
element.innerText = "♥"
}

}


function createGalleryPreview(){

const galleryPreviewContainer = document.getElementById("gallery-preview")

let previewHTML = ""

for(let i=0;i<IMAGE.length;i++){

const currentImg = IMAGE[i]

previewHTML += `
<div class="img-box">
<img src='${currentImg.url}' class='preview-img' onclick='showImage(${i})'>
<span class="heart" onclick="like(this)">♡</span>
</div>
`

}

galleryPreviewContainer.innerHTML = previewHTML

}

createGalleryPreview()
showCurrentIndexImage()

function toggleMenu(){

let menu = document.getElementById("navMenu");
let auth = document.querySelector(".auth-links-containar");

menu.classList.toggle("active");
auth.classList.toggle("active");
}
function like(element){

let img = element.parentElement.querySelector("img").src;

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

if(!favorites.includes(img)){

favorites.push(img);
localStorage.setItem("favorites", JSON.stringify(favorites));

element.innerText = "♥";   // filled heart
element.style.color = "red";

alert("Added to Favorites ❤️");

}
else{

alert("Already in Favorites");

}

}
previewHTML += `
<div class="img-box">
<img src='${currentImg.url}' class='preview-img' onclick='showImage(${i})'>
<span class="heart" onclick="like(this)">♡</span>
</div>
`