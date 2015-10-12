sap.ui.define([
	"sap/ui/test/opaQunit"
], function(){
	"use strict";

	QUnit.module("Navigation");
	opaTest("Should open the hello dialog", function(Given, When, Then){
		// Arrangements
		Given.iStartMyAppInAFrame(jQuery.sap.getResourcePath("com/ian/sapui5/begin/test", ".html"));
		// Action
		When.onTheAppPage.iPressTheSayHelloWithDialogButton();
		// Assertions
		Then.onTheAppPage.iShouldSeeTheHelloDialog().and.iTeardownMyAppFrame();
	});
});