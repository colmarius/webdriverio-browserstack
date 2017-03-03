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
}

export default HomePage
