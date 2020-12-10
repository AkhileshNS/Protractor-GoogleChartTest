import { by } from 'protractor';
import utils from '../utils/commonUtils';

const ChartIcons = function() {
	const LOCATORS = {
		Pie: by.css("#chart_pie"),
		Line: by.css('#chart_line'),
		Column: by.css('#chart_column'),
		Area: by.css('#chart_area'),
		Tree: by.css('#chart_tree'),
		Dashboard: by.css('#chart_dashboard')
	};

	return {
		clickPieChartIcon() {
			utils.waitAndClick(LOCATORS.Pie);
		},

		clickLineChartIcon() {
			utils.waitAndClick(LOCATORS.Line);
		},
		
		clickColumnChartIcon() {
			utils.waitAndClick(LOCATORS.Column);
		},

		clickAreaChartIcon() {
			utils.waitAndClick(LOCATORS.Area);
		},

		clickTreeChartIcon() {
			utils.waitAndClick(LOCATORS.Tree);
		},
		
		clickDashboardChartIcon() {
			utils.waitAndClick(LOCATORS.Dashboard);
		}
	}
};

export default ChartIcons();
