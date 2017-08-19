var date = new Date();
date.setDate(date.getDate()+1)


module.exports = {
  'Add Event (Counselor)' : function (browser) {
   var username = browser.globals.users.loginc; 
   var password = browser.globals.users.passwordc;
   var events = browser.globals.events;
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

       /*Wait for Add Event button*/
      .waitForElementVisible('button[ng-click="spc.newEvent()"]', 10000)
      .click('button[ng-click="spc.newEvent()"]')
      .pause(10000)
      .click('button[ng-click="spc.newEvent()"]')
     

     /*Fill new event details*/
      .waitForElementVisible('input[name="eventTitle"]', 10000)
      .clearValue('input[name="eventTitle"]')
      .setValue('input[name="eventTitle"]', events.title)

      .waitForElementVisible('button[ng-click="vm.openStartDate($event)"]', 10000)
      .click('button[ng-click="vm.openStartDate($event)"]')
      .waitForElementVisible('button[class="btn btn-sm btn-danger uib-clear ng-binding"]', 10000)
      .click('button[class="btn btn-sm btn-danger uib-clear ng-binding"]')
      .waitForElementVisible('input[name="startDate"]', 10000)
      .setValue('input[name="startDate"]', date.getFullYear() + '-'
                 + ('0' + (date.getMonth()+1)).slice(-2) + '-'
                 + ('0' + date.getDate()).slice(-2))

      .useXpath()
      .waitForElementVisible('//div[@name="initialTime"]/table/tbody/tr[2]/td/input', 10000)
      .clearValue('//div[@name="initialTime"]/table/tbody/tr[2]/td/input')
      .setValue('//div[@name="initialTime"]/table/tbody/tr[2]/td/input', events.initialHour)
      .pause(1000)

       .waitForElementVisible('//div[@name="finalTime"]/table/tbody/tr[2]/td/input', 10000)
       .clearValue('//div[@name="finalTime"]/table/tbody/tr[2]/td/input')
       .setValue('//div[@name="finalTime"]/table/tbody/tr[2]/td/input', events.finalHour)
       
       .useCss()
       /*Save Event*/
       .waitForElementVisible('input[value="Save"]', 10000)
       .click('input[value="Save"]')
       .pause(1000)

    .end();
  }
};

