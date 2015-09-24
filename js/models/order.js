define (
    ['jquery','underscore','backbone'],
    function($, _, Backbone) {

        var app = app || {};
        app.Order = Backbone.Model.extend({
            defaults: {
                id:"",
                orderId: "",
                date: "",
                state:"",
                sprite:"",
                name:"",
                mobile:"",
                delivery:"",
                payment:"",
                order:{
                    book:"",
                    author:"",
                    price:"",
                    quantity:"",
                    image:""
                }
            }


        });

        return app.Order;

    });