import Page from './page'

class SearchPage extends Page {
  visit () {
    this.open(
      this.routes.searchUrl()
    )
  }

  expectToBeOpened () {
    this.expectToHaveSearchInput()
  }

  expectToHaveSearchInput () {
    browser.waitForVisible(this.selectors.searchInput)
  }

  expectSearchResultsCount (count) {
    const actual = browser.getText(this.selectors.searchResultsCount)[0]
    const expected = `We’ve found ${count} repository results`
    expect(actual).toEqual(expected)
  }

  search (query) {
    this.expectToHaveSearchInput()
    browser.setValue(this.selectors.searchInput, query + this.keys.ENTER)
  }
}

export default SearchPage
