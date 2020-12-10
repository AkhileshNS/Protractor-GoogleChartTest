// spec.js
import {browser} from 'protractor';
import chartIcons from '../components/ChartIcons';
import chartTitle from '../components/ChartFrameNTitle';
import columnChart from '../components/ColumnChart';
// import chartPageHeader from 'components/GoogleChartHeader';

describe('Get data from column chart in google chart home page', function () {
  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    console.log('in before all');
    browser.get('https://developers.google.com/chart');
  });

  it('verify google chart page title', function () {
    expect(browser.getTitle()).toContain('Charts');
    expect(browser.getTitle()).toContain('Google Developers');
  });

  it('validate diferent chart type icons and chart title for each type', function () {
    chartTitle.switchToIframe();
    chartIcons.clickPieChartIcon();
    expect(chartTitle.getTitleText()).toContain('Pie Chart');
    chartIcons.clickLineChartIcon();
    expect(chartTitle.getTitleText()).toContain('Line Chart');
    chartIcons.clickColumnChartIcon();
    expect(chartTitle.getTitleText()).toContain('Column Chart');
    chartIcons.clickAreaChartIcon();
    expect(chartTitle.getTitleText()).toContain('Area Chart');
    chartIcons.clickTreeChartIcon();
    expect(chartTitle.getTitleText()).toContain('Tree Map');
    chartIcons.clickDashboardChartIcon();
    expect(chartTitle.getTitleText()).toContain('Controls and Dashboards');
  });

  it('check first expense and sales value in column chart', function () {
    chartIcons.clickColumnChartIcon();
    expect(columnChart.getFirstSales()).toContain('1,000');
    expect(columnChart.getFirstExpense()).toContain('400');
  });
});
