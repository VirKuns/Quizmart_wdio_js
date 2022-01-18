// Func to get element by its locator?

export async function getElementByLocator(locator: string) {
    return await (browser).$(locator)
}

// Func to click on element by locator

export async function clickByLocator(locator: string): Promise<void> {
    await (await getElementByLocator(locator)).click()
}
// Func to open baseURL which is given in wdio.conf.ts file

export async function openLandingPage(): Promise<void> {
    await browser.url('')
}

