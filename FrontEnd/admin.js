
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
        btnDelete.style.display = "flex";
        btnDelete.style.justifyContent = "center";

        console.log(btnDelete);
        console.log(btnDelete.id);

        icone = document.createElement("i");
        icone.classList.add("fa-regular");
        icone.classList.add("fa-trash-can");
        icone.style.color = "white";
        icone.style.fontSize = "11px";
        btnDelete.appendChild(icone);

        const btnDeleteAll = document.querySelector(".supprimer_gallerie");





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
        btnDeleteAll.addEventListener("click", () => deleteWorks(response[i++].id));
        btnDeleteAll.addEventListener("click", () => deleteWorks(response[i--].id));



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




// Aller vers la modale d'ajout
const bntAjouterPhoto = document.querySelector("#btn_ajouterPhoto");
const bntRetour = document.querySelector("#retour");
const Modale1 = document.querySelector(".modale-opaque");
const Modale2 = document.querySelector(".modale-opaque-ajout");

bntAjouterPhoto.addEventListener("click", (e) => {
    e.preventDefault();
    Modale1.style.display = "none";
    Modale2.style.display = "flex";
})

// Retourner à la modale de suppression
bntRetour.addEventListener("click", (e) => {
    e.preventDefault();
    Modale1.style.display = "flex";
    Modale2.style.display = "none";
})




// Sélectionner et Prévisualiser l'image 
const inputFile = document.querySelector("#input-file");
console.log(inputFile);

inputFile.addEventListener("change", function (e) {
    e.preventDefault();
    const picture = document.querySelector("#picture");
    const logo = document.querySelector(".fa-image");
    console.log(logo);
    imgSelect = document.createElement("img");
    imgSelect.src = URL.createObjectURL(inputFile.files[0]);
    picture.appendChild(imgSelect);
    console.log(imgSelect);
    imgSelect.style.width = "129px";
    imgSelect.style.height = "170px";

    logo.style.display = "none";
    formPhoto = document.querySelector("#formPhoto");
    formPhoto.style.display = "none";
    formatPhoto = document.querySelector("#type-taille");
    formatPhoto.style.display = "none";

    imgSelect.onload = function () {
        URL.revokeObjectURL(imgSelect.src);

    };




    console.log('Done');
});


// Ajouter des travaux

let form = document.querySelector("#form-ajout");
console.log(form);
const title = document.querySelector("#title");
const categoryId = document.querySelector("#categoryId");
const btn_ajouterUnePhoto = document.querySelector("#btn_ajouterUnePhoto");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let token = localStorage.getItem("token");
    console.log(token);
    let userId = localStorage.getItem("userId");
    console.log(userId);
    let title = document.querySelector("#title");
    console.log(title);
    let categoryId = document.querySelector("#categoryId").options[document.querySelector("#categoryId").selectedIndex].id;
    console.log(categoryId);
    let inputFile = document.querySelector("#input-file");
    console.log(inputFile);


    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("category", categoryId);
    formData.append("image", inputFile.files[0]);

    const titleValue = document.querySelector("#title").value;
    const categoryIdValue = document.querySelector("#categoryId").value;
    const inputFileValue = document.querySelector("#input-file").value;
    console.log(titleValue);




    // Vérification du champs image


    // if (inputFileValue === "") {
    //     e.preventDefault();
    //     let errorPhoto = document.querySelector(".errorPhoto");
    //     errorPhoto.innerHTML = "Veuillez sélectionner une image";
    //     return false;

    // };

    // Vérification du titre
    // if (titleValue === "") {
    //     e.preventDefault();
    //     let errorTitle = document.querySelector(".errorTitle");
    //     // errorTitle.style.color = "red";
    //     errorTitle.innerHTML = "Veuillez choisir un titre";
    //     console.log(errorTitle);
    //     return false;
    // };

    // // Vérification du champs catégories
    // if (categoryIdValue === "") {
    //     e.preventDefault();
    //     let errorCategory = document.querySelector(".errorCategory");
    //     errorCategory.innerHTML = "Veuillez choisir une catégorie";
    //     return false;

    // };



    const response = await fetch("http://localhost:5678/api/works", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })

    return await response.json();
    console.log(response);
    console.log(response.json);

    });

// Validation du formulaire
const btnValider = document.querySelector("#valider-ajout");
title.addEventListener("change", verify_inputs);
categoryId.addEventListener("change", verify_inputs);
btn_ajouterUnePhoto.addEventListener("change", verify_inputs);


async function verify_inputs() {
    const titleValue = document.querySelector("#title").value;
    const categoryIdValue = document.querySelector("#categoryId").value;
    const inputFileValue = document.querySelector("#input-file").value;
    console.log(inputFileValue);
    inputs = form.getElementsByTagName("input");


    if (titleValue !== "" && categoryIdValue !== "" && inputFileValue !== "") {
        console.log("fomulaire complet");
        const btnValider = document.querySelector("#valider-ajout");
        const errorGeneral = document.querySelector(".errorGeneral");

        btnValider.style.backgroundColor = "rgba(29, 97, 84, 1)";
        btnValider.disabled = false;
        console.log(btnValider.disabled);
        errorGeneral.innerHTML = "";


    } else {
        const btnValider = document.querySelector("#valider-ajout");
        const errorGeneral = document.querySelector(".errorGeneral");
        btnValider.style.backgroundColor = "rgba(167, 167, 167, 1)";
        btnValider.disabled = true;
        console.log(btnValider.disabled);
        errorGeneral.innerHTML = "Veuillez remplir tous les champs";


    }

    // for (let i = 0; i<inputs.length; i++) {
    //     console.log(inputs[i]);
    //     if (!inputs[i].value) {        
    // const btnValider = document.querySelector("#valider-ajout");
    // btnValider.style.backgroundColor= "rgba(167, 167, 167, 1)";
    // btnValider.disabled = true;
    // console.log(btnValider.disabled);
    //     } else {
    //              const btnValider = document.querySelector("#valider-ajout");
    // btnValider.style.backgroundColor= "rgba(29, 97, 84, 1)";
    // btnValider.disabled = false;

    // console.log(btnValider.disabled);

    //     }
    // }  
}




