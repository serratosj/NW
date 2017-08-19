


module.exports = {
  'Delete Event (Program Director)' : function (browser) {
   var username = browser.globals.users.loginpd; 
   var password = browser.globals.users.passwordpd;
   var events = browser.globals.events_edit;
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

       /*Wait for Manage Event Templates option*/
     .waitForElementVisible('a[ui-sref="eventsTemplate"]', 10000)
      .click('a[ui-sref="eventsTemplate"]')


      /*Wait for Program Type dropdown*/
      .waitForElementVisible('option[value="'+events.programType+'"]', 10000)
      .click('option[value="'+events.programType+'"]')
      .pause(1500)

      /*Wait for List view tab*/
      .waitForElementVisible('li[ng-click="ec.showedTabView = \'list-view\'; ec.eventsTable.reload();"]', 10000)
      .click('li[ng-click="ec.showedTabView = \'list-view\'; ec.eventsTable.reload();"]')

      /*Look for Automated Event*/
      .useXpath()
      .waitForElementVisible('//tr/td[contains(.,"'+events.title+'")]/following-sibling::td[2]/span', 10000)
      .click('//tr/td[contains(.,"'+events.title+'")]/following-sibling::td[2]/span')

      /*Delete event*/
      .useCss()
       .waitForElementVisible('input[value="Delete"]', 10000)
       .click('input[value="Delete"]')
       .pause(1000)

        /*Confirm Delete*/
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

