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

function confirmsee() {
    let cpass = String(document.form.confirm.value);
    if (cpass == "Confirm Password") {
        document.form.confirm.value = "";
        document.form.confirm.type = "password";
    }
}

function confirmhide() {
    let pass = String(document.form.confirm.value);
    if (pass == "") {
        document.form.confirm.value = "Confirm Password";
        document.form.confirm.type = "text";
    }

    else {
        document.form.confirm.type = "password";
    }
}

function check() {
    let name = document.form.name.value;
    let id = document.form.email.value;
    let password = document.form.password.value;
    let confirm = document.form.confirm.value;
    let id1 = String(id.includes("@"));
    let id2 = String(id.includes("."));
    if (name == "Name" || id == "E-mail" || password == "Password" || confirm == "Confirm Password") {
        alert("Empty Fields Not Allowed!");
    }

    else if (id1 != "true" || id2 != "true") {
        alert("Enter Valid E-mail Id!");
    }

    else if (password != confirm) {
        alert("Check Confirm Password!")
    }

    else {
        alert("Check Your MailBox!");
    }
}
