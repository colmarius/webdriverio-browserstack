# Webdriver.io + BrowserStack example

Example running integration tests on Github.com
with [webdriver.io] on [BrowserStack Automate].

[webdriver.io]: http://webdriver.io
[BrowserStack Automate]: https://www.browserstack.com/automate

## Setup

First, we install dependencies

    yarn install

Then we need to edit current `.envrc` file

    direnv edit .

where we export the following variables:

    export BS_USER=your-browserstack-username
    export BS_KEY=your-browserstack-apikey

## Run Tests

    npm run local # test local app on Browserstack
    npm run remote # tests production app on Browserstack
