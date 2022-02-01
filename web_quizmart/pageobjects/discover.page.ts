import * as defaultPage from './default.page'

// headers
const discoverHeader = '//h1'
const userProfileButton = '//div[text()="U"]'
const logoutButton = '//div[@role="dialog"] //a[text()="Logout"]'

// Action
export async function clickUserProfileButton(): Promise<void> {
    await defaultPage.clickByLocator(userProfileButton)
};

export async function clickLogoutButton(): Promise<void> {
    await defaultPage.clickByLocator(logoutButton)
};

// Assertion
export async function getDiscoveryHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(discoverHeader)
}