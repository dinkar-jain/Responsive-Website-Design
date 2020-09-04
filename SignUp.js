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