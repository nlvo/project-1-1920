import * as api from '../modules/api'
import * as form from '../modules/form'

const routes = () => {
    routie({
        'books': function () {
            console.log('booo')
            api.getAllBooks();
        },
        'books/:id': function (id) {
            console.log(id)
            api.getBook(id);
        },
        'werkstuk' : function(){
            // form.getPerson();
            console.log('hi')
        }
    })
}

export {
    routes
};