import { routes } from './modules/router';

var inputEmail = document.getElementById("naam");

const form = document.querySelector('form')

form.addEventListener('submit', e => {

    localStorage.setItem("naam", inputEmail.value);
    
    e.preventDefault()
    console.log(inputEmail.value)
    console.log(localStorage)

})




routes();