import * as landingPage from "./landing.page"


// setting element as a variable (xPath)
const signInEmailButton = "//button[text()='Sign in with email']"

export async function clickSignInWithEmailButton(): Promise<void> {
    await landingPage.clickByLocator(signInEmailButton)
}