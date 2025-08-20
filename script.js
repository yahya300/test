function verif() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("m").value.trim();
    let number = document.getElementById("n").value.trim();

    if (name === "" || email === "" || message === "" || number === "") {
        alert("Please fill all the fields");
        return false;
    } else if (name.length < 3) {
        alert("Name must be at least 3 characters long");
        return false;
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address");
        return false;
    } else if (isNaN(number) || number.length < 8) {
        alert("Please enter a valid phone number");
        return false;
    } else if (message.length < 10) {
        alert("Message must be at least 10 characters long");
        return false;
    } else {
        alert("Thank you for your message, we will get back to you soon!");
        document.getElementById("contact-form").reset();
        return false; // prevent page reload
    }
}
