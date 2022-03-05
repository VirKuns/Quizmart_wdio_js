// GET functions
export async function getElementByLocator(locator: string) {
    return await (browser).$(locator)
}

export async function getElementsByLocator(locator: string) {
    return await (browser).$$(locator)
}

export async function getElementTextByLocator(locator: string): Promise<string> {
    return await (await getElementByLocator(locator)).getText()
}

// Action functions
export async function clickByLocator(locator: string): Promise<void> {
    await (await getElementByLocator(locator)).click()
}

export async function enterValueByLocator(locator: string, value: string): Promise<void> {
    await (await getElementByLocator(locator)).setValue(value)
}

export async function scrollToElementByLocator(locator: string): Promise<void> {
    await (await getElementByLocator(locator)).scrollIntoView()
}

// Assertions
export async function elementPresentByLocator(locator: string): Promise<boolean> {
    return (await getElementsByLocator(locator)).length > 0
}

export async function isElementClickableBy(locator: string): Promise<boolean> {
    return await (await getElementByLocator(locator)).isClickable()
}

// Wait func

let defaultTimeout: number = 2000

export async function waitUntilElementIsVisibleInViewportByLocator(locator: string, customTimeout?: number,): Promise<void> {
    const timeoutMessage = `${locator} element still invisible after ${customTimeout || defaultTimeout} ms`
    await browser.waitUntil(async function () {
        return (await getElementByLocator(locator)).isDisplayedInViewport()
    },
        {
            timeout: customTimeout || defaultTimeout,
            timeoutMsg: timeoutMessage
        })
}

// Open page func
export async function openLandingPage(): Promise<void> {
    await browser.url('')
}

export async function openSignInWithEmailPage(): Promise<void> {
    await browser.url('/sign-in')
}

export async function openSignUpWithEmailPage(): Promise<void> {
    await browser.url('/sign-up')
}
