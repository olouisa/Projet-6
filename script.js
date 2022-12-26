let user = {
    email: "string",
    password: "string"
};

fetch("http://localhost:5678/api/users/login", {
    method: "post",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)

});

fetch("http://localhost:5678/api/categories"), {
    headers: {
        'Accept': 'application/json',
    }
};

fetch("http://localhost:5678/api/works"), {
    headers: {
        'Accept': 'application/json'
    }    
};