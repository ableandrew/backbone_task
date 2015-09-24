define (
    ['jquery','underscore','backbone', 'Order'],
    function($, _ , Backbone, Order) {

        var app = app || {};
        app.OrderList = Backbone.Collection.extend({
            model: Order
        });

        return app.OrderList;
    });
