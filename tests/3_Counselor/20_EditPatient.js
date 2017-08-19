

module.exports = {
  'Edit Patient (Counselor)' : function (browser) {
   var username = browser.globals.users.loginc; 
   var password = browser.globals.users.passwordc;
   var patient = browser.globals.patient;
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

      /*Search for Automated Patient
      .waitForElementVisible('input[name="username"]', 10000)
      .pause(1000)
      .setValue('input[name="username"]', patient.username)
      .pause(10000)*/

      /*Click on the edit button*/
      .waitForElementVisible('button[value="Edit"]', 10000)
      .click('button[value="Edit"]')

      /*Edit details of Patient*/
      .waitForElementVisible('input[id="firstName"]', 10000)
      .clearValue('input[id="firstName"]')
      .setValue('input[id="firstName"]', patient.name)
      .waitForElementVisible('input[id="lastName"]', 10000)
      .clearValue('input[id="lastName"]')
      .setValue('input[id="lastName"]', patient.lastname)

      /*Birth Date*/
      .waitForElementVisible('button[ng-click="openBirthDate($event)"]', 10000)
      .click('button[ng-click="openBirthDate($event)"]')
      .waitForElementVisible('button[class="btn btn-sm btn-danger uib-clear ng-binding"]', 10000)
      .click('button[class="btn btn-sm btn-danger uib-clear ng-binding"]')
      .setValue('input[name="birthDate"]', patient.birthDate)

      /*Diagnoses Code*/
      .waitForElementVisible('input[name="condition"]', 10000)
      .click('input[name="condition"]')
      .pause(1000)
      .setValue('input[name="condition"]', patient.condition)
      .pause(1000)
      .keys(browser.Keys.ENTER)
      .pause(1000)
      /**/
      .waitForElementVisible('select[id="payer"]', 10000)
      .click('select[id="payer"]')
      .click('option[value="'+patient.payer+'"]')
      .waitForElementVisible('select[id="programType"]', 10000)
      .click('select[id="programType"]')
      .click('option[value="'+patient.programType+'"]')
      .pause(10000)

        /*Save changes*/
      .waitForElementVisible('input[value="Save"]', 10000)
      .click('input[value="Save"]')

      /*Confirm alert save message*/
      .useXpath()
      .waitForElementVisible('//div[contains(.,"Patient saved Successfully")]', 10000)
     
      .end();
  }
};
