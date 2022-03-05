import * as defaultPage from './default.page'

// Elements
const registerHeader = '//h1'

const signUpBtn = '//button[text()="Sign up"]'
const signInLink = '//a[contains(@href, "/sign-in")]'
const acceptCommunicationsTickBox = '(//form//button)[1]'
const acceptCommunicationsTickBoxTicked = 'form button svg'  ///css selecor
const communicationsLink = '//a[text()="communications"]'

const emailInput = '//input[@placeholder="Email"]'
const passwordInput = '//input[@placeholder="Password"]'
const confirmPassInput = '//input[@placeholder="Confirm password"]'

const emailInputValidation = '//div[./input[@name="email"]]//h3'
const passwordInputValidation = '//div[./input[@name="password"]]//h3'
const confirmPassInputValidation = '//div[./input[@name="passwordRepeat"]]//h3'
const userWithEmailExists = '//main//div//form//h3'

// Action func
export async function clickSignUpButton(): Promise<void> {
    await defaultPage.clickByLocator(signUpBtn)
};

export async function tickAcceptCommunicationTickBox(): Promise<void> {
    await defaultPage.clickByLocator(acceptCommunicationsTickBox)
};

export async function clickCommunicationsLink(): Promise<void> {
    await defaultPage.clickByLocator(communicationsLink)
};

export async function clickSignInLink(): Promise<void> {
    await defaultPage.clickByLocator(signInLink)
};

// Assertions
export async function getSignUpHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(registerHeader)
}

export async function getConfirmPassErrorMessage(): Promise<string> {
    return await defaultPage.getElementTextByLocator(confirmPassInputValidation)
}

export async function getEmailExistsErrorMessage(): Promise<string> {
    return await defaultPage.getElementTextByLocator(userWithEmailExists)
}

export async function tickBoxNotTicked(): Promise<boolean> {
    return await defaultPage.elementPresentByLocator(acceptCommunicationsTickBoxTicked)
}

// Input func 
export async function enterCredentialsClickSignUp(email: string, password: string, confirmPass: string): Promise<void> {
    await defaultPage.enterValueByLocator(emailInput, email)
    await defaultPage.enterValueByLocator(passwordInput, password)
    await defaultPage.enterValueByLocator(confirmPassInput, confirmPass)
    await clickSignUpButton()
}

export async function enterCredentialsTickNClickSignUp(email: string, password: string, confirmPass: string): Promise<void> {
    await defaultPage.enterValueByLocator(emailInput, email)
    await defaultPage.enterValueByLocator(passwordInput, password)
    await defaultPage.enterValueByLocator(confirmPassInput, confirmPass)
    await tickAcceptCommunicationTickBox()
    await clickSignUpButton()
}

export async function enterEmailAndClickRegister(email: string): Promise<void> {
    await defaultPage.enterValueByLocator(emailInput, email)
    await clickSignUpButton()  
}

export async function enterPassAndClickRegister(password: string): Promise<void> {
    await defaultPage.enterValueByLocator(passwordInput, password)
    await clickSignUpButton()  
}

export async function enterPassAndConfirmPassAndClickRegister(password: string, confirmPass: string): Promise<void> {
    await defaultPage.enterValueByLocator(passwordInput, password)
    await defaultPage.enterValueByLocator(confirmPassInput, confirmPass)
    await clickSignUpButton()  
}

// Wait func
export async function waitForSignUpBtnInView(customTimeout?: number): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(signUpBtn, customTimeout)
};

export async function waitForErrorMessageInView(customTimeout?: number): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(userWithEmailExists, customTimeout)
};