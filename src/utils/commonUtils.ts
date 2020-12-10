import {protractor, element, browser} from 'protractor';

const commonUtils = () => ({
	waitAndClick(locator) {
		var EC = protractor.ExpectedConditions;	
		let expectedElement = element(locator);
		browser.wait(EC.presenceOf(expectedElement), 15000);
		expectedElement.click();
	}
});

export default commonUtils();
