import * as api from '../modules/api'

const routes = () => {
    routie({
        '': function () {
            api.getAllBooks();
        },
        ':id': function (id) {
            console.log(id)
            api.getBook(id);
        }
    })
}

export {
    routes
};