import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { users } from '../data/users';

test.describe('Tests the Checkout page', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(users.standardUser.username, users.standardUser.password);

    })

    test('Checkout shopping from cart with items', async ({ page }) => {

        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await inventoryPage.addBackPackToCart();
        await inventoryPage.addOnesietoCart();

        await inventoryPage.CartItemButton();
        const cartItems = await cartPage.getCartItemsNames();

        //Assertions
        expect(cartItems).toContain('Sauce Labs Backpack');
        expect(cartItems).toContain('Sauce Labs Onesie');

        await cartPage.checkout();

        //Assertions after checkout
        expect(page).toHaveURL(/checkout-step-one.html/);



    });

})