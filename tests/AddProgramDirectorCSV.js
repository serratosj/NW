var csvIterator = require('csv-iterator')
var iterators = require('async-iterators')
var iterator = csvIterator.fromFile('programDirector.csv', {toObjects: true})

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
        
      /*Wait for Add User button*/
      browser
    .pause(10000)
    .waitForElementVisible('input[value="Add User"]', 10000)
    .click('input[value="Add User"]')

    /*Wait and fill Add User modal form*/
    .waitForElementVisible('input[name="firstName"]', 10000)
    .setValue('input[name="firstName"]', entry.name)
    .waitForElementVisible('input[name="lastName"]', 10000)
    .setValue('input[name="lastName"]', entry.lastname)
    .waitForElementVisible('input[name="email"]', 10000)
    .setValue('input[name="email"]', entry.email)
    .waitForElementVisible('input[name="userFacilities"]', 10000)
    .sendKeys('input[name="userFacilities"]', entry.facility)
    .keys(browser.Keys.BACK_SPACE)
    .keys(browser.Keys.ENTER)
    .pause(1000)
    .useCss()
    .waitForElementVisible('select[id="role"]', 10000)
    .click('select[id="role"]')
    .pause(1000)
    .click('option[value="program director"]')
    .pause(10000)

    /*Save user*/
    .waitForElementVisible('input[class="btn btn-primary btn-sm"]', 10000)
    .click('input[class="btn btn-primary btn-sm"]')
    .pause(10000)

    /*Verify user was added*/
   // .assert.containsText('td[data-title="\'Name\'"]', entry.name + ' ' + entry.lastname)


        })
    })
  }
};
