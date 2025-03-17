// Initially hide all sections except Banner and Footer
document.getElementById("nav").style.display = "none";
document.getElementById("vocabulary").style.display = "none";
document.getElementById("faq-section").style.display = "none";

document.getElementById("get-started").addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.getElementById("nameInput").value;
    const password = document.getElementById("passwordInput").value;
    
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (password !== "123456") {
        alert("Wrong password.");
        return;
    }

    alert("Login successful!");

    document.querySelector("section").style.display = "none"; // Hide the Banner
    document.getElementById("nav").style.display = "flex";
    document.getElementById("vocabulary").style.display = "block";
    document.getElementById("faq-section").style.display = "block";
});

document.getElementById("logout-btn").addEventListener("click", function () {
    document.getElementById("nav").style.display = "none";
    document.getElementById("vocabulary").style.display = "none";
    document.getElementById("faq-section").style.display = "none";

    document.querySelector("section").style.display = "flex"; // Show Banner
});

document.getElementById("faq-btn").addEventListener("click", () => {
    document.getElementById("faq-section").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("learn-btn").addEventListener("click", () => {
    document.getElementById("vocabulary").scrollIntoView({ behavior: "smooth" });
});

// clicking on social media icons
document.getElementById("fb").addEventListener("click", function () {
    window.open("https://www.facebook.com/", "_blank");
});

document.getElementById("insta").addEventListener("click", function () {
    window.open("https://www.instagram.com/", "_blank");
});
document.getElementById("yt").addEventListener("click", function () {
    window.open("https://www.youtube.com/", "_blank");
});
document.getElementById("git").addEventListener("click", function () {
    window.open("https://github.com/", "_blank");
});
