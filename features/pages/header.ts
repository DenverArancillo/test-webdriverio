import { withinFindByText } from "../container/withinQuery"

class Header {
	// container
	static secondaryHeaderContainer = 'div[data-test="secondary-header"]'
	// elements
	static shoppingCart = '#shopping_cart_container'
	static burgerMenu = 'div.bm-burger-button'

	static async verifyHeaderElements() {
		let headerTitle = await withinFindByText(this.secondaryHeaderContainer, 'Products')
		let shoppingCart = await $(this.shoppingCart)
		let burgerMenu = await $(this.burgerMenu)

		await expect.soft(headerTitle).toBeDisplayedInViewport()
		await expect.soft(shoppingCart).toBeDisplayedInViewport()
		await expect.soft(burgerMenu).toBeDisplayedInViewport()
		expect.assertSoftFailures()
	}
}

export default Header