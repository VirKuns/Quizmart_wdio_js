import * as landingPage from "../pageobjects/landing.page"
import * as loginPage from "../pageobjects/login.page"
import {expect} from "chai"

// Text to compare to for assertions
const expectSignInHeadetText = "Sign in"
const expectDiscoverHeaderText = "Discover"

// error messages
const requiredFields = "Required"
const ValidEmaiMessage = "Must be valid email"
const PaswordLengthMessage = "Password must be at least of 6 characters in length"
const InvalidPassOrEmailAddress = "The email address or password is incorrect"

// Credentials
const email = "laume12@mailsac.com"
const password = "123456"
const shortPassword = "12345"
const invalidFormatEmail = "tralialia.lt"

// Tests
describe('Login Via Email', () => {
    it('Sign in with valid credentials', async () => {
        await landingPage.openLandingPage();
        await loginPage.clickSignInWithEmailButton();
        await browser.pause(2000);
        expect(await loginPage.getSignInHeaderText()).equals(expectSignInHeadetText);
        await loginPage.enterCredentials(email, password);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getDiscoveryHeaderText()).equals(expectDiscoverHeaderText);
        await browser.pause(1000);
    });

    it('Sign in with empty input', async () => {
        await landingPage.openLandingPage();
        await loginPage.clickSignInWithEmailButton();
        await browser.pause(2000);
        expect(await loginPage.getSignInHeaderText()).equals(expectSignInHeadetText);
        await loginPage.enterCredentials("", "");
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getRequiredEmailErrorMessage()).equals(requiredFields);
        expect(await loginPage.getRequiredPasswordErrorMessage()).equals(requiredFields);
        await browser.pause(1000);
    });
    
    it('Sign in with invalid email format', async () => {
        await landingPage.openLandingPage();
        await loginPage.clickSignInWithEmailButton();
        await browser.pause(2000);
        expect(await loginPage.getSignInHeaderText()).equals(expectSignInHeadetText);
        await loginPage.enterCredentials(invalidFormatEmail, password);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getRequiredEmailErrorMessage()).equals(ValidEmaiMessage);
        await browser.pause(1000);
    });

    it('Sign in password lenght too short', async () => {
        await landingPage.openLandingPage();
        await loginPage.clickSignInWithEmailButton();
        await browser.pause(2000);
        expect(await loginPage.getSignInHeaderText()).equals(expectSignInHeadetText);
        await loginPage.enterCredentials(email, shortPassword);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getRequiredPasswordErrorMessage()).equals(PaswordLengthMessage);
        await browser.pause(1000);
    });
});


