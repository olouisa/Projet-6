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
        const Array2 = response2.map(function (e) {
        const img = document.createElement("img");
        const gallery = document.querySelector(".gallery");
        console.log(gallery);
        gallery.innerHTML = '';
        
        img.setAttribute("src", response2.imageUrl);
        console.log(img.setAttribute);     


        gallery.appendChild(img);
        console.log(gallery.appendChild(img));

        });
        // img.src = response2.imageUrl;
        // console.log(img);
        // console.log(img.src);



        // const gallery = document.querySelector(".gallery");
        // console.log(gallery);

        // gallery.innerHTML = '';

        // gallery.appendChild(img);
        // console.log(gallery.appendChild(img));
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
