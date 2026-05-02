import getProcessEnv from "./getProcessEnv"

const setupCapabilities = () => {
	const isMobile = getProcessEnv('IS_MOBILE')
	const browserName = getProcessEnv('BROWSER')

	let capabilities = []
	if (isMobile === 'true') {
		const deviceName = getProcessEnv('DEVICE')
		const isMultiDevices = getProcessEnv('IS_MULTI_DEVICES')
		const multiDevices = getProcessEnv('MULTI_DEVICES')

		if (isMultiDevices === 'false') {
			return [{ browserName, 'custom:caps': { device: deviceName } }]
		}

		if (
			isMobile === 'true' && 
			isMultiDevices === 'true' && 
			multiDevices.length > 0
		) {
			for (let device of multiDevices.split(',')) {
				capabilities.push({
					browserName: process.env.BROWSER,
					'custom:caps': { device }
				})
			}
		}
		
	} else {
		// browser
		const isMultiBrowser = getProcessEnv('IS_MULTI_BROWSERS')
		const multiBrowsers = getProcessEnv('MULTI_BROWSERS')

		if (isMultiBrowser === 'false') {
			return [{ browserName }]
		}

		if (isMultiBrowser === 'true' && multiBrowsers.length > 0) {
			for (let browser of multiBrowsers.split(',')) {
				capabilities.push({
					browserName: browser
				})
			}
		}
	}

	return capabilities
}

export default setupCapabilities
