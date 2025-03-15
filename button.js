document.getElementById("get-started").addEventListener("click", function (event) {
    event.preventDefault();
        const name = document.getElementById("nameInput").value;
        const password = document.getElementById("passwordInput").value;
        
        if (!name) {
            alert("Please enter your name.");
            return;
        }
        if (password !== "123456") {
            alert("Wrong password");
            return;
        }

});