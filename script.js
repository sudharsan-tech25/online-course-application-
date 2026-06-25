document.getElementById("welcome").innerHTML =

"Welcome Student 🚀";

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}

function logout() {

    alert("Logged out successfully");

}

let images = [

    "banner1.jpg",

    "banner2.jpg",

    "banner3.jpg"

];

let index = 0;

setInterval(function () {

    let slide =

    document.getElementById("slideImage");

    if (slide) {

        index++;

        if (index >= images.length) {

            index = 0;

        }

        slide.src = images[index];

    }

}, 3000);