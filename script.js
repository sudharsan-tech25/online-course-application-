function showMessage() {

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    if(email === "admin@gmail.com" && password === "1234") {

        alert("Login Successful!");

    }

    else {

        alert("Invalid Email or Password!");

    }

}
function registerMessage() {

    let name = document.getElementById("name").value;

    let email = document.getElementById("registerEmail").value;

    let password = document.getElementById("registerPassword").value;

    localStorage.setItem("name", name);

    localStorage.setItem("email", email);

    localStorage.setItem("password", password);

    alert("Registration Successful!");

}
function enrollMessage() {

    alert("Course Enrolled Successfully!");

}
window.onload = function() {

    let username = localStorage.getItem("name");

    if(username) {

        document.getElementById("welcome").innerHTML =
        "Welcome, " + username + "!";

    }

}
function logout() {

    localStorage.clear();

    alert("Logged Out Successfully!");

    location.reload();

}