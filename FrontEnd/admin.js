
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

const overlay = document.querySelector("#overlay");
overlay.addEventListener("click", closeModal);

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


// Modale

// Fonction pour afficher les images de la gallerie
async function AffichageImagesModale(response) {
    let tab = response.length;
    console.log(tab);
    let gallery = document.querySelector("#modal_gallery");
    gallery.innerHTML = "";
    gallery.style.display = "flex";
    gallery.style.flexDirection = "row";
    gallery.style.justifyContent = "space-between";
    gallery.style.flexWrap = "wrap";


    for (let i = 0; i < tab; i++) {


        const img = document.createElement("img");
        img.setAttribute("src", response[i].imageUrl);
        img.setAttribute("crossorigin", "anonymous");
        img.style.width = "78px";
        img.style.height = "104px";
        // img.innerHTML = '<a href="#"><button><i class="fa-solid fa-trash-can"></i></button></a>';

        console.log(img);

        const btnDelete = document.createElement("button");
        btnDelete.setAttribute("id", response[i].id);
        btnDelete.setAttribute("type", "button");
        btnDelete.style.position = "absolute";
        btnDelete.style.backgroundColor = "black";
        btnDelete.style.width = "17px";
        btnDelete.style.height = "17px";
        btnDelete.style.top = "5px";
        btnDelete.style.right = "6px";
        console.log(btnDelete);
        // img.appendChild(btnDelete);
        console.log(btnDelete.id);




        const titre = document.createElement("p");
        titre.innerHTML = response[i].title;
        titre.style.fontSize = "12px";
        titre.style.width = "35px";


        const figure = document.createElement("div");
        figure.style.position = "relative";
        gallery.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(titre);
        figure.appendChild(btnDelete);


        btnDelete.addEventListener("click", () => deleteWorks(response[i].id)
        );


    }
}

// Fonction pour afficher tous les works
async function AfficherTousWorksModale() {
    let data = await getAllWorks()
    console.log(data);
    AffichageImagesModale(data)
}
AfficherTousWorksModale();


// Fonction pour supprimer les works
async function deleteWorks(_id) {
     console.log(_id);
    let token = localStorage.getItem("token");
    console.log(token);

    const response = await fetch(`http://localhost:5678/api/works/${_id}`, {
        method: "DELETE",
        // body: null,
        headers: {
            'Accept': '*/*',
            'Authorization': `Bearer ${token}`


        }

    })
    console.log(response);
    return response;


}