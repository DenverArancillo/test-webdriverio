class Login {

	static async verifyLoginElements() {
		let username = await browser.findByPlaceholderText('Username')
		let password = await browser.findByPlaceholderText('Password')
		let loginButton = await browser.findByDisplayValue('Login')
	
		await expect.soft(username).toBeDisplayedInViewport()
		await expect.soft(password).toBeDisplayedInViewport()
		await expect.soft(loginButton).toBeDisplayedInViewport()
		expect.assertSoftFailures()
	}

	static async enterUsername(value: string) {
		let username = await browser.getByPlaceholderText('Username')
		await username.setValue(value)
	}

	static async enterPassword(value: string) {
		let password = await browser.getByPlaceholderText('Password')
		await password.setValue(value)
	}

	static async clickLogin() {
		let login = await browser.getByDisplayValue('Login')
		await login.click()
	}

	static async doLogin(username: string, password: string) {
		await this.enterUsername(username)
		await this.enterPassword(password)
		await this.clickLogin()
	}
}

export default Login