
requirejs.config({
    paths: {
        jquery: '../lib/vendor/jquery/dist/jquery',
        underscore: '../lib/vendor/underscore/underscore',
        backbone: '../lib/vendor/backbone/backbone',
        handlebars: "../lib/vendor/require-handlebars-plugin/hbs/handlebars.runtime",
        hbs: '../lib/vendor/require-handlebars-plugin/hbs',
        Order: 'models/order',
        OrderList: "collection/orders",
        OrderView: "views/orderView",
        OrdersView: "views/ordersView",
        application: "application",
        Book: 'models/book',
        Books: 'collection/books',
        BookView: "views/bookView",
        BooksView: "views/booksView"

    }

});

require(
    ['jquery','underscore', "backbone", "application" ],
    function( $, _,Backbone, application){


    }
);
