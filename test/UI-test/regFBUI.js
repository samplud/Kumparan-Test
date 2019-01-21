var regFB = require ('../../pages/regFB.js');

module.exports = {
    '@tags' : ['regFBUI'],
    before : function(browser){
        regFB(browser).openBrowser();
    },
    
    'Go to Registration page': function(browser) {
        regFB(browser).registrasi();
    },

    after :function(browser){
        browser.pause(5000);
        browser.end();
    }
}