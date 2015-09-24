define (
    ['jquery','underscore',"Order", "OrderList", "OrderView", "OrdersView"],
    function( $, _, Order, OrderList,OrderView, OrdersView) {

        (function(){

            var coll = new OrderList([
                {
                    id:"001",
                    orderId: "#0570",
                    date: "12.10.13",
                    state:"Canceled",
                    sprite:"spriteCanceledOrder",
                    name:"Cris",
                    mobile:"067 324-33-55",
                    delivery:"Yes",
                    payment:"cash",
                    order:{
                        book:"",
                        price:""
                    }
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
                    order:{
                        book:"",
                        price:""
                    }
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
                    order:{
                        book:"",
                        price:""
                    }
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
                    order:{
                        book:"",
                        price:""
                    }}

            ]);


           // coll.add([obj1,obj2,obj3,obj4]);

            //var objView = new OrderView({model: obj1});
            //var objView2 = new OrderView({model: obj2});
            //var objView3 = new OrderView({model: obj3});
           // var objView4 = new OrderView({model: obj4});

            //console.log(objView.el);
            //console.log(objView.$el);

          //  $("#order").append(objView.el).append(objView2.el).append(objView3.el).append(objView4.el);

            //console.log(objView);


            /*var orders = new OrdersView;

            console.log(orders);*/

            var orders1 =  new OrdersView({collection:coll});

            console.log(coll);

        })();
    });