sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel){
	"use strict";

	return Controller.extend("com.ian.sapui5.begin.controller.App", {

		onOpenDialog: function(){

			this.getOwnerComponent().helloDialog.open(this.getView());
		}
	});
});