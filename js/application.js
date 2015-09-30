define (
    ['jquery','underscore',"backbone","Order", "OrderList", "OrderView", "OrdersView", "Book", "Books", "BookView", 'BooksView'],
    function( $, _, Backbone, Order, OrderList,OrderView, OrdersView, Book, Books, BookView, BooksView ) {


        (function(){





            $.ajaxSetup({async: false});
            var data;
            var orders;




            /*$.getJSON("http://localhost:63342/project%20backbone/json/orders.json",data, function(result) {
                orders = result;
            });

            $.getJSON("http://localhost:63342/project%20backbone/json/books.json",data, function(result) {
                books = result;
            });*/


            function doAjax(){
                return $.getJSON("https://api.myjson.com/bins/1cb96",data, function(result) {
                    orders = result;
                });
            }

            function doMoreAjax(){
                return $.getJSON("https://api.myjson.com/bins/36r8a",data, function(result) {
                    books = result;
                });
            }

            $.when( doAjax(), doMoreAjax() )
                .then(function(){
                    console.log( 'I fire once BOTH ajax requests have completed!' );
                    var coll1 = new Books(books);

                })
                .fail(function(){
                    console.log( 'I fire if one or more requests failed.' );
                });





            var header =  new OrdersView();
            header.reRender();

            var coll = new OrderList(orders);
            var allOrders =  new OrdersView({collection:coll});
            allOrders.render();




            //var coll1 = new Books(books);


          /*  function listStyle (idButton){
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
                allOrders.render();
                listStyle("all");
            });

            $("#redStatus").on("click", function(){
             $("#orders").empty();
             var filter = coll.canceled();
             var canceledOrderList = new OrderList(filter);
             var orders2 =  new OrdersView({collection:canceledOrderList});
                orders2.render();
             listStyle("redStatus");
             });

            $("#greenStatus").on("click", function(){
                $("#orders").empty();
                var filter = coll.completed();
                var deliveredOrderList = new OrderList(filter);
                var orders2 =  new OrdersView({collection:deliveredOrderList});
                orders2.render();
                listStyle("greenStatus");
            });

            $("#greyStatus").on("click", function(){
                $("#orders").empty();
                var filter = coll.current();
                var currentOrderList = new OrderList(filter);
                var orders2 =  new OrdersView({collection:currentOrderList});
                orders2.render();
                listStyle("greyStatus");
            });*/







        })();
    });