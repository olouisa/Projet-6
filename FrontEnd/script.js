

// let user = {
//     email: "sophie.bluel@test.tld",
//     password: "S0phie"
// };
// fetch("http://localhost:5678/api/users/login", {
//     method: "post",
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)

// })
//     .then(response => response.json())
//     .then(response1 => {
//         console.log(response1)
//     });





















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
    console.log(data);
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





console.log("test");