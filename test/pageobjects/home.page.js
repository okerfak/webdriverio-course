const Page = require ('./page');
 
class HomePage extends Page{
 
    //page locators:
 
        get dashboardHeader() { return $('div.head &gt; h1') }
 
    //page actions:  
       //to verify user is in dashboard page
        async isDashboardHeaderExist () {
          return await this.dashboardHeader.isDisplayed();  
        }
 
    }
module.exports = new HomePage();