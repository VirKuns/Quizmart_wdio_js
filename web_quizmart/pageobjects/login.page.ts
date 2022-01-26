import * as defaultPage from "./default.page"



//buttons 
const signInButton = "//button[text()='Sign in']";

// links
const createAccountLink = "//a[contains(@href, '/sign-up')]"
const resetPasswordLink = "//a[contains(@href, '/reset-password')]"

//headers
const signInHeader = "//main //h1";

//input fields
const EmailField = "//input[@placeholder='Email']"; 
const PasswordField = "//input[@name='password']";

// error messages
const emailInputValidation = "//div[./input[@name='email']]//h3"
const passwordInputValidation = "//div[./input[@name='password']]//h3"
const incorrectEmailOrPassword = "(//form//h3[1])"

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
export async function enterCredentials(email: string, password: string): Promise<void> {
    await defaultPage.enterValueByLocator(EmailField, email)
    await defaultPage.enterValueByLocator(PasswordField, password)
}

