import * as defaultPage from './default.page'

// Elements
const privacyPolicyHeader = '//h1'

// Assertions
export async function getPrivacyPolicyText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(privacyPolicyHeader)
}