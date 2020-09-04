function see() {
    let pass = String(document.form.password.value);
    if (pass == "Password") {
        document.form.password.value = "";
        document.form.password.type = "password";
    }
}

function hide() {
    let pass = String(document.form.password.value);
    if (pass == "") {
        document.form.password.value = "Password";
        document.form.password.type = "text";
    }

    else {
        document.form.password.type = "password";
    }
}

function check() {
    let id = document.form.email.value;
    let password = document.form.password.value;
    let id1 = String(id.includes("@"));
    let id2 = String(id.includes("."));
    if (id == "Email" || password == "Password") {
        alert("Empty Fields Not Allowed!");
    }

    else if (id1 != "true" || id2 != "true") {
        alert("Enter Valid E-mail Id!");
    }

    else {
        alert("Logged In!")
    }
}
