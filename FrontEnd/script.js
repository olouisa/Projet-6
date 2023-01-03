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
    .then(response2 =>
        console.log(response2)
    )
// .then((response)=>{
// console.log(response.json());
// })
// .then((response2) =>{
//     console.log(response2);
// })


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
