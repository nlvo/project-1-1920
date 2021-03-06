import * as data from '../modules/data';
import * as render from '../modules/render';

const cors = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = 'https://zoeken.oba.nl/api/v1/';
const query = 'bloemen';
const key = '1e19898c87464e239192c8bfe422f280';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const endpoint = `${cors}${baseUrl}search/?q=${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
	Authorization: `Bearer ${secret}`
};

// fetch data function
async function fetchData(url, config) {
    const response = await fetch(url, config);
    const jsonData = await response.json();
    // console.log(jsonData)
    const cleanData = data.clean(jsonData);
    return cleanData;
}

// Get data for the overview page and render
async function getAllBooks () {
    console.log('book')
    const books = await fetchData(endpoint, config);
    // console.log(books)
    render.allBooks(books);
}

// fetch data and find the correct books with id
async function findBook (id) {
    const booksEndpoint = `${cors}${baseUrl}details/?id=${id}&authorization=${key}&detaillevel=${detail}&p=jeugd&output=json`;
    const books = await fetchData(booksEndpoint, config);
    // const findData = books.find((data) => data.id == id);
    return books;
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

// Get data for the detail page and render
async function getBook (id) {
    const book = await findBook(id);
    render.book(book);
}

// Search for books
const button = document.querySelector('.search-button');

function searchInput () {
    var searchValue = document.querySelector('input').value;
    return searchValue;
}

async function searchResults () {
    const query = searchInput();
    const searchBooksEndpoint = `${cors}${baseUrl}search/?q=${query}&authorization=${key}&detaillevel=${detail}&output=json`;
    const searchResults = await fetchData(searchBooksEndpoint, config);
    return searchResults;
}

async function getSearchResults(){
    const results = await searchResults();
    render.allBooks(results);
}

button.addEventListener('click', getSearchResults);

const search = document.querySelector('#search-input')
search.addEventListener('keyup', event => {
    if(event.keyCode === 13){
        event.preventDefault()
        button.click()
    }
})

export {
    getAllBooks,
    getBook,
    findBook
}