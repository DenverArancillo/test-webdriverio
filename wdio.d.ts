import type { WebdriverIOQueries, WebdriverIOQueriesChainable } from '@testing-library/webdriverio';
import type { BrowserBase, ChainablePromiseElement } from 'webdriverio';
import 'webdriverio';

declare module 'webdriverio' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ChainablePromiseElement extends Promise<WebdriverIO.Element>, WebdriverIOQueriesChainable {}

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ChainablePromiseArray extends Promise<WebdriverIO.Element[]> {}
}

declare module '@testing-library/webdriverio' {
	function setupBrowser<Browser extends BrowserBase>(browser: Browser): WebdriverIOQueries;
}

declare global {
    namespace WebdriverIO {
        interface Browser extends WebdriverIOQueries, WebdriverIOQueriesChainable<Browser> {}
        interface Element extends WebdriverIOQueries, WebdriverIOQueriesChainable<Element> {}

        interface Capabilities {
            'custom:caps'?: {
                device: string
            }
        }
    }
}
