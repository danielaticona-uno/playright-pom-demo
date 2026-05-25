import { Page, Locator } from '@playwright/test';

export class ProductPage {

    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly removeCartButton: Locator;
    readonly backToProductsLink: Locator;
    readonly shoppingCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('[data-test="add-to-cart"]');
        this.removeCartButton = page.locator('[data-test="remove"]');
        this.backToProductsLink = page.locator('[data-test="back-to-products"]');
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]')


    }

    async addToCart(): Promise<void> {
        await this.addToCartButton.click();
    }

    async removeToCart(): Promise<void> {
        await this.removeCartButton.click();
    }

    async returnToInventory(): Promise<void> {
        await this.backToProductsLink.click();
    }

    async getCartItemCountP(): Promise<number | null> {
        const count = this.shoppingCart.textContent();
        return Number(count);
    }






}