import { Page, Locator } from '@playwright/test';

export class LogoutPage {

    readonly page: Page;
    readonly menu: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menu = page.getByRole('button', { name: 'Open Menu' });
        this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');

    }

    async logoutUser(): Promise<void> {
        await this.menu.click();
        await this.logoutLink.click();
        
    }




}