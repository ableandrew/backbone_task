define (
    ['jquery','underscore','backbone'],
    function($, _, Backbone) {

        var app = app || {};
        app.Order = Backbone.Model.extend({
            defaults: {
                id:'',
                orderId: '',
                date: '',
                state: '',
                sprite: ''
            },

            getId: function(){
                return this.get("id");
            }

        });

        return app.Order;

    });