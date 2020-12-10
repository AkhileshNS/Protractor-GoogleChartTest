var commonUtils = function() {
	this.waitAndClick = function(locator) {

		var EC = protractor.ExpectedConditions;	
		let expectedElement = element(locator);
		browser.wait(EC.presenceOf(expectedElement), 15000);
		expectedElement.click();
	};
};
module.exports = new commonUtils();
