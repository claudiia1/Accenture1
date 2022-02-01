sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../utils/Formatter",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter, JSONModel) {
        "use strict";

        return Controller.extend("accenture1.controller.View5", {

            Formatter: Formatter,


            onInit: function () {
                const oListSelection=new JSONModel();
                oListSelection.loadData("../model/materials.json");
                this.getView().setModel(oListSelection,"ListSelection");


            },
            onSelectedItem: function(oEvent){
                var oItem=oEvent.getParameter("MainMaterialsList");
                this.byId("MaterialsList").addItem(oItem);
            },
            onDeselectedItem: function(oEvent){
                var oItem=oEvent.getParameter("MaterialsList");
                var oList= this.byId("MainMaterialsList");
                oList.insertItem(oItem, 0);
                oList.removeSelections();
            }


   
        });
    });