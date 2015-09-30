define (
    ['jquery','underscore','backbone','Books', "BookView"],
    function($,_,Backbone, Books, BookView) {
        var app = app || {};
        app.BooksView = Backbone.View.extend({

            initialize: function () {
                this.render();
            },
            render: function () {
                this.collection.forEach(function(order) {
                    var bookView = new BookView({model: order});
                    $("#bookOrders"+order.get("OrderId")).append(bookView.render().el)
                }, this);
                return this;
            }


        });
        return app.BooksView;
    });

