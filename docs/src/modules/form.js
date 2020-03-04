const personName = document.getElementById('name');
const personAge = document.getElementById('age');
let form = document.querySelector('form');

function setPerson () {
    const person = {
        name: personName.value,
        age: personAge.value
    }
    localStorage.setItem('person', JSON.stringify(person));
    console.log(localStorage.getItem('person'))
}

// function getPerson() {

// }

form.addEventListener('submit', function(e) {
    e.preventDefault();
    setPerson();
});

export {
    setPerson
}