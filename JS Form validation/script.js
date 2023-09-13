function validation() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;
    var confirmpassword = document.getElementById("cpass").value;
    var phone = document.getElementById("cell").value;
    var email = document.getElementById("email").value;

    if (username == "") {
        document.getElementById("nameError").innerHTML = "*Name can't be empty";
        return false;
    }

    if ((username.length <= 2) || (username.length > 20)) {
        document.getElementById('nameError').innerHTML = " ** Username lenght must be between 2 and 20";
        return false;
    }

    if (password == "") {
        document.getElementById("passError").innerHTML = "*Password can't be empty";
        return false;
    }

    if (password == "password") {
        document.getElementById("passError").innerHTML = "*Password can't be password";
        return false;
    }

    if (password.length < 6) {
        document.getElementById("passError").innerHTML = "*Password must contain at least 6 characters";
        return false;
    }

    if (confirmpassword != password) {
        document.getElementById("cpassError").innerHTML = "*Password does not match";
        return false;
    }

    if (phone = "") {
        document.getElementById("cellError").innerHTML = "*Please enter phone no.";
        return false;
    }

    if ((phone.length < 11) && (phone.length >= 20)) {
        document.getElementById("cellError").innerHTML = "*Invalid phone no.";
        return false;
    }

    if (isNaN(phone)) {
        document.getElementById("cellError").innerHTML = "*Invalid phone no.";
        return false;
    }

    if (email = "") {
        document.getElementById("mailError").innerHTML = "*Please enter Email";
        return false;
    }
    }