import * as defaultPage from "../pageobjects/default.page"
import * as loginPage from "../pageobjects/login.page"
import { expect } from "chai"
import * as userCredentials from "../util/credentials"
import { inputValidationMessages } from "../util/validationMessages"

// Text to compare to for assertions
const expectSignInHeadetText = "Sign in"
const expectDiscoverHeaderText = "Discover"


// Tests
describe('Login Via Email', () => {

    before(async function() {
        await browser.pause(2000);
        await defaultPage.openSignInWithEmailPage()
        await browser.pause(1000);
        expect(await loginPage.getSignInHeaderText()).equals(expectSignInHeadetText)
    });

    it('Sign in with empty email and password fields', async () => {
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getEmailErrorMessage()).equals(inputValidationMessages.required);
        expect(await loginPage.getPasswordErrorMessage()).equals(inputValidationMessages.required);
    });

    it('Sign in with invalid email format', async () => {
        for (const invalidEmail of userCredentials.invalidCredentials.invalidFormatEmail) {
            await loginPage.enterCredentials(invalidEmail, userCredentials.user.password);
            await loginPage.clickSignInButton();
            expect(await loginPage.getEmailErrorMessage()).equals(inputValidationMessages.ValidEmail)
            await browser.refresh()
        }
    });
   
    it('Sign in with password too short/too long', async () => {
        await loginPage.enterCredentials(userCredentials.user.email, userCredentials.invalidCredentials.passwordTooShort);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getPasswordErrorMessage()).equals(inputValidationMessages.PaswordLengthTooShort);
        await browser.refresh()
        await loginPage.enterCredentials(userCredentials.user.email, userCredentials.invalidCredentials.passwordTooLong);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getPasswordErrorMessage()).equals(inputValidationMessages.PaswordLengthTooLong);
    });

    it('Sign in with incorrect password', async () => {
        await loginPage.enterCredentials(userCredentials.user.email, userCredentials.invalidCredentials.incorrectPassowrd);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getIncorectEmailOrPassMessage()).equals(inputValidationMessages.IncorrectPassOrEmailAddress);
    });

    it('Sign in as an unregistered user', async () => {
        await loginPage.enterCredentials(userCredentials.invalidCredentials.incorrectEmail, userCredentials.invalidCredentials.incorrectPassowrd);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getIncorectEmailOrPassMessage()).equals(inputValidationMessages.IncorrectPassOrEmailAddress);
    });

    it('Sign in as a registered user with success :)', async () => {
        await loginPage.enterCredentials(userCredentials.user.email, userCredentials.user.password);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getDiscoveryHeaderText()).equals(expectDiscoverHeaderText);
    });

    beforeEach(async function() {
        await browser.refresh()
    });
});


