
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