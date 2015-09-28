define (
    ['jquery','underscore','backbone','OrderList', "OrderView",'Books', "BooksView"],
    function($,_,Backbone, OrderList, OrderView,Books,BooksView) {
        var app = app || {};
        app.OrdersView = Backbone.View.extend({
            el: '#orders',


            initialize: function () {
                this.render();
            },

            render: function () {
                this.collection.each(function(order) {
                    var orderView = new OrderView({model: order});


                    this.$el.append(orderView.render().el);


                    var allCollection = new Books(books);
                    var serializedCollection = allCollection.toJSON();
                    var filter = _.where(serializedCollection, {OrderId: order.get("id")});
                    var newCollection = new Books(filter);
                    var idCollection =  new BooksView({collection:newCollection});


                }, this);
                return this;
            },

            booksfilt: function(id){

            }

        });

        return app.OrdersView;
    });

