import Page from './page'

class HomePage extends Page {
  visit () {
    this.open(
      this.routes.homeUrl()
    )
  }

  expectToBeOpened () {
    browser.waitForVisible(this.selectors.homePage)
  }

  expectToHaveSearchInput () {
    browser.waitForVisible(this.selectors.homeSearchInput)
  }

  expectToHaveSignupForm () {
    browser.waitForVisible(this.selectors.homeSignupForm)
  }

  search (query) {
    this.expectToHaveSearchInput()
    browser.setValue(this.selectors.homeSearchInput, query + this.keys.ENTER)
  }
}

export default HomePage
