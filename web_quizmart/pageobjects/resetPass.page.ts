import * as defaultPage from './default.page'

// Elements
const resetPasswordHeader = '//h1'

const sendRecoveryCodeBtn = '//button[text()="Send recovery code"]'

// Assertions
export async function getResetPassHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(resetPasswordHeader)
}

// Wait func
export async function waitForSendRecoveryBtnInView(customTimeout?: number): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(sendRecoveryCodeBtn, customTimeout)
};