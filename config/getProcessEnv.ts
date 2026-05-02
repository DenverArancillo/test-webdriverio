const getProcessEnv = (key: string): string => {
	let env = process.env[key]
	if (env === '' || env === undefined)
		throw new Error(`Environment <${key}> is empty or undefined`)

	return env
}

export default getProcessEnv
