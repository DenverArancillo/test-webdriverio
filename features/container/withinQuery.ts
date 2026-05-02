import { within } from "@testing-library/webdriverio"

const withinFindByText = async (container: string, text: string | RegExp, options?: object) => {
	let elementContainer = await $(container)
	return await within(elementContainer).findByText(text, options)
}

export {
	withinFindByText
}