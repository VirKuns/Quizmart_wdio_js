import * as defaultPage from '../pageobjects/default.page'
import * as landingPage from '../pageobjects/land.page'
import * as loginPage from '../pageobjects/login.page'
import * as registerPage from '../pageobjects/register.page'
import {expect} from 'chai'
import { Headers } from '../util/headers'



// Tests
describe('Open Landing Page', () => {

    beforeEach(async function() {
        await defaultPage.openLandingPage()
    });

    it('Select to Sign in with email', async () => {
        await landingPage.clicksSignInWithEmailButton()
        await loginPage.waitForResetPassLinkInView()
        expect(await loginPage.getSignInHeaderText()).equals(Headers.signIn)
    });

    it('Select to Register with email', async () => {
        await landingPage.clickRegisterBtn()
        await landingPage.waitForRegisterWithEmailButtonIsInView()
        await landingPage.clickRegisterWithEmailBtn()
        await registerPage.waitForSignUpBtnInView()
        expect(await registerPage.getSignUpHeaderText()).equals(Headers.register)
    });
});