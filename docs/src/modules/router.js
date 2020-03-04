import * as api from '../modules/api'
import * as form from '../modules/form'

const routes = () => {
    routie({
        '': function () {
            api.getAllBooks();
        },
        '/:id': function (id) {
            console.log(id)
            api.getBook(id);
        },
        'werkstuk' : function(){
            form.setPerson();
            console.log('hi')
        },
        'presentatie' : function() {
            
            console.log('presentatie')
        }
    })
}

export {
    routes
};