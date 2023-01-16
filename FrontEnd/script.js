

let user = {
    email: "sophie.bluel@test.tld",
    password: "S0phie"
};
fetch("http://localhost:5678/api/users/login", {
method: "post",
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
},
body: JSON.stringify(user)

})
.then(response => response.json())
.then(response1 => {
    console.log(response1)
});







// Fonction pour récupérer les données du user dans l'API 
   
    async function getUserData() {
        let user = {
            email: "sophie.bluel@test.tld",
            password: "S0phie"
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
async function ajoutEventListener() {
    const divMessage= document.createElement("div");
    document.querySelector("#login").appendChild(divMessage);
    let mail = document.querySelector("#mail"); 
    let button = document.querySelector("#btn"); 
    let pass = document.querySelector("#pass"); 


    button.addEventListener("click", function(e) {
e.preventDefault();
let usermail = mail.value;
let userpass = pass.value;


if(usermail === "sophie.bluel@test.tld" && userpass === "S0phie") {
    document.location.href="./homepage_edit.html";
    console.log("C'est ok")
} else {
    divMessage.innerHTML="Erreur dans l’identifiant ou le mot de passe.";
    divMessage.style.color = "red";
    divMessage.style.fontSize = "12px";
    divMessage.style.paddingTop = "60px";
    console.log("Pas ok")}

    })
}
ajoutEventListener();

// async function envoyerFormulaire() {
//     let data = await getUserData;
//     ajoutEventListener(data);
// }



         








// Récupération des catégories
fetch("http://localhost:5678/api/categories", {
    headers: {
        'Accept': 'application/json',
    }
})
    .then(response => response.json()
    )
    .then(response1 => {
        console.log(response1)
    });



// Récupération et affichage des works de la gallerie

// Fonction pour récupérer les données works de l'API
async function getAllWorks() {
    const response = await fetch("http://localhost:5678/api/works", {
        headers: {

            'Accept': 'application/json'


        }
    })
    return await response.json()
}


// Fonction pour afficher les images de la gallerie
function AffichageImages(response) {
    let tab = response.length;
    console.log(tab);
    let gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    for (let i = 0; i < tab; i++) {


        const img = document.createElement("img");
        img.setAttribute("src", response[i].imageUrl);
        img.setAttribute("crossorigin", "anonymous");


        const titre = document.createElement("p");
        titre.innerHTML = response[i].title;


        const figure = document.createElement("div");
        gallery.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(titre);


    }
}

// Fonction pour afficher tous les works 
async function AfficherTousWorks() {
    let data = await getAllWorks()
    AffichageImages(data)
}
AfficherTousWorks()


// Filtre des objets
const btnobjets = document.querySelector("#objets");
btnobjets.addEventListener("click", async function () {
    let data = await getAllWorks()
    const filtreObjets = data.filter(function (objet) {
        return objet.categoryId == 1
    })
    console.log(data);
    AffichageImages(filtreObjets)
});




// Filtre des appartements
const btnappartements = document.querySelector("#appartements");
btnappartements.addEventListener("click", async function () {
    let data = await getAllWorks();
    filtreAppartements = data.filter(function (appartement) {
        return appartement.categoryId == 2
    })
    console.log(filtreAppartements);
    AffichageImages(filtreAppartements);
});


// Filtre des hôtels
const btnhotels = document.querySelector("#hotels");
btnhotels.addEventListener("click", async function () {
    let data = await getAllWorks();
    filtreHotels = data.filter(function (hotel) {
        return hotel.categoryId == 3
    })
    console.log(filtreHotels);
    AffichageImages(filtreHotels);

});


// Bouton "Tous"
const btntous = document.querySelector("#tous");
btntous.addEventListener("click", function () {
    AfficherTousWorks();
});




// Route Works avec la méthode POST:
// fetch("http://localhost:5678/api/works", {
//     method: "post",
//     headers: {
//         'Accept': 'application/json',
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3MjE4NTg4MCwiZXhwIjoxNjcyMjcyMjgwfQ.XVCc74rr73yBxGunE2AHTssTHdWQIPNPmvXYju6QdSI',
//         'Content-Type': 'multipart/form-data'
//     }
//     // body: JSON.stringify({

//     // })
// })
//     .then(response => response.json())
//     .then(response2 => console.log(response2));



// Création de la fenêtre modale

function openModal() {
    const modal = document.querySelector("#modale1");
    modal.style.display = "flex";
   const modal2 = document.querySelector(".modale-opaque");
  
}
function closeModal() {
    const modal = document.querySelector("#modale1");
    modal.style.display = "none";
   const modal2 = document.querySelector(".modale-opaque");

}


const btnOpenModal = document.querySelector(".js-modal");
console.log(btnOpenModal);
btnOpenModal.addEventListener("click", openModal);

const btnCloseModal = document.querySelector("#close");
console.log(btnCloseModal);
btnCloseModal.addEventListener("click", closeModal);




console.log("test");