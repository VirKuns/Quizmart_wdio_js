import * as defaultPage from './default.page'

// Elements
const privacyPolicyHeader = '//h1[text()="Privacy Policy"]'

const closeBtn = '(//main//a)[1]'
const mainElement = '//main'


// Action
export async function clickCloseBtn(): Promise<void> {
    await defaultPage.clickByLocator(closeBtn)
}

export async function scrollToTheTop(): Promise<void> {
    return await defaultPage.scrollToElementByLocator(mainElement)
}

// Assertions
export async function getPrivacyPolicyText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(privacyPolicyHeader)
}

// Wait 
export async function waitForPrivacyPolicyHeader(customTimeout?: number): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(privacyPolicyHeader, customTimeout)
};