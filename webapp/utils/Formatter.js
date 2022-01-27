sap.ui.define([

], function(){
    "use-strict";

    var Formatter = {
        formatPopulation: function (fPopulation){
            if(!fPopulation) return;
            return fPopulation * 100000;
        }
    }
    return Formatter;
}, true);