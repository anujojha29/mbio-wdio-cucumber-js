const { Given, When, Then } = require('@cucumber/cucumber')
const homePage = require('../test/pageobjects/home.page')


Given('I navigate to explore section', async () => {
  await homePage.openExploreSection();
});

Then ('watchlist is displayed with categories Hot, Gainers, Losers', async () => {
  await expect(homePage.watchlistHotButton).toBeExisting();
  await expect(homePage.watchlistGainersButton).toBeExisting();
  await expect(homePage.watchlistLosersButton).toBeExisting();
});

Then('Market sentiment is displayed',async()=>{
  await expect(homePage.marketSentimentText).toBeDisplayed()
});

Then('Market sentiment score is displayed',async()=>{
  const score = Number(await homePage.marketSentimentScore.getText());
  await expect(score).toBeGreaterThan(0);
  await expect(score).toBeLessThan(100);
});