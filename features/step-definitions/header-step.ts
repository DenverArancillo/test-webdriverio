import { Then } from '@wdio/cucumber-framework'
import header from '../pages/header'

Then('I verify header text is {string} and elements are present', async (headerText: string) => {
	await header.verifyHeaderTextAndElements(headerText)
})