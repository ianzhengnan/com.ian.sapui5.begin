sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel){
	"use strict";

	return UIComponent.extend("com.ian.sapui5.begin.Component", {

		metadata: {
			rootView: "com.ian.sapui5.begin.view.App"
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

			//set i18n model
			var i18nModel = new ResourceModel({
				bundleName: "com.ian.sapui5.begin.i18n.i18n"
			});

			this.setModel(i18nModel, "i18n");
		}
	});

});