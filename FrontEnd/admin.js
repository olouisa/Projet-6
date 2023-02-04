
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
    const picture = document.querySelector("#picture");
    picture.style.width = "129px";
    picture.style.height = "193px";
    const pictureSpace = document.querySelector("#picture-space");
    const logo = document.querySelector(".fa-image");
    console.log(logo);
    let reader = new FileReader();

    reader.addEventListener("load", function () {

        logo.style.display = "none";
        let image = document.createElement('img');
        image.src = reader.result;
        let result = image.src;
        // result.style.width = "50px";
        picture.appendChild(image);
        image.style.display = "none";
        // console.log(reader.result);
        console.log(picture);

        formPhoto = document.querySelector("#formPhoto");
        formPhoto.style.display = "none";
        formatPhoto = document.querySelector("#type-taille");
        formatPhoto.style.display = "none";


        let canvas = document.createElement("canvas");
        picture.appendChild(canvas);
        canvas.style.width = "129px";
        canvas.style.height ="169px";


        let canvasContext = canvas.getContext("2d");
        console.log(canvas);
        console.log(image.src);

        // canvasContext.drawImage(image, 0, 0, 50, 100);
        image.onload = function() {
            canvasContext.drawImage(image, 0, 0, 300, 193);
          };
         



    })


    reader.readAsDataURL(inputFile.files[0]);
    console.log('Done');
});








// Ajouter des travaux
let form = document.querySelector("#formulaires");
console.log(form);
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    console.log(token);

    let title = document.querySelector("#title").value;
    console.log(title);
    let categoryId = document.querySelector("#categoryId").value;
    console.log(categoryId);
    let userId = document.querySelector("#userId").value;
    console.log(userId);
    id = document.querySelector("#id").value;
    console.log(id);

    let body =
    {
        "id": id,
        "title": title,
        "imageUrl": "http://localhost:5678/images/la-balisiere1675203882183.png",
        "categoryId": categoryId,
        "userId": userId
    }
    console.log(body);

    const response = await fetch("http://localhost:5678/api/works", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    })

    console.log(body);
    return await response.json();
    console.log(response);
})







async function ajouterWork() {
    // let token = localStorage.getItem("token");
    // console.log(token);

    // let title = document.querySelector("#title");
    // console.log(title);
    // let categoryId = document.querySelector("#categoryId");
    // console.log(categoryId);
    // let userId = document.querySelector("#userId");
    // console.log(userId);
    // id = document.querySelector("#id");
    // console.log(id);

    // let body =
    // {
    //     "id": 16,
    //     "title": "La balisière",
    //     "imageUrl": "http://localhost:5678/images/la-balisiere1675203882183.png",
    //     "categoryId": "3",
    //     "userId": 1
    //   }
    //   console.log(body);
    // const response = await fetch("http://localhost:5678/api/works", {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //     headers: {
    //         'Accept': 'application/json',
    //         'Authorization': `Bearer ${token}`,
    //         'Content-Type': 'multipart/form-data'
    //     }
    // })

    // console.log(body);
    // return await response.json();
    // console.log(response);


}
// ajouterWork();
