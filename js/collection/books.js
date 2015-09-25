define (
    ['jquery','underscore','backbone', 'Book'],
    function($, _ , Backbone, Book) {

        var app = app || {};
        app.Books = Backbone.Collection.extend({
            model: Book


        });

        return app.Books;
    });

