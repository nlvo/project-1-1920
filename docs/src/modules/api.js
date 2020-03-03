import * as data from '../modules/data';
import * as render from '../modules/render';

const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'bloemen';
const key = '1e19898c87464e239192c8bfe422f280';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const booksEndpoint = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
	Authorization: `Bearer ${secret}`
};

// fetch data function
async function fetchData(url, config) {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData)
    const cleanData = data.clean(jsonData);
    return cleanData;
}

// Get data for the overview page and render
async function getAllBooks () {
    const books = await fetchData(booksEndpoint, config);
    render.allBooks(books);
}

// fetch data and find the correct books with id
async function findBook (id) {
    const books = await fetchData(booksEndpoint, config);
    const findData = books.find((data) => data.id == id);
    return findData;
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

// Get data for the detail page and render
async function getBook (id) {
    const book = await findBook(id);
    render.book(book);
}

// Search for books
const button = document.querySelector('button');

function search () {
    var searchValue = document.querySelector('input').value;
    return searchValue;
}

async function searchName () {

    const query = search();
    const newBooksEndpoint = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
    // console.log(newBooksEndpoint)

    const searchResults = await fetchData(newBooksEndpoint, config);
    clearData();
    render.allBooks(searchResults);
}

function clearData() {
    const section = document.querySelector('section');
    while (section.firstChild) {
        section.removeChild(section.firstChild)
    }
    // https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
}

button.addEventListener('click', searchName);

export {
    getAllBooks,
    getBook
}