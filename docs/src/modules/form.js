const personName = document.getElementById('name');
const personAge = document.getElementById('age');
const personClass = document.getElementById('class');
const teacher = document.getElementById('teacher');
const dueDate = document.getElementById('due');
// assignment details
const tableOfContents = document.getElementById('contents');
const titleAssignment = document.getElementById('title');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('author');
const bookPublication = document.getElementById('publication');
const bookIntro = document.getElementById('intro')
const chapter1 = document.getElementById('chapter1');
const chapter2 = document.getElementById('chapter2');
const chapter3 = document.getElementById('chapter3');
const chapter4 = document.getElementById('chapter4');
const chapter5 = document.getElementById('chapter5');


let form = document.querySelector('form');

function inputPerson() {
    const personData = {
        name: personName.value,
        age: personAge.value,
        class: personClass.value,
        teacher: teacher.value,
        due: dueDate.value,
        contents: tableOfContents.value,
        title: titleAssignment.value,
        bookTitle: bookTitle.value,
        author: bookAuthor.value,
        publication: bookPublication.value,
        intro: bookIntro.value,
        chapter1: chapter1.value,
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
    ${data.contents}
</p>
        <p>
            ${data.intro}
        </p>
    </article>
    <article class="book">
        <h2>${data.bookTitle}</h2>
        <h3>${data.author}</h3>
        <h2>Inleiding</h2>
        <p>
            ${data.chapter1}
        </p>
        <p>
            ${data.chapter2}
         </p>
         <p>
         ${data.chapter3}
         </p>
         <p>
         ${data.chapter4}
        </p>
         <p>
             ${data.chapter5}
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