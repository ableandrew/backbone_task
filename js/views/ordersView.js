define (
    ['jquery','underscore','backbone','OrderList', "OrderView",'Books', "BooksView", "application","handlebars", 'hbs!templates/header'],
    function($,_,Backbone, OrderList, OrderView,Books,BooksView, application, handlebars, headerTemplateHBS) {
        var app = app || {};
        app.OrdersView = Backbone.View.extend({
            template: headerTemplateHBS,
            el: '#orders',


            initialize: function () {

            },

            render: function () {
                this.collection.each(function(order) {
                    var orderView = new OrderView({model: order});
                    this.$el.append(orderView.render().el);
                    var allCollection = new Books();
                    allCollection.fetch();
                    var serializedCollection = allCollection.toJSON();
                    var filter = _.where(serializedCollection, {OrderId: order.get("id")});
                    var newCollection = new Books(filter);
                    var idCollection =  new BooksView({collection:newCollection});
                }, this);
                return this;
            }



        });

        return app.OrdersView;
    });

