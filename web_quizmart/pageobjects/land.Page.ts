import { register } from 'ts-node';
import * as defaultPage from './default.page'

// Elements
const landPageHeader = '(//div//h1)[1]'

const signInWithEmailButton = '//button[text()="Sign in with email"]'
const registerBtn = '//button[text()="Register"]'
const registerWithEmailBtn = '//button[text()="Register with email"]'

// Get
export async function getlandingPageHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(landPageHeader)
}

// Action
export async function clicksSignInWithEmailButton(): Promise<void> {
    await defaultPage.clickByLocator(signInWithEmailButton)
}

export async function clickRegisterBtn(): Promise<void> {
    await defaultPage.clickByLocator(registerBtn)
}

export async function clickRegisterWithEmailBtn(): Promise<void> {
    await defaultPage.clickByLocator(registerWithEmailBtn)
}

// Wait func
export async function waitForSignInWithEmailButtonIsInView(customTimeout?: number): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(signInWithEmailButton, customTimeout)
};

export async function waitForRegisterWithEmailButtonIsInView(customTimeout?: number): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(registerWithEmailBtn, customTimeout)
};