
module.exports = {
  'Review Events (Counselor)' : function (browser) {
   var username = browser.globals.users.loginc; 
   var password = browser.globals.users.passwordc;
   var events = browser.globals.events;
   var patient = browser.globals.patient;
   var facility = browser.globals.facility;
   var loginpage = browser.page.login();

   /*Login*/
    loginpage.navigate()
             .signInAsAdmin(username, password)
   /**/

   browser
      .maximizeWindow()
      .useXpath()

      /*Switch to facility*/
      .waitForElementVisible('//select/option[contains(.,"'+facility.name+'")]', 10000)
      .click('//select/option[contains(.,"'+facility.name+'")]')
      /*Look for patient*/
      .waitForElementVisible('//button[contains(.,"'+patient.name+''+' '+''+patient.lastname+'")]', 10000)
      .click('//button[contains(.,"'+patient.name+''+' '+''+patient.lastname+'")]')

      /*Approve event*/
      .waitForElementVisible('//td[contains(.,"'+events.title+'")]/following-sibling::td[3]/div/label[contains(.,"yes")]', 10000)
      .click('//td[contains(.,"'+events.title+'")]/following-sibling::td[3]/div/label[contains(.,"yes")]')

      /*Verify event appears on attended*/
      .waitForElementVisible('//a[contains(.,"Attended")]', 10000)
      .click('//a[contains(.,"Attended")]')
      .waitForElementVisible('//td[contains(.,"'+events.title+'")]', 10000)
       .end();
    }
 };
