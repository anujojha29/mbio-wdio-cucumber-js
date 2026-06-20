const { Given, When, Then } = require('@cucumber/cucumber')
const homePage = require('../test/pageobjects/home.page')

var expectedNavItems;
Given('I open the mb.io home page on desktop', async () => {
  await homePage.setDesktopViewport()
  await homePage.openHome()
})

Given('I open the mb.io home page on mobile view', async () => {
  await homePage.setMobileViewport()
  await homePage.openHome()
})


