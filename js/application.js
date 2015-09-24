define (
    ['jquery','underscore',"backbone","Order", "OrderList", "OrderView", "OrdersView"],
    function( $, _, Backbone, Order, OrderList,OrderView, OrdersView) {

        (function(){

            var coll = new OrderList([
                {
                    id:"001",
                    orderId: "#0570",
                    date: "12.10.13",
                    state: "Canceled",
                    sprite:"spriteCanceledOrder",
                    name:"Cris",
                    mobile:"067 324-33-55",
                    delivery:"Yes",
                    payment:"cash",
                    order:[
                        {
                            book:"",
                            author:"",
                            price:"",
                            quantity:"",
                            image:""
                        },
                        {
                            book:"",
                            author:"",
                            price:"",
                            quantity:"",
                            image:""
                        }
                    ]
                },
                {
                    id:"002",
                    orderId: "#0571",
                    date: "15.10.13",
                    state:"Sent by courier",
                    sprite:"spriteOnDelivery",
                    name:"Mark",
                    mobile:"050 324-23-23",
                    delivery:"Yes",
                    payment:"cash",
                    order:[
                        {
                            book:"",
                            author:"",
                            price:"",
                            quantity:"",
                            image:""
                        }
                    ]
                },
                {
                    id:"003",
                    orderId: "#0572",
                    date: "22.10.13",
                    state:"Delivered",
                    sprite:"spriteDelivered",
                    name:"Rick",
                    mobile:"067 314-21-55",
                    delivery:"Yes",
                    payment:"cash",
                    order:[
                        {
                            book:"",
                            author:"",
                            price:"",
                            quantity:"",
                            image:""
                        }
                    ]
                },
                {
                    id:"004",
                    orderId: "#0573",
                    date: "30.10.13",
                    state:"Delivered",
                    sprite:"spriteDelivered",
                    name:"Frank",
                    mobile:"+063 314-21-55",
                    delivery:"Yes",
                    payment:"cash",
                    order:[
                        {
                            book:"",
                            author:"",
                            price:"",
                            quantity:"",
                            image:""
                        },
                        {
                            book:"",
                            author:"",
                            price:"",
                            quantity:"",
                            image:""
                        }
                    ]
                }

            ]);

           /* $.ajaxSetup({
                async: false
            });
            var data;


            var json;
            $.getJSON("http://localhost:63342/project%20backbone/json/orders.json",data, function(result) {
                json = result;
            });*/



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