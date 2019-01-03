var TestCafe = require ('../../pages/TestCafe.js');

module.exports = {
    '@tags' : ['TestCafeUI'],
    before : function(browser){
        TestCafe(browser).openBrowser();
    },

    'Go to login page': function(browser) {
        TestCafe(browser).Isilah();
    },
    
    after :function(browser){
        browser.pause(5000);
        browser.end();
    }

   
}