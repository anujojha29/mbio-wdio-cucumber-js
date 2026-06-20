const { Given, When, Then } = require('@cucumber/cucumber')
const homePage = require('../test/pageobjects/home.page')

Then('the top navigation should display expected items', async (dataTable) => {
  const navTexts = await homePage.getNavigationTexts()
  expectedNavItems = dataTable.raw().flat().map((s) => s.trim())
  for (const item of expectedNavItems) {
    expect(navTexts.join(' ')).toContain(item);
  }
})

Then('each expected navigation item should link to the correct destination', async (dataTable) => {
  const rows = dataTable.hashes()
  for (const row of rows) {
    const href = await homePage.getHrefForNavItem(row.navitems)
    expect(href).toBeTruthy()
    expect(href).toContain(row.link)
  }
})