import { keys, routes, selectors } from '../lib'

class Page {
  get keys () {
    return this._keys || (this._keys = keys)
  }

  get routes() {
    return this._routes || (this._routes = routes)
  }

  get selectors() {
    return this._selectors || (this._selectors = selectors)
  }

  open (path) {
    browser.url(path)
  }
}

export default Page
