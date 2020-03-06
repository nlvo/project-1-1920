import * as api from '../modules/api'
import * as form from '../modules/form'

const routes = () => {
    routie({
        '': function () {
            api.getAllBooks();
        },
        'werkstuk/:id': function (id) {
            api.getBook(id);
        },
        'werkstuk' : function(){
            // form.getPerson();
        }
    })
}

export {
    routes
};