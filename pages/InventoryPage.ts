import { Page, Locator } from '@playwright/test';
//import { promises } from 'node:dns';

export class InventoryPage {

   readonly page: Page;
   readonly title: Locator;
   readonly addBackPackButton: Locator;
   readonly cartBadge: Locator;
   readonly addOnesie: Locator;
   readonly removeBackPackButton: Locator;
   readonly sortButton: Locator;
   readonly inventoryItems: Locator;
   readonly iventoryPrices: Locator;
   readonly productTitleBike: Locator;
   readonly productTilePage:Locator;
   readonly titlePage: Locator;

   constructor(page: Page) {
      this.page = page;
      this.title = page.locator('.title');
      this.addBackPackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      this.cartBadge = page.locator('[data-test="shopping-cart-link"]');
      this.addOnesie = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
      this.removeBackPackButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
      this.sortButton = page.locator('[data-test="product-sort-container"]')
      this.inventoryItems = page.locator('.inventory_item_name')
      this.iventoryPrices = page.locator('.inventory_item_price')
      this.productTitleBike = page.locator('[data-test="item-0-title-link"]')
      this.productTilePage = page.locator('[data-test="inventory-item-name"]')
      this.titlePage =page.locator('[data-test="title"]')
      
   }

   async addBackPackToCart(): Promise<void> {
      await this.addBackPackButton.click();
   }
   async addOnesietoCart(): Promise<void> {
      await this.addOnesie.click();
   }

   async getCartItemCount(): Promise<number | null> {
      const count = await this.cartBadge.textContent();
      return Number(count);
   }

      async CartItemButton(): Promise<void> {
      await this.cartBadge.click();

   }

   async removeBackPackButtonToCart(): Promise<void> {
      await this.removeBackPackButton.click();
   }

   async sortbyAtoZ(): Promise<void> {
      await this.sortButton.selectOption('Name (A to Z)');
   }

   async sortbyZtoA(): Promise<void> {
      await this.sortButton.selectOption('Name (Z to A)');

   }

   async sortbyLowtoHigh(): Promise<void> {
      await this.sortButton.selectOption('Price (low to high)');

   }

   async sortbyHightoLow(): Promise<void> {
      await this.sortButton.selectOption('Price (high to low)');

   }  

   async getInventoryItemNames(): Promise<string[]> {
      return await this.inventoryItems.allTextContents()
   }

   async getInventoryPrices(): Promise<number[]>{
      const pricesText = await this.iventoryPrices.allTextContents();
      return pricesText.map(price => Number(price.replace('$','')));
   
   }

   async redirectPage(): Promise<void>{
      this.productTitleBike.click();
   }

   


}