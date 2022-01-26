import * as defaultPage from "./default.page"

// headers
const discoverHeader = "//h1";

// Assertion
export async function getDiscoveryHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(discoverHeader)
}