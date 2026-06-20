const { waitForDocumentReady } = require('../utils/waiters')

class BasePage {
  async open(path = '/') {
    await browser.url(path)
    await waitForDocumentReady()
  }

  async setDesktopViewport() {
    await browser.setWindowSize(1440, 1000)
  }

  async setMobileViewport() {
    await browser.setWindowSize(390, 844)
  }
}

module.exports = BasePage
