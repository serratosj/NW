
module.exports = {
  'Add User - Program Director (Admin)' : function (browser) {
   var username = browser.globals.users.loginadmin; 
   var password = browser.globals.users.passwordadmin;
   var programDirector = browser.globals.program;
   var facility = browser.globals.facility;
   var loginpage = browser.page.login();
  
  /*Login*/
    loginpage.navigate()
          .signInAsAdmin(username, password)

    browser.maximizeWindow()
    .useCss()

	  /*Wait for Add User button*/
    .pause(10000)
    .waitForElementVisible('input[value="Add User"]', 10000)
    .click('input[value="Add User"]')

	  /*Wait and fill Add User modal form*/
    .waitForElementVisible('input[name="firstName"]', 10000)
    .setValue('input[name="firstName"]', programDirector.name)
    .waitForElementVisible('input[name="lastName"]', 10000)
    .setValue('input[name="lastName"]', programDirector.lastname)
    .waitForElementVisible('input[name="email"]', 10000)
    .setValue('input[name="email"]', programDirector.email)
    .waitForElementVisible('input[name="userFacilities"]', 10000)
    .sendKeys('input[name="userFacilities"]', programDirector.facility)
    .keys(browser.Keys.BACK_SPACE)
    .keys(browser.Keys.ENTER)
    .pause(1000)
    .useCss()
    .waitForElementVisible('select[id="role"]', 10000)
    .click('select[id="role"]')
    .pause(1000)
	
	/* Use option and option value for drop-down to select Program Director */
	.waitForElementVisible('option[data-ng-repeat="role in vm.roles"]', 1000)
    .click('option[value="program director"]')	
	.pause(1000)

    /*Save user -- use css selector <HTLM tag><value of class>*/
	.click ('label[class="btn-sm btn btn-primary review-btn"]')
	.pause(10000)

    /*Verify user was added*/
    .assert.containsText('td[data-title="\'Name\'"]', programDirector.name + ' ' + programDirector.lastname)

    .end();
  }
};


