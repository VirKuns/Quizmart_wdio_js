import * as Page from "./landing.page"



const signInEmailButton = "//button[text()='Sign in with email']"

export async function clickSignInWithEmailButton(): Promise<void> {
    await Page.clickByLocator(signInEmailButton)
}