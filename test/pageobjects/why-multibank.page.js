const BasePage = require('./base.page')

class WhyMultiBankPage extends BasePage {
  get getheading() {
    return $('//div/h1')
  }

  get companyLink() { 
    return $('a[href*="/en/company"]')
  }
}

module.exports = new WhyMultiBankPage()
