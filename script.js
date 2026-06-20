function showMessage() {

    let email = document.getElementById("email")?.value;

    let password = document.getElementById("password")?.value;

    if(email === "admin@gmail.com" && password === "1234") {

        alert("Login Successful!");

    }

    else {

        alert("Invalid Email or Password!");

    }

}

function registerMessage() {

    let name = document.getElementById("name")?.value;

    let email =
    document.getElementById("registerEmail")?.value;

    let password =
    document.getElementById("registerPassword")?.value;

    localStorage.setItem("name", name);

    localStorage.setItem("email", email);

    localStorage.setItem("password", password);

    alert("Registration Successful!");

}

function enrollMessage() {

    alert("Course Enrolled Successfully!");

}

function logout() {

    localStorage.clear();

    alert("Logged Out Successfully!");

    location.reload();

}

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}

let score = 0;

function checkAnswer(answer) {

    if(answer === 'a') {

        score++;

        alert("Correct Answer!");

    }

    else {

        alert("Wrong Answer!");

    }

    localStorage.setItem("quizScore", score);

}

function searchCourse() {

    let input =
    document.getElementById("searchCourse")
    .value.toLowerCase();

    let ul =
    document.getElementById("courseList");

    let li =
    ul.getElementsByTagName("li");

    for(let i = 0; i < li.length; i++) {

        let text =
        li[i].textContent.toLowerCase();

        if(text.includes(input)) {

            li[i].style.display = "";

        }

        else {

            li[i].style.display = "none";

        }

    }

}

function addReview() {

    let review =
    document.getElementById("reviewInput")?.value;

    if(review === "") {

        alert("Please enter a review!");

        return;

    }

    let li =
    document.createElement("li");

    li.textContent = review;

    document.getElementById("reviewList")
    ?.appendChild(li);

    let reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push(review);

    localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
    );

    document.getElementById("reviewInput").value = "";

}

window.onload = function() {

    let username =
    localStorage.getItem("name");

    let email =
    localStorage.getItem("email");

    let welcomeText =
    document.getElementById("welcome");

    if(welcomeText && username) {

        welcomeText.innerHTML =
        "Welcome, " + username + "!";

    }

    let profileName =
    document.getElementById("profileName");

    let profileEmail =
    document.getElementById("profileEmail");

    if(profileName && username) {

        profileName.innerHTML =
        "Student Name: " + username;

    }

    if(profileEmail && email) {

        profileEmail.innerHTML =
        "Student Email: " + email;

    }

    let reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

    for(let i = 0; i < reviews.length; i++) {

        let li =
        document.createElement("li");

        li.textContent = reviews[i];

        document.getElementById("reviewList")
        ?.appendChild(li);

    }

}
function sendMessage() {

    let name =
    document.getElementById("contactName").value;

    let email =
    document.getElementById("contactEmail").value;

    let message =
    document.getElementById("contactMessage").value;

    if(name === "" || email === "" || message === "") {

        alert("Please fill all fields!");

    }

    else {

        alert("Message Sent Successfully!");

    }

}