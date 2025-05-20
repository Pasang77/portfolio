const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener('click' , () => {
    navlinks.classList.toggle('active');
});

const text ="Hi, I'm Mr.s | Pasang Bhuti Sherpa ";
const typeText = document.getElementById('typed-text');
let index = 0;
function type(){
    if(index < text.length){
        typeText.textContent += text.charAt(index);
        index++;
        setTimeout(type,150);
    }
}
type();

const projects = [
{
    image : "image/body-mass-index-control-abstract-260nw-1918129091.webp",
    title : "BMI",
    description : "This project is about to calculate the body mass index(BMI)",
    src: "https://pasang77.github.io/bmi-calc/",
},
{
    image : "image/flower.jpg",
    title : " Animated Navbar",
    description : "A responsive navigation bar with smooth animation and",
    src: "https://pasang77.github.io/bmi-calc/",
},
{
image : "image/download (1).jpeg",
title : " Animated Navbar",
description : "A responsive navigation bar with smooth animation and",
src:"https://pasang77.github.io/bmi-calc/",
},
];
const container = document.getElementById("project-container");
projects.forEach(project=> {

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src = "${project.image}" alt = "${project.title}"/>
    <h3> ${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.src}" >View project</a>
    `;
    container.appendChild(card)
});
//service card
const services = [
    {
        Image : "image/download.jpeg",
        Title :"service box",
        Description : "This is a service div "
    },
    ];
    const containers = document.getElementById("service-div");
services.forEach(projects=> {

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src = "${projects.Image}" alt = "${projects.title}"/>
    <h3> ${projects.Title}</h3>
    <p>${projects.Description}</p>
    `;
    containers.appendChild(card)
});

//review

const review = [
{
    images : "image/pexels-joshsorenson-1714208.jpg",
    titles : " Elon Musk",
    descriptions : "Great work! very creative and professional",
},
{
    images : "image/flower1.jpg",
    titles : " Jamuna Regmi",
    descriptions : "Great work! very creative and professional",
},
{
    images : "image/flower1.jpg",
    titles : " Pasang Bhuti Sherpa",
    descriptions : "Great work! very creative and professional",
},
];

const review_container = document.getElementById("review_div");
review.forEach(reviews=> {

    const cards = document.createElement("div");
    cards.className = "review-card";
    cards.innerHTML = `
    <img src = "${reviews.images}" alt = "${reviews.titles}"/>
    <h4> ${reviews.titles}</h4>
    <p>${reviews.descriptions}</p>
    `;
    review_container.appendChild(cards)
});