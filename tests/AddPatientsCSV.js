var csvIterator = require('csv-iterator')
var iterators = require('async-iterators')
var iterator = csvIterator.fromFile('patients.csv', {toObjects: true})
var date = new Date();

module.exports = {
  'Add Patients from CSV' : function (browser) {

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
    .maximizeWindow()
      .useCss()
      /*Wait for Admin dropdown*/
      .waitForElementVisible('a[class="dropdown-toggle ng-binding"]', 10000)
      .click('a[class="dropdown-toggle ng-binding"]')

      /*Wait for Manage Patient option*/
      .waitForElementVisible('a[ng-href="#/manage-patient"]', 10000)
      .click('a[ng-href="#/manage-patient"]')

      /*Wait for Add Patient button*/
      .waitForElementVisible('input[value="Add Patient"]', 10000)
      .click('input[value="Add Patient"]')

      /*Wait and fill Add Facility modal form*/
      .waitForElementVisible('input[id="firstName"]', 10000)
      .setValue('input[id="firstName"]', entry.name)
      .waitForElementVisible('input[id="lastName"]', 10000)
      .setValue('input[id="lastName"]', entry.lastname)
      .waitForElementVisible('input[id="username"]', 10000)
      .setValue('input[id="username"]', entry.username)
      .waitForElementVisible('input[id="email"]', 10000)
      .setValue('input[id="email"]', entry.email)

      /*Birth Date*/
      .waitForElementVisible('button[ng-click="openBirthDate($event)"]', 10000)
      .click('button[ng-click="openBirthDate($event)"]')
      .waitForElementVisible('button[class="btn btn-sm btn-danger uib-clear ng-binding"]', 10000)
      .click('button[class="btn btn-sm btn-danger uib-clear ng-binding"]')
      .setValue('input[name="birthDate"]', entry.birthDate)
      /**/

      .waitForElementVisible('span[uib-btn-radio="\''+entry.gender+'\'"]', 10000)
      .click('span[uib-btn-radio="\''+entry.gender+'\'"]')

      /*Admission Date*/
      .waitForElementVisible('button[ng-click="openStartTreatmentDate($event)"]', 10000)
      .click('button[ng-click="openStartTreatmentDate($event)"]')
      .waitForElementVisible('button[class="btn btn-sm btn-danger uib-clear ng-binding"]', 10000)
      .click('button[class="btn btn-sm btn-danger uib-clear ng-binding"]')
      .setValue('input[id="startTreatmentDate"]', date.getFullYear() + '-'
               + ('0' + (date.getMonth()+1)).slice(-2) + '-'
               + ('0' + date.getDate()).slice(-2))

       /*Diagnoses Code*/
      .waitForElementVisible('input[name="condition"]', 10000)
      .click('input[name="condition"]')
      .pause(1000)
      .setValue('input[name="condition"]', entry.condition)
      .pause(1000)
      .keys(browser.Keys.BACK_SPACE)
      .keys(browser.Keys.ENTER)
      .pause(1000)
      /**/
      
      .waitForElementVisible('select[id="payer"]', 10000)
      .click('select[id="payer"]')
      .click('option[value="'+entry.payer+'"]')
      .waitForElementVisible('select[id="programType"]', 10000)
      .click('select[id="programType"]')
      .click('option[value="'+entry.programType+'"]')
      .waitForElementVisible('select[name="counselor"]', 10000)
      .click('select[name="counselor"]')
      .click('option[label="'+entry.counselor+'"]')
      .pause(1000)
      .waitForElementVisible('select[name="facility"]', 10000)
      .click('select[name="facility"]')
      .click('option[label="'+entry.facility+'"]')
      .pause(10000)
     
      /*Save changes*/
      .waitForElementVisible('input[value="Save"]', 10000)
      .click('input[value="Save"]')
      .pause(10000)

      /*Verify patient was added*/
     .assert.containsText('td[data-title="\'Name\'"]', entry.name + ' ' + entry.lastname)
    
     })
    })
  }
};

