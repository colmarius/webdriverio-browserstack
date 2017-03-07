import { homePage } from '../page_objects'

describe('Github home page', () => {
  it('loads page', () => {
    homePage.visit()
    homePage.expectToBeOpened()
  })

  it('shows search input', () => {
    homePage.expectToHaveSearchInput()
  })

  it('shows link to signup form', () => {
    homePage.expectToHaveSignupForm()
  })
})
