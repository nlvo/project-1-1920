const personName = document.getElementById('name');
const personAge = document.getElementById('age');
const personClass = document.getElementById('class');
const teacher = document.getElementById('teacher');
const dueDate = document.getElementById('due');
// assignment details
const titleAssignment = document.getElementById('title');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('author');
const bookPublication = document.getElementById('publication');
const bookIntro = document.getElementById('intro')
const bookSummary = document.getElementById('summary');

let form = document.querySelector('form');

function inputPerson() {
    const personData = {
        name: personName.value,
        age: personAge.value,
        class: personClass.value,
        teacher: teacher.value,
        due: dueDate.value,
        title: titleAssignment.value,
        bookTitle: bookTitle.value,
        author: bookAuthor.value,
        publication: bookPublication.value,
        intro: bookIntro.value,
        summary: bookSummary.value
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

    const main = document.querySelector('main')
    const html = `
    <section class="paper">
    <article class="cover">
        <h1 id="title">${data.title}</h1>
        <h2>${data.name} || ${data.age}</h2>
        <h2><span>Docent:</span> ${data.teacher}</h2>
        <h2><span>Inleverdatum:</span>${data.due}</h2>
    </article>
    <article class="intro">
        <p>
            ${data.intro}
        </p>
    </article>
    <article class="book">
        <h2>${data.bookTitle}</h2>
        <h3>${data.author}</h3>
        <h2>Inleiding</h2>
        <p>
            ${data.summary}
        </p>
    </article>

</section>
        
    `
    main.insertAdjacentHTML('beforeend', html)

}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    createAssignment();

});



export {
    setPerson
}