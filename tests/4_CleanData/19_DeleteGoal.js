


module.exports = {
  'Delete Goal (Program Director)' : function (browser) {
   var username = browser.globals.users.loginpd; 
   var password = browser.globals.users.passwordpd;
   var goals = browser.globals.goals;
   var loginpage = browser.page.login();

   /*Login*/
    loginpage.navigate()
             .signInAsAdmin(username, password)
   /**/

   browser
      .maximizeWindow()
      .useCss()

      /*Wait for Admin dropdown*/
      .waitForElementVisible('a[class="dropdown-toggle ng-binding"]', 10000)
      .click('a[class="dropdown-toggle ng-binding"]')

      /*Wait for Goal Templates option*/
      .waitForElementVisible('a[ui-sref="goal-templates"]', 10000)
      .click('a[ui-sref="goal-templates"]')

      /*Wait for Program Type dropdown*/
      .waitForElementVisible('option[value="'+goals.programType+'"]', 10000)
      .click('option[value="'+goals.programType+'"]')

      /*Wait and edit on Automated Goal*/      
      .useXpath()
      .waitForElementVisible('//tr/td[contains(.,"'+goals.title+'")]/following-sibling::td[3]/span',10000)
      .click('//tr/td[contains(.,"'+goals.title+'")]/following-sibling::td[3]/span')

      /*Confirm Delete for all patients*/
      .useXpath()
       .waitForElementVisible('//button[contains(.,"Ok")]', 10000)
       .click('//button[contains(.,"Ok")]')   
       .pause(1000)

       /*Confirm for all patients*/
        .waitForElementVisible('//button[contains(.,"Yes")]', 10000)
       .click('//button[contains(.,"Yes")]')   
       .pause(1000)

       .end();
    }
 };
