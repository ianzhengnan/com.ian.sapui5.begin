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

			//set invoice model - local (2 methods to get the content of manifest.json)
			var oConfig = this.getMetadata().getConfig();
			// var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
			// var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal));
			var oInvoiceModel = new ODataModel(oConfig.invoiceRemote);
			oInvoiceModel.setUseBatch(false);
			this.setModel(oInvoiceModel, "invoice");

			//set dialog
			this.helloDialog = new HelloDialog();
		}
	});

});