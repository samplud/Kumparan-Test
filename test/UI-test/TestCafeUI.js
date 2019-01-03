var utils = require ('../../pages/TestCafe.js');

module.exports = {
    '@tags' : ['TestCafeUI'],
    before : function(browser){
        utils(browser).openBrowser();
    },

    'Go to login page': function(browser) {
        utils(browser).Isilah();
    },
    
    after :function(browser){
        browser.pause(5000);
        browser.end();
    }

   
}