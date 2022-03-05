import * as defaultPage from './default.page'

// Elements
const discoverHeader = '//h1'
const confirmDelete = '//div[text()="Are you sure you want to delete your account?"]'

const userProfileButton = '//div[text()="U"]'
const logoutButton = '//div[@role="dialog"] //a[text()="Logout"]'
const profileSettingsBtn = '//div[@role="dialog"] //a[text()="Profile settings"]'
const deleteAccountBtn = '//button[text()="Delete Account"]'
const confirmDeleteBtn = '//button[text()="Delete anyway"]'
const sortingBtn = '//button[./input[@value="Popular"]]'

// Action
export async function clickUserProfileButton(): Promise<void> {
    await defaultPage.clickByLocator(userProfileButton)
};

export async function clickLogoutButton(): Promise<void> {
    await defaultPage.clickByLocator(logoutButton)
};

export async function clickProfileSettingsButton(): Promise<void> {
    await defaultPage.clickByLocator(profileSettingsBtn)
};

export async function clickDeleteAccountButton(): Promise<void> {
    await defaultPage.clickByLocator(deleteAccountBtn)
};

// Assertion
export async function getDiscoverHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(discoverHeader)
}

// Wait func
export async function waitForSortingBtnInView(customTimeout?: number): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(sortingBtn, customTimeout)
};