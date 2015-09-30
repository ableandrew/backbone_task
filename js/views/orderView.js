define (
    ['jquery','underscore','backbone', "handlebars", 'hbs!templates/orderview'],
    function($, _,Backbone,handlebars, orderTemplateHBS) {

        var app = app || {};
        app.OrderView = Backbone.View.extend({
            tagName: 'li',
            template: orderTemplateHBS,

            events: {
                'click #acc1': "acc1",
                'click #acc2': "acc2",
                'click #acc3': "acc3",
                'click #acc4': "acc4"

            },

            acc1: function(){
                var obj = $("#1");
                if (obj.css("display")=="none"){
                    obj.css("display","");
                }
                else{
                    obj.css("display","none");
                }
            },
            acc2: function(){
                var obj = $("#2");
                if (obj.css("display")=="none"){
                    obj.css("display","");
                }
                else{
                    obj.css("display","none");
                }
            },
            acc3: function(){
                var obj = $("#3");
                if (obj.css("display")=="none"){
                    obj.css("display","");
                }
                else{
                    obj.css("display","none");
                }
            },
            acc4: function(){
                var obj = $("#4");
                if (obj.css("display")=="none"){
                    obj.css("display","");
                }
                else{
                    obj.css("display","none");
                }
            },


            initialize: function() {

            },

            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

        return app.OrderView;

    });

