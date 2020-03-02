// create html element
const createElement = (jsonData, selector) => {
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
const createDetail = (jsonData, selector) => {
    const className = `.${selector}`;
    const section = document.querySelector(className);
    
    const element = 
    `<article>
        <h2>${jsonData.title}</h2>
        <img src="${jsonData.thumbnail}">
    </article>`

    section.insertAdjacentHTML('afterbegin', element);
}

// render overview page
const allBooks = (data) => {
    createElement(data, 'books');
}

const book = (data) => {
    createDetail(data, 'books');
}

export {
    allBooks,
    book
}