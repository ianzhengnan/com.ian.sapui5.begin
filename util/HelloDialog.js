sap.ui.define([
	"sap/ui/base/Object"
], function(Object){
	"use strict";

	return Object.extend("com.ian.sapui5.begin.util.HelloDialog", {

		_getDialog: function(){

			//create dialog lazily
			if (!this._oDialog) {
				//create dialog via fragment factory
				this._oDialog = sap.ui.xmlfragment("com.ian.sapui5.begin.fragment.HelloDialog", this);
			}
			return this._oDialog;
		},

		open: function(oView){

			var oDialog = this._getDialog();
			//connect dialog to view 
			oView.addDependent(oDialog);
			//open dialog
			oDialog.open();
		},

		onCloseDialog: function(){

			this._getDialog().close();
		}

	});
});