function validateForm() {
    var name = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    if (name === "" || place === "" || email === "" || phoneNumber === "") {
        alert("All fields are required");
        return false;
    } else {
        return true;
    }
}

// Add event listener for form submission
document.getElementById('submitBtn').addEventListener('click', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Validate the form
    if (validateForm()) {
        // Submit the form
        document.getElementById('contactForm').submit();

        // Reset form fields after submission
        document.getElementById('name').value = '';
        document.getElementById('place').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phoneNumber').value = '';
    }
});
