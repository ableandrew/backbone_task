define (
    ['jquery','underscore','backbone', "handlebars", 'hbs!templates/orderview'],
    function($, _,Backbone,handlebars, orderTemplateHBS) {

        var app = app || {};
        app.OrderView = Backbone.View.extend({
            tagName: 'div',
            template: orderTemplateHBS,  //$('#item-template').html()

            events: {
                "click #redStatus": "canceled",
                "click #greenStatus": "completed",
                "click #greyStatus": "current",
                "click #all": "all"
            },

            initialize: function() {
            },

            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

        return app.OrderView;

    });

