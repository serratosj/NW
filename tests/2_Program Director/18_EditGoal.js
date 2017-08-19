


module.exports = {
  'Edit Goal Template (Program Director)' : function (browser) {
   var username = browser.globals.users.loginpd; 
   var password = browser.globals.users.passwordpd;
   var goals = browser.globals.goals;
   var loginpage = browser.page.login();

   /*Login*/
    loginpage.navigate()
             .signInAsAdmin(username, password)
   /**/

   browser
      .maximizeWindow()
      .useCss()


      /*Wait for Admin dropdown*/
      .waitForElementVisible('a[class="dropdown-toggle ng-binding"]', 10000)
      .click('a[class="dropdown-toggle ng-binding"]')

      /*Wait for Goal Templates option*/
   .waitForElementVisible('a[ui-sref="goal-templates"]', 10000)
      .click('a[ui-sref="goal-templates"]')

      /*Wait for Program Type dropdown*/
      .waitForElementVisible('option[value="'+goals.programType+'"]', 10000)
      .click('option[value="'+goals.programType+'"]')

      /*Wait and edit on Automated Goal*/      
      .useXpath()
      .waitForElementVisible('//tr/td[contains(.,"'+goals.title+'")]/following-sibling::td[2]/button',10000)
      .click('//tr/td[contains(.,"'+goals.title+'")]/following-sibling::td[2]/button')


      /*Wait for Goal modal*/
      .useCss()
      .waitForElementVisible('input[placeholder="Goal template title"]', 10000)
      .clearValue('input[placeholder="Goal template title"]')
      .setValue('input[placeholder="Goal template title"]', goals.title2)
     .waitForElementVisible('textarea[name="description"]', 10000)
      .clearValue('textarea[name="description"]')
      .setValue('textarea[name="description"]', goals.description2)

      /*Add Milestone*/
      .waitForElementVisible('button[ng-click="vm.addMilestone()"]', 10000)
      .click('button[ng-click="vm.addMilestone()"]')
      .waitForElementVisible('input[ng-model="row.title"]',10000)
      .clearValue('input[ng-model="row.title"]')
      .setValue('input[ng-model="row.title"]', goals.milestone2)
      .waitForElementVisible('button[ng-click="vm.saveMilestone($index, row, rowForm)"]',10000)
      .click('button[ng-click="vm.saveMilestone($index, row, rowForm)"]')
      .pause(1000)

      /*Edit Milestone*/
      .waitForElementVisible('button[ng-click="vm.editMilestone(row, $event)"]', 10000)
      .click('button[ng-click="vm.editMilestone(row, $event)"]')
      .useCss()
      .waitForElementVisible('input[ng-model="row.title"]',10000)
      .clearValue('input[ng-model="row.title"]')
      .setValue('input[ng-model="row.title"]',goals.milestone2)
      .waitForElementVisible('button[ng-click="vm.saveMilestone($index, row, rowForm)"]',10000)
      .click('button[ng-click="vm.saveMilestone($index, row, rowForm)"]')

      /*Save*/
      .waitForElementVisible('button[ng-click="vm.saveGoal()"]', 10000)
      .click('button[ng-click="vm.saveGoal()"]')
      .pause(1000)

      /*Confirm Goal Template for all patients*/
       .waitForElementVisible('button[class="ui-pnotify-action-button"]', 10000)
       .click('button[class="ui-pnotify-action-button"]')   
       .pause(10000)

       /*Verify Goal was added*/
       .useXpath()
       .waitForElementVisible('//td[contains(.,"'+goals.title2+'")]',10000)

       .end();
    }
 };
