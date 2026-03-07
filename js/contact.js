function toggleMenu(){

let menu = document.getElementById("navMenu");
let auth = document.querySelector(".auth-links-containar");

menu.classList.toggle("active");
auth.classList.toggle("active");
}
let inquiries = JSON.parse(localStorage.getItem("trekData")) || [];

const form = document.getElementById("contactForm");
const list = document.getElementById("inquiryList");

function displayData(){

list.innerHTML="";

if(inquiries.length===0){
list.innerHTML="<p>No inquiries yet.</p>";
return;
}
inquiries.forEach(function(data){

let div=document.createElement("div");

div.classList.add("inquiry-item");

div.innerHTML=`
<b>${data.name}</b> (${data.email})<br>
${data.message}<br>
<small>${data.date}</small>
`;
list.appendChild(div);

});

}
displayData();

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let message=document.getElementById("message").value.trim();

if(name==="" || email==="" || message===""){
alert("Please fill all fields");
return;
}

let data={
name:name,
email:email,
message:message,
date:new Date().toLocaleString()
};

inquiries.push(data);

localStorage.setItem("trekData",JSON.stringify(inquiries));

alert("Inquiry Submitted Successfully");

form.reset();

displayData();

});

function clearData(){

if(confirm("Clear all inquiries?")){

localStorage.removeItem("trekData");

inquiries=[];

displayData();

}

}

function openMap(){
window.open("https://www.google.com/maps/place/Pune","_blank");
}

function openEmail(){
window.location.href="mailto:info@maharashtratrek.com";
}

function openPhone(){
window.location.href="tel:+919876543210";
}

function openFacebook(){
window.open("https://facebook.com","_blank");
}

function openInstagram(){
window.open("https://instagram.com","_blank");
}

function openYoutube(){
window.open("https://youtube.com","_blank");
}
