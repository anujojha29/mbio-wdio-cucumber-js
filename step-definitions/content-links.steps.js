const { Given, When, Then } = require('@cucumber/cucumber')
const homePage = require('../test/pageobjects/home.page')
const whyMultiBankPage = require('../test/pageobjects/why-multibank.page')

Then('marketing banners should be visible', async () => {
  const bannertext = await homePage.marketingBannerText;
  const bannerimage = await homePage.marketingBannerImage;
  expect(bannertext).toBeDisplayed();
  expect(bannerimage).toBeDisplayed();
})

Then('the download app link should be available', async () => {
  await expect(homePage.downloadAppLink).toBeExisting()
  const text = (await homePage.downloadAppLink.getText()).trim()
  await expect(text).toBe("Download the app");
})

Then('the open account link should be available', async () => {
  await expect(homePage.openAcccountLink).toBeExisting()
  const link = (await homePage.openAcccountLink.getAttribute('href'));
  await expect(link).toContain('register');
})

Then('the Why MultiBank page should display expected headings', async () => {
  const heading = await whyMultiBankPage.getheading.getText();
  await expect(heading).toContain('Why MultiBank');
  
})

Given('I open the Why MultiBank page', async () => {
  await whyMultiBankPage.companyLink.click();
})