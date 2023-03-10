// Fonction pour envoyer les données du user dans l'API 


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

// Ajout de l'EventListener sur le bouton

const divMessage = document.createElement("div");
document.querySelector("#login").appendChild(divMessage);
let mail = document.querySelector("#mail");
let button = document.querySelector("#btn");
let pass = document.querySelector("#pass");

mail.addEventListener("input", validationMail);

button.addEventListener("click", async function (e) {
    e.preventDefault();
    let usermail = mail.value;
    let userpass = pass.value;
    let data = await getUserData(usermail, userpass);
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId);
    console.log(data.userId);
    console.log(data.token);

    if (data.token) {

        document.location.href = "./homepage_edit.html";
        console.log("C'est ok")
        console.log(data);
    } else {
        divMessage.innerHTML = "Erreur dans l’identifiant ou le mot de passe.";
        divMessage.style.color = "red";
        divMessage.style.fontSize = "12px";
        divMessage.style.paddingTop = "60px";
        console.log("Pas ok");
        console.log(data);

    }

})

function validationMail() {
    const errorMessage= document.querySelector(".errorMessage");
    let regex = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    let mail = document.querySelector("#mail");

    if (regex.test(mail.value)) {
        errorMessage.innerHTML = ""
    }
    else {
        errorMessage.innerHTML = "L'adresse mail n'est pas valide."
        errorMessage.style.color = "red";
    }
}