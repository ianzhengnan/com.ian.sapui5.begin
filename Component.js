sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"com/ian/sapui5/begin/util/HelloDialog",
	"sap/ui/model/odata/v2/ODataModel"
], function(UIComponent, JSONModel, HelloDialog, ODataModel){
	"use strict";

	return UIComponent.extend("com.ian.sapui5.begin.Component", {

		metadata: {
			manifest: "json"
		},

		init: function(){
			//call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			//set data model
			var oData = {
				recipient: {
					name: "World"
				}
			};

			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			//disable batch grouping for v2 API of the northwind service
			this.getModel("invoice").setUseBatch(false);

			//set dialog
			this.helloDialog = new HelloDialog();
		}
	});

});