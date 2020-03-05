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
        title: titleAssignment.value,
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
    <section class="pa2per">
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

const next = document.querySelector('.next');
const prev = document.querySelector('.previous');

function prevPage() {
    const fieldsets = document.querySelectorAll('fieldset');
    const fieldset = document.querySelector('.show');
    if (fieldset.classList.contains('show')) {
        for (let i = 0; i < fieldsets.length; i++) {
            fieldsets[i].classList.toggle('show');
        }
        fieldset.nextElementSibling.classList.add('show');
    }
}

next.addEventListener('click', prevPage);
prev.addEventListener('click', prevPage);


const links = document.querySelectorAll('.link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        const current = document.getElementsByClassName('active');
        const currentPage = document.getElementsByClassName('active');
    
        // If there's no active class
        if (current.length > 0) {
            current[0].classList.remove('active');
        }
    
        // Add the active class to the current/clicked button
        this.classList.add('active');
    });
}  


// https://www.w3schools.com/howto/howto_js_active_element.asp
// link2.addEventListener('click', active);

export {
    createAssignment
}