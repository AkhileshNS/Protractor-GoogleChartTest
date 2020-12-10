var utils = require('../utils/commonUtils');

var ChartIcons = function() {
	const LOCATORS = {
		Pie: by.css("#chart_pie"),
		Line: by.css('#chart_line'),
		Column: by.css('#chart_column'),
		Area: by.css('#chart_area'),
		Tree: by.css('#chart_tree'),
		Dashboard: by.css('#chart_dashboard')
	};
	
  this.clickPieChartIcon = function() {
	utils.waitAndClick(LOCATORS.Pie);
  };

  this.clickLineChartIcon = function() {
	utils.waitAndClick(LOCATORS.Line);
  };
  
   this.clickColumnChartIcon = function() {
	utils.waitAndClick(LOCATORS.Column);
  };

  this.clickAreaChartIcon = function() {
	utils.waitAndClick(LOCATORS.Area);
  };

  this.clickTreeChartIcon = function() {
	utils.waitAndClick(LOCATORS.Tree);
  };
  
  this.clickDashboardChartIcon = function() {
	utils.waitAndClick(LOCATORS.Dashboard);
  };
};
module.exports = new ChartIcons();
