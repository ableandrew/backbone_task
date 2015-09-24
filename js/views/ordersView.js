define (
    ['jquery','underscore','backbone','OrderList', "OrderView"],
    function($,_,Backbone, OrderList, OrderView) {
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
                }, this);
                return this;
            }

        });

        return app.OrdersView;
    });

