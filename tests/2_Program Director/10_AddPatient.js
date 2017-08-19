var date = new Date();

module.exports = {
  'Add Patient (Program Director)' : function (browser) {
   var username = browser.globals.users.loginpd; 
   var password = browser.globals.users.passwordpd;
   var patient = browser.globals.patient_pd;
   var loginpage = browser.page.login();
   var counselor = browser.globals.patient_pd.counselor;
  
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

      /*Wait for Manage Patient option*/
      .waitForElementVisible('a[ui-sref="managePatient"]', 10000)
      .click('a[ui-sref="managePatient"]')

      /*Wait for Add Patient button*/
      .waitForElementVisible('input[value="Add Patient"]', 10000)
      .click('input[value="Add Patient"]')

      /*Wait and fill Add Patient modal form*/
      .waitForElementVisible('input[id="firstName"]', 10000)
      .setValue('input[id="firstName"]', patient.name)
      .waitForElementVisible('input[id="lastName"]', 10000)
      .setValue('input[id="lastName"]', patient.lastname)
      .waitForElementVisible('input[id="username"]', 10000)
      .setValue('input[id="username"]', patient.username + Math.floor(Math.random() * 90 + 10))
      .waitForElementVisible('input[id="email"]', 10000)
      .setValue('input[id="email"]', patient.email)

      /*Birth Date*/
      .waitForElementVisible('button[ng-click="openBirthDate($event)"]', 10000)
      .click('button[ng-click="openBirthDate($event)"]')
      .waitForElementVisible('button[class="btn btn-sm btn-danger uib-clear ng-binding"]', 10000)
      .click('button[class="btn btn-sm btn-danger uib-clear ng-binding"]')
      .setValue('input[name="birthDate"]', patient.birthDate)
      /**/

      .waitForElementVisible('input[value="Male"]', 10000)
      .click('input[value="Male"]')

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
      .setValue('input[name="condition"]', patient.condition)
      .pause(1000)
      .keys(browser.Keys.ENTER)
      .pause(1000)
      /**/
      
      .waitForElementVisible('select[id="payer"]', 10000)
      .click('select[id="payer"]')
      .click('option[value="'+patient.payer+'"]')
      .waitForElementVisible('select[id="programType"]', 10000)
      .click('select[id="programType"]')
      .click('option[value="'+patient.programType+'"]')
      .waitForElementVisible('select[name="counselor"]', 10000)
      .click('select[name="counselor"]')
      .click('option[label="'+counselor+'"]')
      .waitForElementVisible('select[name="facility"]', 10000)
      .click('select[name="facility"]')
      .click('option[label="'+patient.facility+'"]')
      .pause(10000)
     
      /*Save changes*/
      .waitForElementVisible('input[value="Save"]', 10000)
      .click('input[value="Save"]')
      .pause(10000)
    
     /*Verify patient was added*/
     .assert.containsText('td[data-title="\'Name\'"]', patient.name + ' ' + patient.lastname)

      .end();
    }
 };
