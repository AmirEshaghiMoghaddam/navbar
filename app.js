// Explanation about some methodes we are using in this project
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


// accessing the elements
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function () {
     // instead of using add and remove it is better to use toggle
     links.classList.toggle("show-links");
});