
requirejs.config({
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/underscore/underscore',
        backbone: '../node_modules/backbone/backbone',
        Order: 'models/order',
        OrderList: "collection/orders",
        OrderView: "views/orderView",
        OrdersView: "views/ordersView",
        application: "application",
        Book: 'models/book',
        Books: 'collection/books',
        BookView: "views/bookView"

    }
});

require(
    ['jquery','underscore', "backbone", "application" ],
    function( $, _,Backbone, application){


    }
);
