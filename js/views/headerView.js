define (
    ['jquery','underscore','backbone',"handlebars", 'hbs!templates/header', 'OrderList', 'OrdersView', 'OrderView'],
    function($,_,Backbone, handlebars, headerTemplateHBS, OrderList, OrdersView, OrderView) {
        var app = app || {};
        app.HeaderView = Backbone.View.extend({
            template: headerTemplateHBS,
            el: '#wrapper',


            events: {
                'click #redStatus': "canceled",
                'click #greenStatus': "completed",
                'click #greyStatus': "current",
                'click #all': "all"
            },

            canceled: function(){
                    $("#orders").empty();
                    var coll = new OrderList();
                    coll.fetch();
                    var filter = coll.canceled();
                    var canceledOrderList = new OrderList(filter);
                    var orders2 =  new OrdersView({collection:canceledOrderList});
                    orders2.render();
                    this.listStyle("redStatus");
            },

            completed: function(){
                    $("#orders").empty();
                    var coll = new OrderList();
                    coll.fetch();
                    var filter = coll.completed();
                    var canceledOrderList = new OrderList(filter);
                    var orders2 =  new OrdersView({collection:canceledOrderList});
                    orders2.render();
                    this.listStyle("greenStatus");
            },

            current: function(){
                    $("#orders").empty();
                    var coll = new OrderList();
                    coll.fetch();
                    var filter = coll.current();
                    var canceledOrderList = new OrderList(filter);
                    var orders2 =  new OrdersView({collection:canceledOrderList});
                    orders2.render();
                    this.listStyle("greyStatus");
            },

            all: function(){
                    $("#orders").empty();
                    var coll = new OrderList();
                    coll.fetch();
                    var allOrders =  new OrdersView({collection:coll});
                    allOrders.render();
                    this.listStyle("all");
            },

            listStyle: function(idButton){
                $(".topMenuA").each(function(index, el) {
                    $(el).css({color: "rgb(74, 212, 255)", borderBottom: "1px dashed rgb(74, 212, 255)"} );
                });
                $("#" + idButton).children().css({color: "black", border: "0"});
            },

            initialize: function () {

            },

            render: function(){
                $("#wrapper").append(this.template());
            }

        });

        return app.HeaderView;
    });
