
// =========================
// Welcome Message
// =========================

const welcome = document.getElementById("welcome");

if (welcome) {
    welcome.innerHTML = "Welcome Student 🚀";
}

// =========================
// Dark Mode
// =========================

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// =========================
// Image Slider
// =========================

const images = [
    "banner1.jpg",
    "banner2.jpg",
    "banner3.jpg"
];

let currentImage = 0;

setInterval(function () {

    const slide = document.getElementById("slideImage");

    if (slide) {

        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        slide.src = images[currentImage];
    }

}, 3000);

// =========================
// Registration
// =========================

function register() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {

        alert("Please fill all fields.");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentPassword", password);

    alert("Registration Successful!");

    window.location.href = "login.html";
}

// =========================
// Login
// =========================

function login() {

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const savedEmail = localStorage.getItem("studentEmail");
    const savedPassword = localStorage.getItem("studentPassword");

    if (email === savedEmail && password === savedPassword) {

        alert("Login Successful!");

        window.location.href = "index.html";

    } else {

        alert("Invalid Email or Password");

    }

}

// =========================
// Logout
// =========================

function logout() {

    alert("Logged Out Successfully");

    window.location.href = "login.html";

}

// =========================
// Profile
// =========================

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

if (profileName) {

    profileName.innerHTML =
        "Name : " + localStorage.getItem("studentName");

}

if (profileEmail) {

    profileEmail.innerHTML =
        "Email : " + localStorage.getItem("studentEmail");

}

// =========================
// Course Enroll
// =========================

function enrollCourse(courseName) {

    alert("Successfully Enrolled in " + courseName);

}

// =========================
// Quiz
// =========================

function checkAnswer(answer) {

    if (answer === "a") {

        alert("Correct Answer 🎉");

    } else {

        alert("Wrong Answer ❌");

    }

}

// =========================
// Contact Form
// =========================

function sendMessage() {

    alert("Message Sent Successfully!");

}

// =========================
// Certificate
// =========================

const studentName = document.getElementById("studentName");

if (studentName) {

    studentName.innerHTML =
        localStorage.getItem("studentName");

}
function enrollCourse(courseName){

    alert("You have successfully enrolled in " + courseName);

    window.location.href = "login.html";

}