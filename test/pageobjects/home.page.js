const BasePage = require('./base.page')

class HomePage extends BasePage {
  get topNavLinks() {
    return $$('header nav a')
  }

  get header() {
    return $('header')
  }

  get marketingBannerText() {
    return $('//h3[contains(text(), "Unblemished. Unstoppable. United.")]');
  }

  get marketingBannerImage(){
    return $('//img[contains(@src,"khabib-img")]');
  }

  get downloadAppLink() {
    return $('a[href*="https://mbio.go.link"]');
  }

  get openAcccountLink(){
    return $('//a[contains(text(),"Open an account")]');
  }

  get watchlistHotButton() {
    return $('//button[contains(text(),"Hot")]');
  }

  get watchlistLosersButton() {
    return $('//button[contains(text(),"Losers")]');
  }

  get watchlistGainersButton() {
    return $('//button[contains(text(),"Gainers")]');
  }
  
  get marketSentimentText(){
    return $(`//h3[contains(text(),'Market sentiment')]`);
  }

  get marketSentimentScore(){
    return $(`//h3[contains(text(),'Market sentiment')]/../div/div`);
  }
  async openHome() {
    await this.open('/')
  }

  async openExploreSection() {
    const exploreLink = await $('a[href="/en/explore"]')
    await exploreLink.click()
  }

  async getNavigationTexts() {
    const links = await this.topNavLinks
    const texts = [];
    for (const link of links) {
      const text = await link.getText()
      texts.push(text.trim())
    }
    return texts.filter(Boolean)
  }

  async visibleNavHrefs() {
    const links = await this.topNavLinks
    const hrefs = []
    for (const link of links) {
      if (await link.isDisplayed()) {
        hrefs.push(await link.getAttribute('href'))
      }
    }
    return hrefs.filter(Boolean)
  }

  async getHrefForNavItem(itemLabel) {
    const link = await $(`//header//nav/a[normalize-space()="${itemLabel}"]`)
    if (!await link.isExisting()) return ''
    const href = await link.getAttribute('href')
    return href ? String(href) : ''
  }

}

module.exports = new HomePage()
