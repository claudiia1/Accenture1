sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../utils/Validator",
    "../utils/Common"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Validator, Common) {
        "use strict";

        return Controller.extend("accenture1.project1.controller.View1", {
            onInit: function () {
                const oCitiesModel = new JSONModel();
                oCitiesModel.loadData("../model/cities.json");
                this.getView().setModel(oCitiesModel, "CitiesModel"); 
            },
            
            

            onSayHello: function(oEvent){
                //     MessageToast.show("Funciona!", {
                //         duration: 3000,
                //     });

                /*if(!Validator.isNotEmpty(this.getView().byId("city-combobox").getSelectedKey())){
                    sap.m.MessageToast.show("Select a City", {
                        duration: 3000,
                    });
                    return;
                }*/
                
                if (!Validator.isNotEmpty(this.getView().byId("city-combobox").getSelectedKey())){

                    sap.m.MessageToast.show("Select a City", {
                        duration: 3000,
                    });
                    return;
                }

                Common.openDialogFromFragment(this, "idSayHelloDialog", "accenture1.project1.fragment.sayHelloDialog");
                
                
            },

            onClose: function () {
                if ( this._dialogSayHello ) {
                    this._dialogSayHello.close()
                }
            },

            onNavigateToView2: function(){
                Common.navigateTo(this, "RouteView2");
               
            },

            onNavigateToView3: function(){
                Common.navigateTo(this, "RouteView3");
                
            },
            
            onNavigateToView5: function(){
                Common.navigateTo(this, "RouteView5");
                
            },

            onLanguageSpanish: function(){
                sap.ui.getCore().getConfiguration().setLanguage("es_ES");
            },
            onLanguageEnglish: function(){
                sap.ui.getCore().getConfiguration().setLanguage("en_EN");
            }

            
        });
    });
