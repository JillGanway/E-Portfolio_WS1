window.onload = function () {

    window.alert("Welcome to Jillian's Portfolio!");

    console.log("Portfolio Loaded Successfully.");

    
    document.getElementById("mainHeading").innerHTML =
    "Welcome to Jillian Smile Ganway's Portfolio";

    document.getElementById("mainHeading").style.color = "#6e473b";
    document.getElementById("mainHeading").style.fontSize = "42px";

};

function showInfo() {

    alert(
        "Name: Jillian Smile Ganway\n" +
        "Age: 20\n" +
        "Course: BSIT 3rd Year\n" +
        "School: Holy Child Central Colleges Inc."
    );

    console.log("Personal Information Displayed");

}

function changeTheme() {

    document.body.classList.toggle("dark-mode");

    console.log("Theme Changed");

}