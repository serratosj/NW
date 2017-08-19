

module.exports = {
  'Add User - Counselor (Admin)' : function (browser) {
   var username = browser.globals.users.loginadmin; 
   var password = browser.globals.users.passwordadmin;
   var counselor = browser.globals.counselor;
   var facility = browser.globals.facility;
   var programDirector = browser.globals.program;
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
    .setValue('input[name="firstName"]', counselor.name)
    .waitForElementVisible('input[name="lastName"]', 10000)
    .setValue('input[name="lastName"]', counselor.lastname)
    .waitForElementVisible('input[name="email"]', 10000)
    .setValue('input[name="email"]', counselor.email)
    .waitForElementVisible('input[name="userFacilities"]', 10000)
    .sendKeys('input[name="userFacilities"]', counselor.facility)
    .keys(browser.Keys.BACK_SPACE)
    .keys(browser.Keys.ENTER)
    .pause(1000)
    .waitForElementVisible('select[id="role"]', 10000)
    .click('select[id="role"]')
    .pause(1000)
    .click('option[value="counselor"]')
    .pause(1000)
    .waitForElementVisible('select[id="programDirector"]',10000)
    .click('select[id="programDirector"]')
    .pause(1000)
    
	.useXpath()
    .click('//*[@id="programDirector"]/option[contains(.,"'+programDirector.name+''+' '+''+programDirector.lastname+'")]')
    .pause(10000)
    
	/*Save user*/
    .useCss()
    //.waitForElementVisible('input[value="Save"]', 10000)
    //.click('input[value="Save"]')
	.click ('label[class="btn-sm btn btn-primary review-btn"]')
    .pause(10000)

    /*Verify user was added*/
    .assert.containsText('td[data-title="\'Name\'"]', counselor.name + ' ' + counselor.lastname)
    
    .end();
  }
};

