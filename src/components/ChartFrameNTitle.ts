import { element, by, browser } from 'protractor';

const ChartFrameNTitle = function() {
	const LOCATORS = {
		Iframe: by.tagName('iframe'),
		Title: by.css('#chart_title')
	};
 
  return {
    switchToIframe() {
	    let iframeElement = element(LOCATORS.Iframe).getWebElement();
      browser.switchTo().frame(iframeElement);  
    }, 	  

    getTitleText() {
      return element(LOCATORS.Title).getText();
    }
  }
};

export default ChartFrameNTitle();
