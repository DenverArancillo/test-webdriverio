import { Given, When } from '@wdio/cucumber-framework'
import login from '../pages/login'

Given(/^I am on the login page of saucedemo.com$/, async () => {
    await browser.url('https://www.saucedemo.com/')
    await login.verifyLoginElements()
})

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await login.doLogin(username, password)
})
