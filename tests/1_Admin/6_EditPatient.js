

module.exports = {
  'Edit Patient (Admin)' : function (browser) {
   var username = browser.globals.users.loginadmin; 
   var password = browser.globals.users.passwordadmin;
   var patient = browser.globals.patient;
   var facility = browser.globals.facility;
   var loginpage = browser.page.login();
   var counselorfirstname = browser.globals.counselor.name;
   var counselorlastname = browser.globals.counselor.lastname;
  
  /*Login*/
    loginpage.navigate()
          .signInAsAdmin(username, password)

       browser.maximizeWindow()
      .useCss()

       /*Wait for Admin dropdown*/
      .waitForElementVisible('a[class="dropdown-toggle ng-binding"]', 10000)
      .click('a[class="dropdown-toggle ng-binding"]')

      /*Wait for Manage Patient option*/
      .waitForElementVisible('a[ui-sref="managePatient"]', 10000)
      .click('a[ui-sref="managePatient"]')

      /*Search for Automated Patient*/
      .waitForElementVisible('input[name="username"]', 20000)
      .pause(10000)
      .setValue('input[name="username"]', patient.username)
      .pause(10000)

      /*Wait and click edit button*/
      .waitForElementVisible('button[value="Edit"]', 10000)
	  .useXpath()
	  .click('//*[@id="tableContainer"]/table/tbody/tr[1]/td[6]/button/i')	  
	  .useCss()

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
      .clearValue('input[id="birthDate"]')
      .setValue('input[name="birthDate"]', patient.birthDate)

      /*Diagnoses Code*/
      .waitForElementVisible('input[name="condition"]', 10000)
      .click('input[name="condition"]')
      .pause(1000)
      .setValue('input[name="condition"]', patient.condition)
      .pause(1000)
      .keys(browser.Keys.ENTER)
      .pause(1000)
      
	  /*Payer
      .waitForElementVisible('select[id="payer"]', 10000)
      .click('select[id="payer"]')
      .click('option[value="'+patient.payer+'"]')
      */
	  
	  .waitForElementVisible('option[data-ng-repeat="payer in payers"]', 10000)
	  .click('option[value="'+patient.payer+'"]')
	  
	  /*Program Type*/
	  .waitForElementVisible('select[id="programType"]', 10000)
      .click('select[id="programType"]')
      .click('option[value="'+patient.programType+'"]')
      
	  /*Counselor*/
	  .waitForElementVisible('select[name="counselor"]', 10000)
      .click('select[name="counselor"]')
      .click('option[label="'+counselorfirstname+''+' '+''+counselorlastname+'"]')
      
	  /*Facility*/
	  .waitForElementVisible('select[name="facility"]', 10000)
      .click('select[name="facility"]')
      .click('option[label="'+facility.name+'"]')
      .pause(10000)

      /*Save changes*/
      .waitForElementVisible('input[value="Save"]', 10000)
      .click('input[value="Save"]')
      .pause(10000)
     
      .end();
  }
};
