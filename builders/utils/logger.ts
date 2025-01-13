import { Page } from '@playwright/test';

export function setupConsoleLogger(page: Page) {
    page.on('console', msg => {
        const message = `[Browser Console] ${msg.type()}: ${msg.text()}`;
        if (msg.type() === 'error') {
            console.error(message);
            if (msg.location()) {
                console.error(`  at ${msg.location().url}:${msg.location().lineNumber}:${msg.location().columnNumber}`);
            }
            if (msg.args().length > 0) {
                msg.args().forEach(async (arg, index) => {
                    const val = await arg.jsonValue();
                    console.error(`  Argument ${index}: ${JSON.stringify(val, null, 2)}`);
                });
            }
        } else if (msg.type() === 'warning') {
            console.warn(message);
        } else {
            console.log(message);
        }
    });

    page.on('pageerror', error => {
        console.error(`[Page Error] ${error.message}`);
        console.error(error.stack);
    });

    page.on('requestfailed', request => {
        const failure = request.failure();
        console.error(`[Request Failed] ${request.url()} - ${failure ? failure.errorText : 'unknown error'}`);
    });
}