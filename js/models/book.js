define (
    ['jquery','underscore','backbone'],
    function($, _, Backbone) {

        var app = app || {};
        app.Book = Backbone.Model.extend({
            defaults: {
                //"bookInOrder":""
            }


        });

        return app.Book;

    });