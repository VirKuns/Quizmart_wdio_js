import * as landingPage from "../pageobjects/landing.page"
import * as loginPage from "../pageobjects/login.page"
import {expect} from "chai"

// Text to compare to for assertions
const expectSignInHeadetText = "Sign in"
const expectDiscoverHeaderText = "Discover"

// error messages
const emptyFields = "Required"

// Credentials
const email = "laume12@mailsac.com"
const password = "123456"

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

    
});


