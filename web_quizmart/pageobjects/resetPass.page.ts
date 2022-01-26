import * as defaultPage from "./default.page"

// header
const resetPasswordHeader = "//h1"

// Assertions
export async function getResetPassHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(resetPasswordHeader)
}