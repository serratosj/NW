

module.exports = {
  'Review Goals (Counselor)' : function (browser) {
   var username = browser.globals.users.loginc; 
   var password = browser.globals.users.passwordc;
   var goals = browser.globals.goals;
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

      /*Approve goal*/
      .waitForElementVisible('//td[contains(.,"'+goals.title+'")]/following-sibling::td[5]/div/label[contains(.,"yes")]', 10000)
      .click('//td[contains(.,"'+goals.title+'")]/following-sibling::td[5]/div/label[contains(.,"yes")]')

      /*Verify Goal appears on complete*/
      .waitForElementVisible('//a[contains(.,"Completed")]', 10000)
      .click('//a[contains(.,"Completed")]')
      .waitForElementVisible('//td[contains(.,"'+goals.title+'")]', 10000)
       .end();
    }
 };
