

// / Récupération et affichage des works de la gallerie

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
async function AffichageImages(response) {
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
async function AfficherTousWorks() {
    let data = await getAllWorks()
    console.log(data);
    AffichageImages(data)
}
AfficherTousWorks();


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
// deleteWorks();

// Fonction pour supprimer un work



// async function deleteOneWork() {
//     let data = await getAllWorks()
//     console.log(data);
//     let tab = data.length;
//     console.log(tab);


//     // data.forEach(element => {

//     //     const btnDelete = document.createElement("button");
//     //     btnDelete.style.backgroundColor = "black";
//     //     btnDelete.style.width = "17px";
//     //     btnDelete.style.height = "17px";
//     //     btnDelete.style.position = "absolute";
//     //     btnDelete.style.top = "10px";
//     //     btnDelete.style.right = "6px";
//     //     console.log(btnDelete)

//     // });

// }
// deleteOneWork();


