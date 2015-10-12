sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"com/ian/sapui5/begin/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, formatter, Filter, FilterOperator){
	"use strict";

	var invoiceListController = Controller.extend("com.ian.sapui5.begin.controller.InvoiceList", {

		formatter: formatter,

		onInit: function(){

			var oViewModel = new JSONModel({
				currency: "EUR"
			});

			this.getView().setModel(oViewModel, "view");
		},

		onFilterInvoices: function(oEvent){

			var aFilters = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilters.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			//filter binding
			var oList = this.getView().byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters);
		},

		onPress: function(oEvent){

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail");
		}
	});

	return invoiceListController;
});