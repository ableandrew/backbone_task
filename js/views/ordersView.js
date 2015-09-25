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

                   // console.log(books);
                    var allCollection = new Books(books);
                   // console.log(allCollection);

                    var serializedCollection = allCollection.toJSON();
                    var filter = _.where(serializedCollection, {OrderId: order.get("id")});
                    //console.log(filter);


                    /*var filter2 = allCollection.filter(function(book){
                        return book.get("OrderId") == order.get("id");
                    });*/
                    //console.log(filter2);


                    var newCollection = new Books(filter);
                    //console.log(newCollection);
                    var idCollection =  new BooksView({collection:newCollection});


                }, this);
                return this;
            },

            booksfilt: function(id){

            }

        });

        return app.OrdersView;
    });

