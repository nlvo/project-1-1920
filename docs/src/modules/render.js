// create html element
function createElement (jsonData, selector) {
    for (const item of jsonData) {
        const className = `.${selector}`;
        const section = document.querySelector(className);
        section.insertAdjacentHTML('beforeend',
            `<article>
                <img src="${item.thumbnail}">
                <div>
                    <h2>${item.title}</h2>
                    <p>${item.summaries}</p>
                    <a class="btn-add link werkstuk" href="#werkstuk">+ bronnenlijst</a>
                </div>
            </article>`);
    }
}

// create detail html element with classname
function createDetail (jsonData, selector) {
    const className = `.${selector}`;
    const section = document.querySelector(className);
    
    const element = 
    `<article>
        <h2>${jsonData.title}</h2>
        <img src="${jsonData.thumbnail}">
    </article>`

    section.insertAdjacentHTML('afterbegin', element);
}

//clean up existing child elements
function clearElement() {
    const section = document.querySelector('.books');
    while (section.firstChild) {
        section.removeChild(section.firstChild)
    }
    // https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
}

// render overview page
function allBooks (data) {
    clearElement();
    createElement(data, 'books');
}

function book (data) {
    clearElement();
    createDetail(data, 'books');
}

// active page

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
// const pages = document.querySelectorAll('.page');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        const current = document.getElementsByClassName('active');
    
        // If there's an active class
        if (current.length > 0) {
            current[0].classList.remove('active');
        }
        
        pageId(this.classList);
        console.log('blahh')
        console.log(this)
        // Add the active class to the current/clicked link
        this.classList.add('active');
    });
    // https://www.w3schools.com/howto/howto_js_active_element.asp
}  

function pageId(classname) {
    const pages = document.querySelectorAll('.page');
    
    for (let i = 0; i < pages.length; i++) {
        
        const currentPage = document.getElementsByClassName('page--active');
        
        if (classname.contains(pages[i].id)) {
            if (currentPage.length > 0) {
                currentPage[0].classList.remove('page--active');
            }
            pages[i].classList.add('page--active');
        }
    }
}


export {
    allBooks,
    book
}