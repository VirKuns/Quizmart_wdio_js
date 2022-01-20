// Func to get element by its locator
export async function getElementByLocator(locator: string) {
    return await (browser).$(locator)
}

// gets element by locator's text
export async function getElementTextByLocator(locator: string): Promise<string> {
    return await (await getElementByLocator(locator)).getText()
}

// Func to click on element by locator
export async function clickByLocator(locator: string): Promise<void> {
    await (await getElementByLocator(locator)).click()
}

// Func to fill input with value
export async function enterValueByLocator(locator: string, value: string): Promise<void> {
    await (await getElementByLocator(locator)).setValue(value)
}

// Func to open baseURL which is given in wdio.conf.ts file
export async function openLandingPage(): Promise<void> {
    await browser.url('')
}

