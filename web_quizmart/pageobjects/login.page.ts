import * as defaultPage from './default.page'


// Elements
const signInHeader = '//main //h1'

const signInButton = '//button[text()="Sign in"]'
const createAccountLink = '//a[contains(@href, "/sign-up")]'
const resetPasswordLink = '//a[contains(@href, "/reset-password")]'

const emailField = '//input[@placeholder="Email"]'
const passwordField = '//input[@name="password"]'

const emailInputValidation = '//div[./input[@name="email"]]//h3'
const passwordInputValidation = '//div[./input[@name="password"]]//h3'
const incorrectEmailOrPassword = '(//form//h3[1])'

// Action func
export async function clickSignInButton(): Promise<void> {
    await defaultPage.clickByLocator(signInButton)
};

export async function clickResetPassLink(): Promise<void> {
	await defaultPage.clickByLocator(resetPasswordLink) 
}

export async function clickCreateAccountLink(): Promise<void> {
	await defaultPage.clickByLocator(createAccountLink) 
}

export async function clickHeaderToLooseFocus(): Promise<void> {
	await defaultPage.clickByLocator(signInHeader) 
}

// Assertion func
export async function getSignInHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(signInHeader)
}

export async function getEmailErrorMessage(): Promise<string> {
    return await defaultPage.getElementTextByLocator(emailInputValidation)
}

export async function getPasswordErrorMessage(): Promise<string> {
    return await defaultPage.getElementTextByLocator(passwordInputValidation)
}

export async function getIncorectEmailOrPassMessage(): Promise<string> {
    return await defaultPage.getElementTextByLocator(incorrectEmailOrPassword)
}

// Input func 
export async function enterCredentialsClickSingIn(email: string, password: string): Promise<void> {
    await defaultPage.enterValueByLocator(emailField, email)
    await defaultPage.enterValueByLocator(passwordField, password)
    await clickSignInButton()
}

export async function enterPassClickSignIn(password: string): Promise<void> {
    await defaultPage.enterValueByLocator(passwordField, password)
    await clickSignInButton()  
}

export async function enterEmailClickSignIn(email: string): Promise<void> {
    await defaultPage.enterValueByLocator(emailField, email)
    await clickSignInButton()  
}

// Wait func
export async function waitForErrorMessageInView(customTimeout?: number): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(incorrectEmailOrPassword, customTimeout)
};

export async function waitForResetPassLinkInView(customTimeout?: number): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(resetPasswordLink, customTimeout)
};