import * as api from '../modules/api';

const personName = document.getElementById('name');
const personAge = document.getElementById('age');
const personClass = document.getElementById('class');
const teacher = document.getElementById('teacher');
const dueDate = document.getElementById('due');
// assignment details
const tableOfContents = document.getElementById('contents');
const titleAssignment = document.getElementById('title');
const titleAssignment2 = document.getElementById('title2');
console.log(titleAssignment2)
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('author');
const bookPublication = document.getElementById('publication');
const nameid = document.getElementById('nameid');
const teacherid = document.getElementById('teacherid');
const dueid = document.getElementById('dueid');
const bookIntro = document.getElementById('intro')
const chapter1 = document.getElementById('chapter1');
const chapter2 = document.getElementById('chapter2');
const chapter3 = document.getElementById('chapter3');
const chapter4 = document.getElementById('chapter4');
const chapter5 = document.getElementById('chapter5');


let form = document.querySelector('form');

function inputPerson() {
    const book = api.findBook();
    const personData = {
        name: personName.value,
        age: personAge.value,
        class: personClass.value,
        teacher: teacher.value,
        due: dueDate.value,
        title: titleAssignment.value,
        intro: bookIntro.value,
        chapter1: book.title,
        chapter2: chapter2.value,
        chapter3: chapter3.value,
        chapter4: chapter4.value,
        chapter5: chapter5.value
    }
    return personData
}

function setPerson() {
    localStorage.setItem('person', JSON.stringify(inputPerson()))
}

function getPerson() {
    let personData = localStorage.getItem('person')
    let data = JSON.parse(personData)
    return data
}

function createAssignment() {
    setPerson()
    const data = getPerson()
    titleAssignment2.append(data.title)
    nameid.append(data.name)
    teacherid.append(data.name)
    dueid.append(data.due)
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    createAssignment();
});

export {
    createAssignment
}