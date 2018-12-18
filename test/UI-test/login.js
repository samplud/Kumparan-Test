var utils = require ('../../pages/utils.js');

module.exports = {
    '@tags' : ['login'],
    before : function(browser){
        utils(browser).openBrowser();
    },
    'Go to login page': function(browser) {
        utils(browser).loginMainButton();
    },
    'Fill login page': function(browser) {
        utils(browser).loginUser();
    },
    after :function(browser){
        browser.pause(5000);
        browser.end();
    }
}