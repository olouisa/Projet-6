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
    .then(res => res.json())
    .then(res => console.log(res))


fetch("http://localhost:5678/api/categories", {
    headers: {
        'Accept': 'application/json',
    }
})
    .then(response => response.json()
    )
    .then(response1 => {
        console.log(response1)


        // let catégories = response1.length;
        // console.log(catégories);
        // let resultatDuFiltre = response1.filter(then(response1) {
        //     for
        // })




        // function filtrerLesCatégories() {
        //     let resultatDuFiltre = response2.filter(function(catégorie) {
        //         // for (i = 0; i < catégorie.response2.lenght; i++) 
        //         //     if 



        // });
        // console.log(resultatDuFiltre);


        // }



        // const MesProjets = document.querySelector("#portfolio h2");
        // console.log(MesProjets);

        // const filtre = document.createElement("div");
        // MesProjets.appendChild(filtre);





        // const btnTous = document.createElement("button");
        // filtre.appendChild(btnTous);
        // console.log(filtre);

        // let resultatDuFiltre = response2.filter(function(catégorie) {


        // });
        // console.log(resultatDuFiltre);

        // const boutons = document.querySelectorAll("#filtre button");
        // console.log(boutons);












        // boutons.addEventListener("click", function);

    });



fetch("http://localhost:5678/api/works", {
    headers: {

        'Accept': 'application/json'


    }
})
    .then(response => response.json())
    .then(response2 => {
        console.log(response2);




    });

async function getAllWorks() {
    const response = await fetch("http://localhost:5678/api/works", {
        headers: {

            'Accept': 'application/json'


        }
    })
    return await response.json()
}

function AffichageImages(response) {
    let tab = response.length;
    console.log(tab);
    let gallery = document.querySelector(".gallery");
    gallery.innerHTML="";

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
async function AfficherTousWorks(){
    let data = await getAllWorks()
    AffichageImages(data)
} 

AfficherTousWorks()


// Filtre des objets
// 1- Appeler  le bouton
const btnobjets = document.querySelector("#objets");
// 2 - Appeler l'évènement click sur le bouton 
btnobjets.addEventListener("click", async function () {
    let data = await getAllWorks()
    // 3 - Mettre méthode filter dans la fonction anonyme de l'évènement
    const filtreObjets = data.filter(function (objet) {
        return objet.categoryId == 1
    })
    console.log(data);
    AffichageImages(filtreObjets)
});




// Filtre des appartements
// 1- Appeler  le bouton
const btnappartements = document.querySelector("#appartements");
// 2 - Appeler l'évènement click sur le bouton 
btnappartements.addEventListener("click", async function () {
    // 3 - Mettre méthode filter dans la fonction anonyme de l'évènement
    let data = await getAllWorks();
    filtreAppartements = data.filter(function (appartement) {
        return appartement.categoryId == 2
    })
    console.log(filtreAppartements);
    AffichageImages(filtreAppartements);
});


// Filtre des hôtels
// 1- Appeler  le bouton
const btnhotels = document.querySelector("#hotels");
// 2 - Appeler l'évènement click sur le bouton 
btnhotels.addEventListener("click", async function () {
    let data = await getAllWorks();
    // 3 - Mettre méthode filter dans la fonction anonyme de l'évènement
    filtreHotels = data.filter(function (hotel) {
        return hotel.categoryId == 3
    })
    console.log(filtreHotels);
    AffichageImages(filtreHotels);

});


// Filtre "Tous"
// 1- Appeler  le bouton
const btntous = document.querySelector("#tous");
// 2 - Appeler l'évènement click sur le bouton 
btntous.addEventListener("click", function () {
    // 3 - Mettre méthode filter dans la fonction anonyme de l'évènement
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
