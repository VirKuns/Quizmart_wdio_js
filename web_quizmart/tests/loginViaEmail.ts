import * as defaultPage from '../pageobjects/default.page'
import * as loginPage from '../pageobjects/login.page'
import * as discoverPage from '../pageobjects/discover.page'
import * as registerPage from '../pageobjects/register.page'
import * as resetPassPage from '../pageobjects/resetPass.page'
import { expect } from 'chai'
import * as credentials from '../util/credentials'
import { InputValidationMessages } from '../util/validationMessages'
import { Headers } from '../util/headers'



// Tests
describe('Sign In Via Email', () => {

    beforeEach(async function() {
        await defaultPage.openSignInWithEmailPage()
    });

    it('Sign in as a registered user with success', async () => {
        await loginPage.enterCredentialsClickSingIn(credentials.user.email, credentials.user.password);
        await discoverPage.waitForSortingBtnInView(6000);
        expect(await discoverPage.getDiscoverHeaderText()).equals(Headers.discover)
    });

    it('Sign in with empty email and password fields', async () => {
        await loginPage.clickSignInButton();
        expect(await loginPage.getEmailErrorMessage()).equals(InputValidationMessages.required);
        expect(await loginPage.getPasswordErrorMessage()).equals(InputValidationMessages.required);
    });

    it('Sign in with invalid email format', async () => {
        for (const invalidEmail of credentials.invalidFormatEmail) {
            await loginPage.enterCredentialsClickSingIn(invalidEmail, credentials.user.password);
            expect(await loginPage.getEmailErrorMessage()).equals(InputValidationMessages.invalidEmailFormat)
            await browser.refresh()
        }
    });

    it('Sign in with email too long', async () => {
        await loginPage.enterEmailClickSignIn(credentials.longEmail);
        expect(await loginPage.getEmailErrorMessage()).equals(InputValidationMessages.emailTooLong);
    });
   
    it('Sign in with password too short and too long', async () => {
        await loginPage.enterPassClickSignIn(credentials.shortPass);
        expect(await loginPage.getPasswordErrorMessage()).equals(InputValidationMessages.paswordLengthTooShort);
        await loginPage.enterPassClickSignIn(credentials.longPass);
        expect(await loginPage.getPasswordErrorMessage()).equals(InputValidationMessages.paswordLengthTooLong);
    });

    it('Sign in as a registered user with incorrect password', async () => {
        await loginPage.enterCredentialsClickSingIn(credentials.user.email, credentials.incorrectPassowrd);
        await loginPage.waitForErrorMessageInView();
        expect(await loginPage.getIncorectEmailOrPassMessage()).equals(InputValidationMessages.incorrectPassOrEmail);
    });

    it('Sign in as an unregistered user', async () => {
        await loginPage.enterCredentialsClickSingIn(credentials.incorrectEmail, credentials.incorrectPassowrd);
        await loginPage.waitForErrorMessageInView();
        expect(await loginPage.getIncorectEmailOrPassMessage()).equals(InputValidationMessages.incorrectPassOrEmail);
    });

    it('Click Forgot Passowrd link to go to Reset Password page', async () => {
        await loginPage.clickResetPassLink();
        await resetPassPage.waitForSendRecoveryBtnInView();
        expect(await resetPassPage.getResetPassHeaderText()).equals(Headers.resetPassword);
    });

    it('Click Create Account link to go to Register page', async () => {
        await loginPage.clickCreateAccountLink();
        await registerPage.waitForSignUpBtnInView();
        expect(await registerPage.getSignUpHeaderText()).equals(Headers.register);
    });
});


