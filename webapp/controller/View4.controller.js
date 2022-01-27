sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../utils/Formatter",
    "../utils/Common"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Formatter, Common) {
        "use strict";

        return Controller.extend("accenture1.project1.controller.View4", {

            Formatter: Formatter,

            onInit: function () {

                this.getOwnerComponent().getRouter().getRoute("RouteView4").attachPatternMatched(function (){
                    console.log(sap.ui.getCore().getModel("DetailModel").getData());
                    const oDetailModel = sap.ui.getCore().getModel("DetailModel");
                    this.getView().setModel(oDetailModel, "DetailModel");
                }, this);

            },

            
            onPressImage : function(oEvent) {

                Common.openDialogFromFragment(this, "idSayHelloDialog", "accenture1.project1.fragment.imageDialog");
                
                        
                
            }
   
        });
    });