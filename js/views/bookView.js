define (
    ['jquery','underscore','backbone', "handlebars", 'hbs!templates/bookview'],
    function($, _,Backbone, handlebars, bookTemplate) {

        var app = app || {};
        app.BookView = Backbone.View.extend({
            tagName: 'div',
            template: bookTemplate,

            initialize: function() {
            },

            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

        return app.BookView;

    });