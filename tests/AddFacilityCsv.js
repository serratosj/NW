var csvIterator = require('csv-iterator')
var iterators = require('async-iterators')
var iterator = csvIterator.fromFile('facilities.csv', {toObjects: true})

module.exports = {
  'Add Test' : function (browser) {

var username = browser.globals.users.loginadmin; 
var password = browser.globals.users.passwordadmin;
var loginpage = browser.page.login();

 /*Login*/
    loginpage.navigate()
             .signInAsAdmin(username, password)

   iterators.toArray(iterator, function(err,res)
{
 
    res.forEach(function(entry)
    {
        
      browser
      .useCss()
      /*Wait for Admin dropdown*/

      .waitForElementVisible('a[class="dropdown-toggle ng-binding"]', 10000)
      .click('a[class="dropdown-toggle ng-binding"]')
      .pause(1000)
      /*Wait for Manage Facilities option*/
      .waitForElementVisible('a[ng-href="#/manage-facility"]', 10000)
      .click('a[ng-href="#/manage-facility"]')
      .pause(10000)

     /*Wait for Add Facility button*/
      .waitForElementVisible('input[value="Add Facility"]', 10000)
      .click('input[value="Add Facility"]')

      /*Wait and fill Add Facility modal form*/
      .waitForElementVisible('input[id="name"]', 10000)
      .setValue('input[id="name"]', entry.name)
      .waitForElementVisible('input[id="address"]', 10000)
      .setValue('input[id="address"]', entry.address)
      .waitForElementVisible('input[id="city"]', 10000)
      .setValue('input[id="city"]', entry.city)
      .waitForElementVisible('input[id="state"]', 10000)
      .setValue('input[id="state"]', entry.state)
      .keys(browser.Keys.ENTER)
      .waitForElementVisible('input[id="zipCode"]', 10000)
      .setValue('input[id="zipCode"]', entry.zipCode)
      .waitForElementVisible('input[id="phoneNumber"]', 10000)
      .setValue('input[id="phoneNumber"]', entry.phoneNumber)
      .waitForElementVisible('input[name="programDirectors"]', 10000)
      .sendKeys('input[name="programDirectors"]', entry.programDirectors)
      .pause(1000)
      .keys(browser.Keys.BACK_SPACE)
      .keys(browser.Keys.ENTER)

      .pause(10000)
    /*Save changes*/
    .waitForElementVisible('input[value="Save"]', 10000)
    .click('input[value="Save"]')
    .pause(10000)

    /*Verify Facility was added*/
    .assert.containsText('td[data-title="\'Name\'"]', entry.name)

        })
    })
  }
};
