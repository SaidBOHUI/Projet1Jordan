let addUser = document.querySelector('.addUser');
let submitNewUser = document.querySelector('.submitNewUser');
let formulaire= document.querySelector('.formulaire');

addUser.addEventListener('click', () => {
    addUser.style.display = 'none'
    formulaire.classList.replace('d-none', 'dblock')
    // ou  addUser.classList.add("d-none")
})

submitNewUser.addEventListener('submit', () => {
    submitNewUser.classList.replace('d-block', 'd-none')
})