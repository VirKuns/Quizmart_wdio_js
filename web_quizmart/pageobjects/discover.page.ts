import * as defaultPage from './default.page'

// Elements
const discoverHeader = '//h1'

const userProfileButton = '//div[text()="U"]'
const logoutButton = '//div[@role="dialog"] //a[text()="Logout"]'
const sortingBtn = '//button[./input[@value="Popular"]]'

// Action
export async function clickUserProfileButton(): Promise<void> {
    await defaultPage.clickByLocator(userProfileButton)
};

export async function clickLogoutButton(): Promise<void> {
    await defaultPage.clickByLocator(logoutButton)
};

// Assertion
export async function getDiscoverHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(discoverHeader)
}

// Wait func
export async function waitForSortingBtnInView(customTimeout?: number): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(sortingBtn, customTimeout)
};