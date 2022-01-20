// Import all func from landing.page file
import * as landingPage from "./landing.page"


// setting elements as a variable (xPath)
//buttons 
const signInEmailButton = "//button[text()='Sign in with email']";
const signInButton = "//button[text()='Sign in']";

//headers
const signInHeader = "//main //h1";
const discoverHeader = "//h1";

//input fields
const EmailField = "//input[@placeholder='Email']"; 
const PasswordField = "//input[@name='password']";

// error messages
const emailRequired = "//h3[text()='Required']/"
const passwordRequired = "//h3[text()='Required']"[1]

// func to click 
export async function clickSignInWithEmailButton(): Promise<void> {
    await landingPage.clickByLocator(signInEmailButton)
};

export async function clickSignInButton(): Promise<void> {
    await landingPage.clickByLocator(signInButton)
};

// get Headers/error messages for assertion
export async function getSignInHeaderText(): Promise<string> {
    return await landingPage.getElementTextByLocator(signInHeader)
}

export async function getDiscoveryHeaderText(): Promise<string> {
    return await landingPage.getElementTextByLocator(discoverHeader)
}

export async function getRequiredErrorMessage(): Promise<string> {
    return await landingPage.getElementTextByLocator(emailRequired),
    await landingPage.getElementTextByLocator(passwordRequired)
}

// func for input fields 
export async function enterCredentials(email: string, password: string): Promise<void> {
    await landingPage.enterValueByLocator(EmailField, email)
    await landingPage.enterValueByLocator(PasswordField, password)
}

