sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel){
	"use strict";

	return Controller.extend("com.ian.sapui5.begin.controller.App", {

		onInit: function(){
			
		},

		onShowHello: function(){

			//read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// Show message
			MessageToast.show(sMsg);
		}

	});
});