import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
            id: 'aaa',
            title: 'aaa',
            url: 'http://gifs.joelglovier.com/thinking/athlete-thinking.gif'
        }, {
            id: 'bbb',
            title: 'bbb',
            url: 'http://gifs.joelglovier.com/thumbs-up/thumbs-up-redhead.gif'
        }, {
            id: 'ccc',
            title: 'ccc',
            url: 'http://gifs.joelglovier.com/done/hand-wipe.gif'
        }, {
            id: 'ddd',
            title: 'ddd',
            url: 'http://gifs.joelglovier.com/knockout/lindsay-lohan-knockout.gif'
        }, {
            id: 'eee',
            title: 'eee',
            url: 'http://gifs.joelglovier.com/excited/aha.gif'
        }];
    }
});
