import { Then } from '@wdio/cucumber-framework'
import header from '../pages/header'

Then('I verify header elements are present', async () => {
	await header.verifyHeaderElements()
})