define (
    ['jquery','underscore','backbone', 'Order'],
    function($, _ , Backbone, Order) {

        var app = app || {};
        app.OrderList = Backbone.Collection.extend({
            model: Order,

            canceled: function(){
                return this.filter(function(cancel){
                    return cancel.get('state')==="Canceled";
                })
            },

            completed: function(){
                return this.filter(function(done){
                    return done.get('state')==="Delivered";
                })
            },

            current:function(){
                return this.filter(function(current){
                    return current.get('state')==="Sent by courier";
                })
            },

            all:function(){
                return this.filter(function(){
                    return true;
                })
            }

        });

        return app.OrderList;
    });
