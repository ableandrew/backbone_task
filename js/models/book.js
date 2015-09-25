define (
    ['jquery','underscore','backbone'],
    function($, _, Backbone) {

        var app = app || {};
        app.Book = Backbone.Model.extend({
            defaults: {
                "id":""
                //"bookInOrder":""
            }


        });

        return app.Book;

    });