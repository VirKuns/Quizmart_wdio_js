import * as defaultPage from '../pageobjects/default.page'
import * as landingPage from '../pageobjects/land.Page'
import * as loginPage from '../pageobjects/login.page'
import * as discoverPage from '../pageobjects/discover.page'
import * as privacyPolicyPage from '../pageobjects/privacyPolicy.Page'
import * as registerPage from '../pageobjects/register.page'
import { expect } from 'chai'
import * as credentials from '../util/credentials'
import { InputValidationMessages } from '../util/validationMessages'
import { Headers } from '../util/headers'
import randomEmail = require('random-email')




// Tests
describe('Register Via Email', () => {

    beforeEach(async function() {
        await defaultPage.openSignUpWithEmailPage();
        expect(await registerPage.getSignUpHeaderText()).equals(Headers.register);
    });

    it('Successfull registration with ticked tick box to receive communications ticked', async () => {
        expect(await registerPage.tickBoxNotTicked()).equals(false)
        await registerPage.enterCredentialsTickNClickSignUp(randomEmail(), credentials.unregisteredUer.password, credentials.unregisteredUer.password);
        await discoverPage.waitForSortingBtnInView(8000);
        expect(await discoverPage.getDiscoverHeaderText()).equals(Headers.discover)
    });

    it('Successfull registration with tick box to receive communications not ticked', async () => {
        expect(await registerPage.tickBoxNotTicked()).equals(false)
        await registerPage.enterCredentialsClickSignUp(randomEmail(), credentials.unregisteredUer.password, credentials.unregisteredUer.password);
        await discoverPage.waitForSortingBtnInView(6000);
        expect(await discoverPage.getDiscoverHeaderText()).equals(Headers.discover)
    });

    it('Register with an empty email and password/confirm password fields', async () => {
        await registerPage.clickSignUpButton();
        expect(await loginPage.getEmailErrorMessage()).equals(InputValidationMessages.required);
        expect(await loginPage.getPasswordErrorMessage()).equals(InputValidationMessages.required);
        expect(await registerPage.getConfirmPassErrorMessage()).equals(InputValidationMessages.required);
    });

    it('Register with an invalid email format', async () => {
        for (const invalidEmail of credentials.invalidFormatEmail) {
            await registerPage.enterCredentialsClickSignUp(invalidEmail, credentials.user.password, credentials.user.password);
            expect(await loginPage.getEmailErrorMessage()).equals(InputValidationMessages.invalidEmailFormat);
            await browser.refresh();
        }
    });

    it('Register with the email too long', async () => {
        await registerPage.enterEmailAndClickRegister(credentials.longEmail);
        expect(await loginPage.getEmailErrorMessage()).equals(InputValidationMessages.emailTooLong);
    });

    it('Register with the password too short and too long', async () => {
        await registerPage.enterPassAndClickRegister(credentials.shortPass);
        expect(await loginPage.getPasswordErrorMessage()).equals(InputValidationMessages.paswordLengthTooShort);
        await registerPage.enterPassAndClickRegister(credentials.longPass);
        expect(await loginPage.getPasswordErrorMessage()).equals(InputValidationMessages.paswordLengthTooLong);
    });

    it('Confirm password input not matching password input', async () => {
        await registerPage.enterPassAndConfirmPassAndClickRegister(credentials.user.password, credentials.shortPass);
        expect(await registerPage.getConfirmPassErrorMessage()).equals(InputValidationMessages.passwordsDoNotMatch);
    });

    it('Registration with a registered email', async () => {
        await registerPage.enterCredentialsClickSignUp(credentials.user.email, credentials.user.password, credentials.user.password);
        await registerPage.waitForErrorMessageInView();
        expect(await registerPage.getEmailExistsErrorMessage()).equals(InputValidationMessages.emailAlreadyExists)
    });

    it('Go to Sing in page', async () => {
        await registerPage.clickSignInLink()
        await loginPage.waitForResetPassLinkInView()
        expect(await loginPage.getSignInHeaderText()).equals(Headers.signIn)
    });

    it('Click on communications (privacy-policy) link', async () => {
        await registerPage.clickCommunicationsLink();
        await privacyPolicyPage.scrollToTheTop();
        await privacyPolicyPage.waitForPrivacyPolicyHeader(8000);
        await privacyPolicyPage.clickCloseBtn();
        await landingPage.waitForSignInWithEmailButtonIsInView(6000);
        expect(await landingPage.getlandingPageHeaderText()).equals(Headers.landPage);
    });
})