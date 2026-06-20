const { Given, When, Then } = require('@cucumber/cucumber')
const homePage = require('../test/pageobjects/home.page')

When('I open an invalid route', async () => {
  await browser.url('/some-invalid-route-for-automation-check')
})

Then('the application should handle the invalid route gracefully', async () => {
  const currentUrl = await browser.getUrl()
  expect(currentUrl).toContain('invalid-route')
})

Then('the header should still be visible', async () => {
  await expect(homePage.header).toBeDisplayed()
})

Then('visible navigation links should have href attributes', async () => {
  const hrefs = await homePage.visibleNavHrefs()
  expect(hrefs.length).toBeGreaterThan(0);
});