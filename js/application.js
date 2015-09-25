define (
    ['jquery','underscore',"backbone","Order", "OrderList", "OrderView", "OrdersView", "Book", "Books", "BookView", 'BooksView'],
    function( $, _, Backbone, Order, OrderList,OrderView, OrdersView, Book, Books, BookView, BooksView ) {

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



            var coll = new OrderList(orders);
            var allOrders =  new OrdersView({collection:coll});



            var coll1 = new Books(books);
            var allBooks =  new BooksView({collection:coll1});



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