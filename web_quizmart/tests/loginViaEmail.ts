import * as defaultPage from '../pageobjects/default.page'
import * as loginPage from '../pageobjects/login.page'
import * as discoverPage from '../pageobjects/discover.page'
import * as registerPage from '../pageobjects/register.page'
import * as resetPassPage from '../pageobjects/resetPass.page'
import { expect } from 'chai'
import * as userCredentials from '../util/credentials'
import { InputValidationMessages } from '../util/validationMessages'
import { Headers } from '../util/headers'



// Tests
describe('Login Via Email', () => {

    before(async function() {
        await browser.pause(2000);
        await defaultPage.openSignInWithEmailPage()
        await browser.pause(1000);
        expect(await loginPage.getSignInHeaderText()).equals(Headers.signInHeaderText)
    });

    it('Sign in with empty email and password fields', async () => {
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getEmailErrorMessage()).equals(InputValidationMessages.required);
        expect(await loginPage.getPasswordErrorMessage()).equals(InputValidationMessages.required);
    });

    it('Sign in with invalid email format', async () => {
        for (const invalidEmail of userCredentials.invalidCredentials.invalidFormatEmail) {
            await loginPage.enterCredentials(invalidEmail, userCredentials.user.password);
            await loginPage.clickSignInButton();
            expect(await loginPage.getEmailErrorMessage()).equals(InputValidationMessages.ValidEmail)
            await browser.refresh()
        }
    });

    it('Sign in with email too long', async () => {
        await loginPage.enterCredentials(userCredentials.invalidCredentials.longEmail, userCredentials.user.password);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getEmailErrorMessage()).equals(InputValidationMessages.emailTooLong);
    });
   
    it('Sign in with password too short/too long', async () => {
        await loginPage.enterCredentials(userCredentials.user.email, userCredentials.invalidCredentials.passwordTooShort);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getPasswordErrorMessage()).equals(InputValidationMessages.PaswordLengthTooShort);
        await browser.refresh()
        await loginPage.enterCredentials(userCredentials.user.email, userCredentials.invalidCredentials.passwordTooLong);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getPasswordErrorMessage()).equals(InputValidationMessages.PaswordLengthTooLong);
    });

    it('Sign in with incorrect password', async () => {
        await loginPage.enterCredentials(userCredentials.user.email, userCredentials.invalidCredentials.incorrectPassowrd);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getIncorectEmailOrPassMessage()).equals(InputValidationMessages.IncorrectPassOrEmailAddress);
    });

    it('Sign in as an unregistered user', async () => {
        await loginPage.enterCredentials(userCredentials.invalidCredentials.incorrectEmail, userCredentials.invalidCredentials.incorrectPassowrd);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await loginPage.getIncorectEmailOrPassMessage()).equals(InputValidationMessages.IncorrectPassOrEmailAddress);
    });

    it('Click Create Account link to go to Register page', async () => {
        await loginPage.clickCreateAccountLink();
        await browser.pause(2000);
        expect(await registerPage.getSignUpHeaderText()).equals(Headers.registerHeaderText);
        await browser.back()
    });

    it('Click Forgot Passowrd link to go to Reset Password page', async () => {
        await loginPage.clickResetPassLink();
        await browser.pause(2000);
        expect(await resetPassPage.getResetPassHeaderText()).equals(Headers.resetPassHeaderText);
        await browser.back()
    });

    it('Sign in as a registered user with success', async () => {
        await loginPage.enterCredentials(userCredentials.user.email, userCredentials.user.password);
        await loginPage.clickSignInButton();
        await browser.pause(2000);
        expect(await discoverPage.getDiscoveryHeaderText()).equals(Headers.discoverHeaderText);
        await discoverPage.clickUserProfileButton();
        await browser.pause(2000);
        await discoverPage.clickLogoutButton();
        await browser.pause(2000);
        expect(await loginPage.getSignInHeaderText()).equals(Headers.landPageHeaderText)
    });

    beforeEach(async function() {
        await browser.refresh()
    });
});


