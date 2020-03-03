// create html element
function createElement (jsonData, selector) {
    for (const item of jsonData) {
        const className = `.${selector}`;
        const section = document.querySelector(className);
        section.insertAdjacentHTML('beforeend',
            `<article>
                <img src="${item.thumbnail}">
                <a href="#${item.id}"><h2>${item.title}</h2></a>
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
    const section = document.querySelector('section');
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
    createDetail(data, 'books');
}

export {
    allBooks,
    book
}