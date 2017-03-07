import { homePage, searchPage } from '../page_objects'

describe('Search for a user on Github', () => {
  it('loads home page', () => {
    homePage.visit()
    homePage.expectToBeOpened()
  })

  it('search for user:webdriverio', () => {
    homePage.search('user:webdriverio')
  })

  it('loads search page', () => {
    searchPage.expectToBeOpened()
  })

  it('shows correct results count', () => {
    searchPage.expectSearchResultsCount(33)
  })
})
