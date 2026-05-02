import { Then } from '@wdio/cucumber-framework'
import inventory from '../pages/inventory'

Then('I verify that inventory page elements are present', async () => {
	await inventory.verifyInventoryElements()
})
