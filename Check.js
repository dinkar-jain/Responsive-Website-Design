function check() {
    let id = document.form.email.value;
    let id1 = String(id.includes("@"));
    let id2 = String(id.includes("."));
    if (id == "Registered Email") {
        alert("Empty Fields Not Allowed!");
    }

    else if (id1 == "true" && id2 == "true") {
        alert("Check Your MailBox!");
    }

    else {
        alert("Enter Valid E-mail Id!");
    }
}