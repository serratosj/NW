
module.exports = {
  'Delete Patient (Counselor)' : function (browser) {
   var username = browser.globals.users.loginc; 
   var password = browser.globals.users.passwordc;
   var patient = browser.globals.patient;
   var loginpage = browser.page.login();

  
   
   /*Login*/
    loginpage.navigate()
             .signInAsAdmin(username, password)
   /**/
	browser.maximizeWindow()
      .useCss()

      /*Wait for Admin dropdown*/
      .waitForElementVisible('a[class="dropdown-toggle ng-binding"]', 10000)
      .click('a[class="dropdown-toggle ng-binding"]')

       /*Wait for Manage Patient option*/
      .waitForElementVisible('a[ng-href="#/manage-patient"]', 10000)
      .click('a[ng-href="#/manage-patient"]')

      /*Wait for search bar*/
      .waitForElementVisible('input[name="searchableFullName"]', 10000)
      .setValue('input[name="searchableFullName"]', patient.firstname)
      .pause(1500)

      /*Click on Edit button*/
      .waitForElementVisible('button[value="Edit"]', 10000)
      .click('button[value="Edit"]')

      /*Delete patient*/
      .waitForElementVisible('input[value="Delete patient"]', 10000)
      .click('input[value="Delete patient"]')
      .pause(1000)
      .useXpath()
      .waitForElementVisible('//button[contains(.,"Ok")]', 10000)
      .click('//button[contains(.,"Ok")]')   

      /*Alert delete message*/
      .waitForElementVisible('//div[contains(.,"Patient saved Successfully")]', 10000)

    .end();
  }
};

