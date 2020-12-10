import { element, by, browser } from 'protractor';

const ChartFrameNTitle = function() {
	const LOCATORS = {
		Iframe: by.tagName('iframe'),
		Title: by.css('#chart_title')
	};
 
  this.switchToIframe = function() {
	  let iframeElement = element(LOCATORS.Iframe).getWebElement();
    browser.switchTo().frame(iframeElement);  
  } 	  

  this.getTitleText = function() {
    return element(LOCATORS.Title).getText();
  };
};

export default new ChartFrameNTitle();
