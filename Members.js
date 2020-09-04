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