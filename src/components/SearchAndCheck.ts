import { protractor, $, browser } from 'protractor';

const SearchAndCheck = () => {
  const EC = protractor.ExpectedConditions;

  const textfield = $("input.devsite-search-field.devsite-search-query")
  browser.wait(EC.presenceOf(textfield), 10000)
  textfield.sendKeys("Pie Chart");
  textfield.sendKeys(protractor.Key.ENTER)

  const firstResult = $("a.gs-title");
  browser.wait(EC.presenceOf(firstResult), 10000)
  return firstResult.getText();
}

export default SearchAndCheck;