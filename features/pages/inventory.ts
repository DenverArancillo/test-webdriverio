class Inventory {
	// container
	static inventoryListContainer = 'div[data-test="inventory-list"]'
	// element
	static inventoryItems = 'div[data-test="inventory-item"]'

	static async verifyInventoryElements() {
		let inventoryList = await $(this.inventoryListContainer)
		let randomListItem = await this.getRandomInventoryItem()

		await expect.soft(inventoryList).toBeDisplayedInViewport()
		await expect.soft(randomListItem).toBeDisplayedInViewport()
		expect.assertSoftFailures()
	}

	static async getRandomInventoryItem() {
		let items = await $$(this.inventoryItems)
		let randomItem = Math.floor(Math.random() * items.length)

		return items[randomItem]
	}
}

export default Inventory