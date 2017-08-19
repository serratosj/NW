

module.exports = {  
  url:  function() {
    return this.api.launchUrl;
  },
  elements: {
    logo: {
      selector: '//img[@src="img/itether_logo.png"]',
      locateStrategy: 'xpath'
    },
    usernameField: {
      selector: 'input[type="text"]',
     //locateStrategy: 'xpath'
    },
    passwordField: {
      selector: 'input[type="password"]',
      //locateStrategy: 'xpath'
    },
    submit: {
      selector: 'input[type="submit"]',
      //locateStrategy: 'xpath'
    }
  },
  commands: [{
    signInAsAdmin: function(username, password) {
      return this.waitForElementVisible('@logo', 10000)
                 .setValue('@usernameField', username)
                 .setValue('@passwordField', password)
                 .click('@submit')
                  this.api.pause(10000);
    }
  }]
};