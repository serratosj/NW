
module.exports = {
  'Edit facility (Admin)' : function (browser) {
   var username = browser.globals.users.loginadmin; 
   var password = browser.globals.users.passwordadmin;
   var facility = browser.globals.facility;
   var loginpage = browser.page.login();
  
  /*Login*/
    loginpage.navigate()
          .signInAsAdmin(username, password)

      browser.maximizeWindow()
      .useCss()

    /*Wait for Admin dropdown*/
      .waitForElementVisible('a[class="dropdown-toggle ng-binding"]', 10000)
      .click('a[class="dropdown-toggle ng-binding"]')

      /*Wait for Manage Facilities option*/
      .waitForElementVisible('a[ui-sref="manageFacility"]', 10000)
      .click('a[ui-sref="manageFacility"]')

      /*Search for Auto Facility and click Edit button*/
      .useXpath()
      .waitForElementVisible('//tr/td[contains(.,"'+facility.name+'")]/following-sibling::td[4]/button', 10000)
      .click('//tr/td[contains(.,"'+facility.name+'")]/following-sibling::td[4]/button')
      .useCss()

      /*Wait and edit Facility fields*/
      .waitForElementVisible('input[id="name"]', 10000)
      .clearValue('input[id="name"]')
      .setValue('input[id="name"]', facility.name)
      .waitForElementVisible('input[id="address"]', 10000)
      .clearValue('input[id="address"]')
      .setValue('input[id="address"]', facility.address2)
      .waitForElementVisible('input[id="city"]', 10000)
      .setValue('input[id="city"]', facility.city2)
      .waitForElementVisible('input[id="state"]', 10000)
      .clearValue('input[id="state"]')
      .setValue('input[id="state"]', facility.state2)
      .keys(browser.Keys.ENTER)
      .waitForElementVisible('input[id="zipCode"]', 10000)
      .clearValue('input[id="zipCode"]')
      .setValue('input[id="zipCode"]', facility.zipCode)
      .waitForElementVisible('input[id="phoneNumber"]', 10000)
      .setValue('input[id="phoneNumber"]', facility.phoneNumber)
      .waitForElementVisible('input[name="programDirectors"]', 10000)
      .click('input[name="programDirectors"]')
      .pause(1000)
      .setValue('input[name="programDirectors"]', facility.programDirector2)
      .pause(1000)
      .keys(browser.Keys.ENTER)
      .pause(10000)

      /*Save changes*/
      .waitForElementVisible('input[value="Save"]', 10000)
      .click('input[value="Save"]')
      .pause(1000)
     
      .end();
  }
};
