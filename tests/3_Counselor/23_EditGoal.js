var date = new Date();
date.setDate(date.getDate()+6)


module.exports = {
  'Edit Goals (Counselor)' : function (browser) {
   var username = browser.globals.users.loginc; 
   var password = browser.globals.users.passwordc;
   var patient = browser.globals.patient;
   var goals = browser.globals.goals;
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
      
      /*Wait for Pending Review tab*/
      
      .waitForElementVisible('//a[starts-with(.,"Incomplete")]', 10000)
      .pause(10000)
      .click('//a[starts-with(.,"Incomplete")]')


      /*Wait for Automated Goal edit button*/
      .useXpath()
      .waitForElementVisible('//a[contains(.,"All Goals")]', 10000)
      .click('//a[contains(.,"All Goals")]')
      

      /*Look for Automated Goal*/
      .useCss()
      .waitForElementVisible('input[ng-model="params.filter()[name]"]', 10000)
      .click('input[ng-model="params.filter()[name]"]')
      .sendKeys('input[ng-model="params.filter()[name]"]', goals.title)
      .pause(10000)
      .waitForElementVisible('button[ng-click="gbpc.editGoal(row)"]', 10000)
      .click('button[ng-click="gbpc.editGoal(row)"]')
          
      /*Wait for Goal modal*/
      .waitForElementVisible('input[placeholder="Find a goal template available or create a new one"]', 10000)
      .clearValue('input[placeholder="Find a goal template available or create a new one"]')
      .setValue('input[placeholder="Find a goal template available or create a new one"]', goals.title2)
      .waitForElementVisible('textarea[name="description"]', 10000)
      .clearValue('textarea[name="description"]')
      .setValue('textarea[name="description"]',goals.description2)

      /*Complete by*/
      .waitForElementVisible('button[ng-click="vm.openCalendar()"]', 10000)
      .click('button[ng-click="vm.openCalendar()"]')
      .waitForElementVisible('button[ng-click="select(null, $event)"]', 10000)
      .click('button[ng-click="select(null, $event)"]')
      .waitForElementVisible('input[ng-model="vm.goal.completeBy"]', 10000)
      .setValue('input[ng-model="vm.goal.completeBy"]',  date.getFullYear() + '-'
               + ('0' + (date.getMonth()+1)).slice(-2) + '-'
               + ('0' + date.getDate()).slice(-2))
      .pause(1000)

      /*Save*/
      .waitForElementVisible('button[ng-click="vm.saveGoal()"]', 10000)
      .click('button[ng-click="vm.saveGoal()"]')
      
      .end();


    }
 };
