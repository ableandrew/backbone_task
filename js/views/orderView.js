define (
    ['jquery','underscore','backbone', 'text!templates/orderview.html'],
    function($, _,Backbone, orderTemplate) {

        var app = app || {};
        app.OrderView = Backbone.View.extend({
            tagName: 'div',
            template: _.template(orderTemplate),  //$('#item-template').html()

            initialize: function() {
            },

            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                 return this;
            }
        });

        return app.OrderView;

    });

