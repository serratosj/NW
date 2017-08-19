

module.exports = {
  'Delete Patient (Program Director)' : function (browser) {
   var username = browser.globals.users.loginpd; 
   var password = browser.globals.users.passwordpd;
   var patient = browser.globals.patient_pd;
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

        /*Wait for Manage Patient option*/
      .waitForElementVisible('a[ui-sref="managePatient"]', 10000)
      .click('a[ui-sref="managePatient"]')
      /*Wait for patients to load*/
      .pause(10000)

      /*Wait for search bar*/
      .waitForElementVisible('input[name="searchableFullName"]', 10000)
      .setValue('input[name="searchableFullName"]', patient.name + ' ' + patient.lastname)
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
      .pause(10000)

    .end();
  }
};
