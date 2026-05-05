import { visibilityOf } from 'wdio-wait-for';

const waitUntilDisplayed = async (element: string, options?: object) => {
	browser.waitUntil(visibilityOf(element), options)
}

export {
	waitUntilDisplayed
}