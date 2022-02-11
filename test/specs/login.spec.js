// describe("Test suite",()=>{
//     it("Test case",async()=>{
//         await browser.url("/");
//         let usernameInput = await $('#username');
//         let passwordInput = await $("#password")
//         await usernameInput.waitForDisplayed();
//         await usernameInput.setValue("Tavares_Barrows");
//         await passwordInput.setValue("s3cret");
//         await $('[data-test="signin-submit"]').waitForEnabled();
//         await $('[data-test="signin-submit"]').click();
//         await $('[data-test="transaction-list"]').waitForDisplayed();
//         await browser.saveScreenshot("./image.png");
//     })
// })


 
const assert = require('assert');
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const { AssertionError } = require('assert');
const { url } = require('inspector');
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
      // await browser.url('/transaction/new');
      await $('[data-test="nav-top-new-transaction"]').click();
      await browser.saveScreenshot("./transactionLink.png");
      
      

    });
    
    it('Should filter search result ', async () => {
      
      await $('[data-test="user-list-search-input"]').setValue('Giovanna74');
      // await $('[data-test="user-list-search-input"]').waitForDisplayed();
      // await inputSearch.waitUntil(async () => {
      //   return (await this.getinputSearch()) === 'I am now different';
      // }, {
      //     timeout: 5000,
      //     timeoutMsg: 'expected text to be different after 5s'
      // });
      await browser.pause(2000);
      await browser.saveScreenshot("./filtersearchresult.png"); 
    });  
    
    it('Should click on the user and go payment page', async () => {
     
      // await $('[data-test="users-list"]').waitForEnabled();
      await $('[data-test="user-list-item-24VniajY1y"]').click();
      await browser.saveScreenshot("./paymentpage.png"); 

    });
    
      it('Should enter the ammount, note, result', async () => {
      
        
        
        await $('[aria-describedby="transaction-create-amount-input-helper-text"]').setValue('300');
        await $('[id="transaction-create-description-input"]').click();
        await $('[aria-describedby="transaction-create-description-input-helper-text"]').setValue('Dungeon master');
        await $('[data-test="transaction-create-submit-payment"]').waitForEnabled();
        await $('[data-test="transaction-create-submit-payment"]').click(id="transaction-create-description-input");

        await browser.saveScreenshot(".result/.png");
  
       });
        
  });
