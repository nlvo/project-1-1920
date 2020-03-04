function inputToLoca(input) {
    let key = 'input-' + input.id
    let storedValue = localStorage.getItem(key)

    if (storedValue) {
        input.value = storedValue
        input.addEventListener('input', localSetFunction)
    }
}

function localSetFunction() {
    localStorage.setItem(key, input.value)
}

const inputElement = document.querySelector('input')



var inputEmail = document.getElementById("naam");
localStorage.setItem("naam", inputEmail.value);
let form = document.querySelector('form')
form.addEventListener('submit', e => {

    e.preventDefault()
    console.log(localStorage)
})

console.log(localStorage)
// function persistInput(input)
// {
//   var key = "input-" + input.id;

//   var storedValue = localStorage.getItem(key);

//   if (storedValue)
//       input.value = storedValue;

//   input.addEventListener('input', function ()
//   {
//       localStorage.setItem(key, input.value);
//   });
// }