var utils = require ('../../pages/KumparanLogin.js');

module.exports = {
    '@tags' : ['KumparanLoginUI'],
    before : function(browser){
        utils(browser).openBrowser();
    },

    'Go to login page': function(browser) {
        utils(browser).loginMainButton();
    },
 
    'Fill login page': function(browser) {
        utils(browser).loginUser();
    },

    'Go to read news': function(browser) {
        utils(browser).BacaBerita();
    },

    after :function(browser){
        browser.pause(5000);
        browser.end();
    }
}