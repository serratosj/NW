

module.exports = {
  'Add facility (Admin)' : function (browser) {
   var username = browser.globals.users.loginadmin; 
   var password = browser.globals.users.passwordadmin;
   var facility = browser.globals.facility;
   var loginpage = browser.page.login();
   
  
  /*Login*/
    loginpage.navigate()
          .signInAsAdmin(username, password)
      browser
      .useCss()
      /*Wait for Admin dropdown*/
      .waitForElementVisible('a[class="dropdown-toggle ng-binding"]', 10000)
      .click('a[class="dropdown-toggle ng-binding"]')

      /*Wait for Manage Facilities option*/
      .waitForElementVisible('a[ui-sref="manageFacility"]', 10000)
      .click('a[ui-sref="manageFacility"]')
      .pause(10000)

     /*Wait for Add Facility button*/
      .waitForElementVisible('input[value="Add Facility"]', 10000)
      .click('input[value="Add Facility"]')

      /*Wait and fill Add Facility modal form*/
      .waitForElementVisible('input[id="name"]', 10000)
      .setValue('input[id="name"]', facility.name)
      .waitForElementVisible('input[id="address"]', 10000)
      .setValue('input[id="address"]', facility.address)
      .waitForElementVisible('input[id="city"]', 10000)
      .setValue('input[id="city"]', facility.city)
      .waitForElementVisible('input[id="state"]', 10000)
      .setValue('input[id="state"]', facility.state)
      .keys(browser.Keys.ENTER)
      .waitForElementVisible('input[id="zipCode"]', 10000)
      .setValue('input[id="zipCode"]', facility.zipCode)
      .waitForElementVisible('input[id="phoneNumber"]', 10000)
      .setValue('input[id="phoneNumber"]', facility.phoneNumber)
      .waitForElementVisible('input[name="programDirectors"]', 10000)
      .sendKeys('input[name="programDirectors"]', facility.programDirector)
      .pause(1000)
      .keys(browser.Keys.ENTER)
      .pause(10000)

    /*Save changes*/
    .waitForElementVisible('input[value="Save"]', 10000)
    .click('input[value="Save"]')
    .pause(10000)

    /*Verify Facility was added*/
    .assert.containsText('td[data-title="\'Name\'"]', facility.name)

   
    .end();
  }
};
