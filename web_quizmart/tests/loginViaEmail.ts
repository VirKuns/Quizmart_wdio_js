import * as landingPage from "../pageobjects/landing.page"
import * as loginPage from "../pageobjects/login.page"

describe('Login Via Email', () => {
    it('Click Sign In With Email button', async () => {
        await landingPage.openLandingPage();
        await loginPage.clickSignInWithEmailButton();
        await browser.pause(2000)
    });
});


