sap.ui.define([

], function(){
    "use-strict";

    var Validator = {
        isNotEmpty: function (value){
            return !!value;
        }
        
    }
    return Validator;
}, true);