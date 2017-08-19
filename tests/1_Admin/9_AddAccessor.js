

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
	  .pause(10000)
	  .useCss()

      .waitForElementVisible('input[name="idAccessors"]', 20000)
  	  .setValue('input[name="idAccessors"]', "aa")
	  .waitForElementVisible('a[title="Nicolas Jaar (program director)"]', 20000)
	  .click('a[title="Nicolas Jaar (program director)"]')
	
      /*Save changes*/
      .waitForElementVisible('input[value="Save"]', 10000)
      .click('input[value="Save"]')
      .pause(10000)
     
      .end();
  }
};
