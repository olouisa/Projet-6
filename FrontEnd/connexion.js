// Fonction pour récupérer les données du user dans l'API 

async function getUserData(_email, _password) {
    let user = {
        email: _email,
        password: _password
    };
    const response = await fetch("http://localhost:5678/api/users/login", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    })
    return await response.json();
}

// Fonction pour ajouter l'EventListener sur le bouton

const divMessage = document.createElement("div");
document.querySelector("#login").appendChild(divMessage);
let mail = document.querySelector("#mail");
let button = document.querySelector("#btn");
let pass = document.querySelector("#pass");


button.addEventListener("click", function (e) {
    e.preventDefault();
    let usermail = mail.value;
    let userpass = pass.value;
    let data = getUserData(mail.value, pass.value);

    if (usermail === "sophie.bluel@test.tld" && userpass === "S0phie") {
        document.location.href = "./homepage_edit.html";
        console.log("C'est ok")
    } else {
        divMessage.innerHTML = "Erreur dans l’identifiant ou le mot de passe.";
        divMessage.style.color = "red";
        divMessage.style.fontSize = "12px";
        divMessage.style.paddingTop = "60px";
        console.log("Pas ok")
    }

})


async function envoyerFormulaire() {
    let data = await getUserData;
    ajoutEventListener(data);
}