var date = new Date();
date.setDate(date.getDate()+2)


module.exports = {
  'Edit Event (Program Director)' : function (browser) {
   var username = browser.globals.users.loginpd; 
   var password = browser.globals.users.passwordpd;
   var events = browser.globals.events;
   var events_edit = browser.globals.events_edit;
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

       /*Wait for Manage Event Templates option*/
      .waitForElementVisible('a[ui-sref="eventsTemplate"]', 10000)
      .click('a[ui-sref="eventsTemplate"]')

      /*Wait for Program Type dropdown*/
      .waitForElementVisible('option[value="'+events.programType+'"]', 10000)
      .click('option[value="'+events.programType+'"]')
      .pause(1500)

      /*Wait for List view tab*/
      .waitForElementVisible('li[ng-click="ec.showedTabView = \'list-view\'; ec.eventsTable.reload();"]', 10000)
      .click('li[ng-click="ec.showedTabView = \'list-view\'; ec.eventsTable.reload();"]')

      /*Look for Automated Event*/
      .useXpath()
      .waitForElementVisible('//tr/td[contains(.,"'+events.title+'")]/following-sibling::td[2]/span', 10000)
      .click('//tr/td[contains(.,"'+events.title+'")]/following-sibling::td[2]/span')

      /*Edit event*/
      .useCss()
      .waitForElementVisible('input[name="eventTitle"]', 10000)
      .clearValue('input[name="eventTitle"]')
      .setValue('input[name="eventTitle"]', events_edit.title)

      .waitForElementVisible('button[ng-click="vm.openStartDate($event)"]', 10000)
      .click('button[ng-click="vm.openStartDate($event)"]')
      .waitForElementVisible('button[class="btn btn-sm btn-danger uib-clear ng-binding"]', 10000)
      .click('button[class="btn btn-sm btn-danger uib-clear ng-binding"]')
      .waitForElementVisible('input[name="startDate"]', 10000)
      .setValue('input[name="startDate"]', date.getFullYear() + '-'
                 + ('0' + (date.getMonth()+1)).slice(-2) + '-'
                 + ('0' + date.getDate()).slice(-2))

      .useXpath()
      .waitForElementVisible('//table[@class="uib-timepicker"]/tbody/tr[2]/td/input[@placeholder="HH"]', 10000)
      .clearValue('//table[@class="uib-timepicker"]/tbody/tr[2]/td/input[@placeholder="HH"]')
      .setValue('//table[@class="uib-timepicker"]/tbody/tr[2]/td/input[@placeholder="HH"]', events_edit.initialHour)
      .pause(1000)

       .waitForElementVisible('//table[@class="uib-timepicker"]/tbody/tr[2]/td/input[@placeholder="HH"]', 10000)
       .clearValue('//table[@class="uib-timepicker"]/tbody/tr[2]/td/input[@placeholder="HH"]')
       .setValue('//table[@class="uib-timepicker"]/tbody/tr[2]/td/input[@placeholder="HH"]', events_edit.finalHour)

       .useCss()
       /*Save Event*/
       .waitForElementVisible('input[value="Save"]', 10000)
       .click('input[value="Save"]')
       .pause(1000)

        /*Confirm Event for all patients*/
       .useXpath()
       .waitForElementVisible('//button[contains(.,"Yes")]', 10000)
       .click('//button[contains(.,"Yes")]')   
       .pause(1000)
   
   
    .end();
  }
};

