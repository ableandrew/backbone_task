define (
    ['jquery','underscore','backbone','Books', "BookView"],
    function($,_,Backbone, Books, BookView) {
        var app = app || {};
        app.BooksView = Backbone.View.extend({
            el: '#bookOrders',


            initialize: function () {
                this.render();
            },

            render: function () {
                this.collection.each(function(order) {
                    var bookView = new BookView({model: order});
                    this.$el.append(bookView.render().el);
                }, this);
                return this;
            }

        });

        return app.BooksView;
    });

