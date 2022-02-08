import * as defaultPage from '../pageobjects/default.page'
import * as loginPage from '../pageobjects/login.page'
import * as discoverPage from '../pageobjects/discover.page'
import * as registerPage from '../pageobjects/register.page'
import { expect } from 'chai'
import * as credentials from '../util/credentials'
import { InputValidationMessages } from '../util/validationMessages'
import { Headers } from '../util/headers'




// Tests
describe('Register Via Email', () => {

    beforeEach(async function() {
        await defaultPage.openSignUpWithEmailPage()
        expect(await registerPage.getSignUpHeaderText()).equals(Headers.register)
    });

    it('Register with an empty email and password/confirm password fields', async () => {
        await registerPage.clickSignUpButton();
        expect(await registerPage.getEmailErrorMessage()).equals(InputValidationMessages.required);
        expect(await registerPage.getPasswordErrorMessage()).equals(InputValidationMessages.required);
        expect(await registerPage.getConfirmPassErrorMessage()).equals(InputValidationMessages.required)
    });

    it('Register with an invalid email format', async () => {
        for (const invalidEmail of credentials.invalidFormatEmail) {
            await registerPage.enterCredentialsClickSignUp(invalidEmail, credentials.user.password, credentials.user.password);
            expect(await registerPage.getEmailErrorMessage()).equals(InputValidationMessages.invalidEmailFormat)
            await browser.refresh()
        }
    });

    it('Register with the email too long', async () => {
        await registerPage.enterCredentialsClickSignUp(credentials.longEmail, credentials.user.password, credentials.user.password);
        await browser.pause(2000);
        expect(await registerPage.getEmailErrorMessage()).equals(InputValidationMessages.emailTooLong);
        await browser.refresh()
    });

    it('With the password too short/too long', async () => {
        await registerPage.enterCredentialsClickSignUp(credentials.user.email, credentials.shortPass, '');
        await browser.pause(2000);
        expect(await registerPage.getPasswordErrorMessage()).equals(InputValidationMessages.paswordLengthTooShort);
        await browser.refresh()
        await registerPage.enterCredentialsClickSignUp(credentials.user.email, credentials.longPass, '');
        await browser.pause(2000);
        expect(await registerPage.getPasswordErrorMessage()).equals(InputValidationMessages.paswordLengthTooLong);
        await browser.refresh()
    });

    it('With confirm password input not matching password inout', async () => {
        await registerPage.enterCredentialsClickSignUp(credentials.user.email, credentials.user.password, credentials.shortPass);
        await registerPage.clickSignUpButton();
        await browser.pause(2000);
        expect(await registerPage.getConfirmPassErrorMessage()).equals(InputValidationMessages.passwordsDoNotMatch);
        await browser.refresh()
    });

    it('Successfully with ticked tick box to receive communications', async () => {
        await registerPage.tickAcceptCommunicationTickBox();
      
        await browser.refresh()
    });
})