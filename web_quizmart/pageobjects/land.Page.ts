import * as defaultPage from "./default.page"

// Elements
const landPageHeader = "(//div//h1)[1]";
const signInWithEmailButton = "//button[text()='Sign in with email']";

export async function getlandingPageHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(landPageHeader)
}

export async function clicksSignInWithEmailButton(): Promise<void> {
    await defaultPage.clickByLocator(signInWithEmailButton)
}