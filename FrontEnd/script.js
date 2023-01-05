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
    .then(response2 => {
        console.log(response2)
        // const MesProjets = document.querySelector("#portfolio h2");
        // console.log(MesProjets);

        // const filtre = document.createElement("div");
        // MesProjets.appendChild(filtre);
        // filtre.textContent = "test";

        // const btnTous = document.createElement("button");
        // filtre.appendChild(btnTous);
        // console.log(filtre);

        // let resultatDuFiltre = response2.filter(function(catégorie) {


        // });
        // console.log(resultatDuFiltre);

        const boutons = document.querySelectorAll("#filtre button");
        console.log(boutons);

        function filtrerLesCatégories
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
        let tab = response2.length;
        console.log(tab);
        for (let i = 0; i < tab; i++) {

            const img = document.createElement("img");
            img.setAttribute("src", response2[i].imageUrl);
            img.setAttribute("crossorigin", "anonymous");


            const titre = document.createElement("p");
            titre.innerHTML = response2[i].title;

            let gallery = document.querySelector(".gallery");

            const figure = document.createElement("div");
            gallery.appendChild(figure);
            figure.appendChild(img);
            figure.appendChild(titre);

        }

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
