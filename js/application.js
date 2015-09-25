define (
    ['jquery','underscore',"backbone","Order", "OrderList", "OrderView", "OrdersView", "Book", "Books", "BookView"],
    function( $, _, Backbone, Order, OrderList,OrderView, OrdersView, Book, Books, BookView ) {

        (function(){

            $.ajaxSetup({async: false});
            var data;
            var orders;
            var books;
            $.getJSON("http://localhost:63342/project%20backbone/json/orders.json",data, function(result) {
                orders = result;
            });
            $.getJSON("http://localhost:63342/project%20backbone/json/books.json",data, function(result) {
                books = result;
            });


           /* var obj = new Book({"id":"2","bookInOrder":"3"});
            console.log(obj);
            var view = new BookView({model:"obj"});
            console.log(view.el);
            console.log(view.$el);
           // $("body").append(view.$el);

            var obj1 = new Order({id:"21", orderId: "231", date: "141", state:"123",sprite:"235", name:"345", mobile:"245", delivery:"2345", payment:"2345"});
            console.log(obj1);
            var view1 = new OrderView({model:"obj1"});
            console.log(view1.el);
            console.log(view1.$el);
           // $("body").append(view.$el);*/





            var coll = new OrderList(orders);
            var allOrders =  new OrdersView({collection:coll});





            function listStyle (idButton){
                $(".topMenuA").each(function(index, el) {
                    $(el).css({color: "rgb(74, 212, 255)", borderBottom: "1px dashed rgb(74, 212, 255)"} );
                });
                $("#" + idButton).children().css({color: "black", border: "0"});
            }


            $("#all").on("click", function(){
                $("#orders").empty();
                var filter = coll.all();
                var list = new OrderList(filter);
                var allOrders =  new OrdersView({collection:list});
                listStyle("all");
            });
            $("#redStatus").on("click", function(){
                $("#orders").empty();
                var filter = coll.canceled();
                var canceledOrderList = new OrderList(filter);
                var orders2 =  new OrdersView({collection:canceledOrderList});
                listStyle("redStatus");

            });
            $("#greenStatus").on("click", function(){
                $("#orders").empty();
                var filter = coll.completed();
                var deliveredOrderList = new OrderList(filter);
                var orders2 =  new OrdersView({collection:deliveredOrderList});
                listStyle("greenStatus");
            });
            $("#greyStatus").on("click", function(){
                $("#orders").empty();
                var filter = coll.current();
                var currentOrderList = new OrderList(filter);
                var orders2 =  new OrdersView({collection:currentOrderList});
                listStyle("greyStatus");
            });








        })();
    });