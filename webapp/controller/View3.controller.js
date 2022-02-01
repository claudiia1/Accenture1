sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../utils/Formatter",
    "../utils/Common",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator, Formatter, Common) {
        "use strict";

        return Controller.extend("accenture1.project1.controller.View3", {

            Formatter: Formatter,

            onInit: function () {

                //const oCitiesModel = new JSONModel();
                //oCitiesModel.loadData("../model/cities.json");
                //this.getView().setModel(oCitiesModel, "CitiesModel")
                
            },

            onPress:function(oEvent){
                //var oToolsModel = this.getOwnerComponent().getModel("ToolsModel");
                //var row = oEvent.getSource().getCells();
                //console.log(this.getOwnerComponent());
                //oToolsModel.setProperty("/cityName",  row[0].getText());
                //Common.openDialogFromFragment(this, "idSayHelloDialog", "accenture1.project1.fragment.sayHelloDialog");
                
                //this.getView().byId("products-table").setBusy(true);
                const oToolsModel = this.getOwnerComponent().getModel(Constants.model.TOOLS_MODEL);
                console.log(oEvent.getSource().getBindingContext().sPath);
                

                var oModelNorthWind = this.getOwnerComponent().getModel();
                ///console.log();

                oModelNorthWind.read(oEvent.getSource().getBindingContext().sPath, {
                    urlParameters:{
                        "$expand": "Category, Order_Details, Supplier"
                    },
                    success: function (oData){
                        console.log(oData);
                        sap.ui.getCore().setModel(new JSONModel(oData), "DetailModel");
                        var oRouter = this.getOwnerComponent().getRouter();
                        //oRouter.navTo("RouteView4");
                        Common.navigateTo(this, "RouteView4");
                    }.bind(this)
                });
   
               
            },
            onChange: function(oEvent){
                const sSelkey = oEvent.getParameter("selectedItem").getKey();
                const oFilter  = new Filter({
                    path: "CategoryID",
                    operator: FilterOperator.EQ,
                    value1: sSelkey,
                });
                const oTable=this.byId("tableId");
                oTable.getBinding("items").filter(oFilter);

            },

            applyFilter: function(){
                const oSelectedItem = this.byId("CategoryID-combobox").getSelectedItem();
                if(!oSelectedItem){
                    return;
                }
                const sSelectedKey = oSelectedItem.getKey();
               
                const oFilter = new Filter({
                    path: "CategoryID",
                    operator: FilterOperator.EQ,
                    value1: sSelectedKey,
                });
                const oTable=this.byId("tableId");
                //bindeo conexion entre tabla y los resultadods
                oTable.getBinding("items").filter(oFilter);

            }

        });

    });
