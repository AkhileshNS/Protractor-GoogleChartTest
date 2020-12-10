var utils = require('../utils/commonUtils');

var ColumnChart = function() {
	const LOCATORS = {
		XaxisValues: by.xpath("//*[name()='text'][@text-anchor='middle']"),
		YaxisValues: by.xpath("//*[name()='text'][@text-anchor='end']"),
		Sales: by.xpath("//*[name()='svg'][@aria-label='A chart.']//*[name()='rect'][@fill='#3366cc']"),
		Expenses: by.xpath("//*[name()='svg'][@aria-label='A chart.']//*[name()='rect'][@fill='#dc3912']"),
		ToolTip: by.xpath("//*[name()='svg'][@aria-label='A chart.']/*[name()='g'][last()] ")
	};
   this.getFirstExpense = function() {
	utils.waitAndClick(LOCATORS.Expenses);	
	let firstExp = 	element(LOCATORS.ToolTip);
	let text = firstExp.getWebElement().getText();
	console.log(text);
	return text;
   }
  	  
   this.getFirstSales = function() {
	utils.waitAndClick(LOCATORS.Sales);	
	let firstSales = 	element(LOCATORS.ToolTip);
	let text = firstSales.getWebElement().getText();
	console.log(text);
	return text;
   }

};
module.exports = new ColumnChart();
