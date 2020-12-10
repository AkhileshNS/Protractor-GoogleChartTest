import {protractor, element, browser} from 'protractor';

const commonUtils = () => ({
	waitAndClick(locator) {
		let EC = protractor.ExpectedConditions;	
		let expectedElement = element(locator);
		browser.wait(EC.presenceOf(expectedElement), 15000);
		expectedElement.click();
	}
});

export default commonUtils();
