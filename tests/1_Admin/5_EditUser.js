
module.exports = {
  'Edit User (Admin)' : function (browser) {
   var username = browser.globals.users.loginadmin; 
   var password = browser.globals.users.passwordadmin;
   var counselor = browser.globals.counselor;
   var loginpage = browser.page.login();
  
  /*Login*/
    loginpage.navigate()
          .signInAsAdmin(username, password)
          
    browser.maximizeWindow()
      .useCss()

      /*Search  for Megan Automated user*/
      .waitForElementVisible('input[name="searchableFullName"]', 10000)
      .pause(10000)
      .setValue('input[name="searchableFullName"]', counselor.name + ' ' + counselor.lastname)
      .pause(10000)

      /*Wait and access edit button*/
      .waitForElementVisible('button[value="Edit"]', 10000)
	  .useXpath()
	  .click('//*[@id="tableContainer"]/table/tbody/tr[1]/td[6]/button/i')
	  .useCss()
	  
      /*Edit fields*/
      .waitForElementVisible('input[name="userFacilities"]', 10000)
      .click('input[name="userFacilities"]')
      .pause(1000)
      .setValue('input[name="userFacilities"]', counselor.facility)
      .pause(1000)
      .keys(browser.Keys.ENTER)
      .pause(1000)
      .waitForElementVisible('textarea[name="notes"]', 10000)
      .setValue('textarea[name="notes"]', counselor.notes)
      
      /*Save user*/
      .useCss()
      //.waitForElementVisible('input[value="Save"]', 10000)
      //.click('input[value="Save"]')
	  .click ('label[class="btn-sm btn btn-primary review-btn"]')
      .pause(1000)
   
    .end();
  }
};
