import * as defaultPage from './default.page'

// header
const registerHeader = '//h1'

// Assertions
export async function getSignUpHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(registerHeader)
}