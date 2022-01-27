sap.ui.define([

], function(){
    "use-strict";

    var Common = {
        navigateTo: function(oScope, sDestination){
            var oRouter = oScope.getOwnerComponent().getRouter();
            oRouter.navTo(sDestination);
            
        },

        openDialogFromFragment: function(oScope, sId, sFragmentRoute, onEndButtonPress, onBeginButtonPress){
            if( !oScope._dialog ) {
                oScope._dialog = sap.ui.xmlfragment(sId, sFragmentRoute, oScope);
                oScope.getView().addDependent(oScope._dialog);
                
            }
            if( oScope._dialog.getEndButton() ) {
                oScope._dialog.getEndButton().attachPress(onEndButtonPress || function(){
                    if(oScope._dialog)
                        oScope._dialog.close();
                });
            }   
            if( oScope._dialog.getBeginButton() ) {
                oScope._dialog.getBeginButton().attachPress(onBeginButtonPress || function(){
                    if(oScope._dialog)
                       oScope._dialog.close();
                });    
               
                
            }
            oScope._dialog.attachAfterClose(function(){
                oScope._dialog.destroy();
                delete oScope._dialog;
            });
            oScope._dialog.open();
            
        }
        
    }

    return Common;

}, true);