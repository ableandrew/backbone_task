define (
    ['jquery','underscore','backbone', 'text!templates/bookview.html'],
    function($, _,Backbone, bookTemplate) {

        var app = app || {};
        app.BookView = Backbone.View.extend({
            tagName: 'div',
            template: _.template(bookTemplate),

            initialize: function() {
            },

            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

        return app.BookView;

    });