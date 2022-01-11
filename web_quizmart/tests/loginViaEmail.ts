import * as Page from "../pageobjects/landing.page"

describe('My Login Via Email', () => {
    it('should login as a user', async () => {
        await Page.openLandingPage();
        await browser.pause(5000)
    });
});


