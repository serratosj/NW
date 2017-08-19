var date = new Date();
date.setDate(date.getDate()+6)

module.exports = {
  'Create Goals (Counselor)' : function (browser) {
   var username = browser.globals.users.loginc; 
   var password = browser.globals.users.passwordc;
   var goals = browser.globals.goals;
   var patient = browser.globals.patient;
   var loginpage = browser.page.login();

   /*Login*/
    loginpage.navigate()
             .signInAsAdmin(username, password)
   /**/

   browser
      .maximizeWindow()
      .useXpath()
      .waitForElementVisible('//button[contains(.,"'+patient.name+''+' '+''+patient.lastname+'")]', 10000)
      .click('//button[contains(.,"'+patient.name+''+' '+''+patient.lastname+'")]')

      .useCss()
      /*Wait for Add Goal button*/
      .waitForElementVisible('button[ng-click="spc.newGoal()"]', 10000)
      .click('button[ng-click="spc.newGoal()"]')

      /*Wait for Goal modal*/
      .waitForElementVisible('input[placeholder="Find a goal template available or create a new one"]', 10000)
      .setValue('input[placeholder="Find a goal template available or create a new one"]', goals.title)
      .waitForElementVisible('textarea[name="description"]', 10000)
      .setValue('textarea[name="description"]',goals.description)

      /*Complete by*/
      .waitForElementVisible('input[ng-model="vm.goal.completeBy"]', 10000)
      .setValue('input[ng-model="vm.goal.completeBy"]',  date.getFullYear() + '-'
               + ('0' + (date.getMonth()+1)).slice(-2) + '-'
               + ('0' + date.getDate()).slice(-2))
      .pause(1000)

      /*Save*/
      .waitForElementVisible('button[ng-click="vm.saveGoal()"]', 10000)
      .click('button[ng-click="vm.saveGoal()"]')
      .pause(10000)
       .end();
    }
 };
