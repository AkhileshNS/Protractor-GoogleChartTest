// spec.js
import {browser, $$, $, Key} from 'protractor';
// import chartIcons from '../components/ChartIcons';
// import chartTitle from '../components/ChartFrameNTitle';
// import columnChart from '../components/ColumnChart';
// import SearchAndCheck from '../components/SearchAndCheck';
// import chartPageHeader from 'components/GoogleChartHeader';

describe('Get data from column chart in google chart home page', function () {
  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    console.log('in before all');
    browser.get('https://www.google.com/');
  });

  it('verify if the gmail hyperlink is present', async () => {
    let isGmailPresent = false;
    await $$("a.gb_g").each(async el => {
      const title = await el?.getText();
      if (title === "Gmail") {
        isGmailPresent = true;
      }
    })

    expect(isGmailPresent).toBe(true);
  });

  it('verify if the google search works', () => {
    const googleSearchbar = $("input.gLFyf.gsfi");
    googleSearchbar.sendKeys("Hello world");
    googleSearchbar.sendKeys(Key.ENTER);

    const result = $("#result-stats");
    expect(result.getText()).toContain("results");
  }); 

  /* it('verify that the word "CNN" is in the title', function () {
    expect(browser.getTitle()).toContain('CNN');
  });

  it('validate that world news includes "europe", "africa" and "asia"', function () {
    const world = $$("a").get(5);
    world.click();
    const allTitles = $$("cn__title");
    let containsEurope = false;
    let containsAfrica = false;
    let containsAsia = false;
    allTitles.each(async title => {
      if (title && (await title.getText()).toLowerCase().includes("europe")) {
        containsEurope = true;
      }
      else if (title && (await title.getText()).toLowerCase().includes("africa")) {
        containsAfrica = true;
      }
      else if (title && (await title.getText()).toLowerCase().includes("asia")) {
        containsAsia = true;
      }
    })
    expect(containsAfrica && containsAsia && containsEurope).toBeTruthy();
  }); */

  /* it('check first expense and sales value in column chart', function () {
    chartIcons.clickColumnChartIcon();
    expect(columnChart.getFirstSales()).toContain('1,000');
    expect(columnChart.getFirstExpense()).toContain('400');
  }); 

  it("checks if first result has 'Pie Chart' when searching for 'Pie Chart'", () => {
    browser.refresh();
    expect(SearchAndCheck()).toContain("Pie Chart");
  }) // */
});
