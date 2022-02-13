const assert = require('assert');
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const { AssertionError } = require('assert');

// const { inputUsername, inputPassword } = require('../pageobjects/login.page');
 
describe('Login application', () => {
 
    it('I should open the main URL and verify the title', async () => {
      await browser.url('/');
      const title = await browser.getTitle();
      await assert.strictEqual(title , 'Cypress Real World App');
    });

    it('Should allow access', async () => {
      let { inputPassword, inputUsername } = LoginPage;
        await LoginPage.open();
        await inputUsername.setValue("Tavares_Barrows");
        await inputPassword.setValue("s3cret");
        await LoginPage.submit();
    });

    it('Should go to the "new" link ', async () => {
      await $('[data-test="nav-top-new-transaction"]').click();
      await browser.saveScreenshot("./transactionLink.png");
    });
    
    it('Should filter search result ', async () => {
      const inputSearch = await $('[data-test="user-list-search-input"]');
      await inputSearch.setValue('Giovanna74');
      await inputSearch.waitForDisplayed();
      await browser.waitUntil(async() => {
        return await $('//*[@data-test="users-list"]/li').isDisplayed(); 
      });
      await browser.saveScreenshot("./filtersearchresult.png"); 
    });  
    
    it('Should click on the user and go payment page', async () => {
      await $('[data-test="user-list-item-24VniajY1y"]').waitForClickable();
      await $('[data-test="user-list-item-24VniajY1y"]').click();
      await browser.saveScreenshot("./paymentpage.png"); 
    });
    
      it('Should enter the ammount, note, result', async () => {
        await $('#amount').setValue('300');
        await $('[id="transaction-create-description-input"]').click();
        await $('[id="transaction-create-description-input"]').setValue('Dungeon master');
        await $('[data-test="transaction-create-submit-payment"]').waitForClickable();
        await $('[data-test="transaction-create-submit-payment"]').click();
        await browser.saveScreenshot("./result.png");
  
      });
        
  });
