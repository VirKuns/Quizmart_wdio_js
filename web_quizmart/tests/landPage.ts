import * as defaultPage from '../pageobjects/default.page'
import * as landingPage from '../pageobjects/land.page'
import * as loginPage from '../pageobjects/login.page'
import {expect} from 'chai'
import { Headers } from '../util/headers'



// Tests
describe('Open Landing Page', () => {
    it('Open landing Page and click on Sign in with email button', async () => {
        await defaultPage.openLandingPage()
        //await browser.pause(1000)
        expect(await landingPage.getlandingPageHeaderText()).equals(Headers.landPageHeaderText)
        await browser.pause(1000)
        await landingPage.clicksSignInWithEmailButton()
        await browser.pause(1000)
        expect(await loginPage.getSignInHeaderText()).equals(Headers.signInHeaderText)
    });
});