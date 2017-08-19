var csvIterator = require('csv-iterator')
var iterators = require('async-iterators')
var iterator = csvIterator.fromFile('counselor.csv', {toObjects: true})

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
        
    browser.maximizeWindow()
    .useCss()

	  /*Wait for Add User button*/
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
    .waitForElementVisible('select[id="role"]', 10000)
    .click('select[id="role"]')
    .pause(1000)
    .click('option[value="counselor"]')
    .pause(1000)
    .waitForElementVisible('select[id="programDirector"]',10000)
    .click('select[id="programDirector"]')
    .pause(1000)
    .useXpath()
    .click('//*[@id="programDirector"]/option[contains(.,"'+entry.programDirectors+'")]')
    .pause(10000)
    /*Save user*/
    .useCss()
    .waitForElementVisible('input[value="Save"]', 10000)
    .click('input[value="Save"]')
    .pause(10000)

    /*Verify user was added*/
    .assert.containsText('td[data-title="\'Name\'"]', entry.name+' '+entry.lastname)
    
     })
    })
  }
};

