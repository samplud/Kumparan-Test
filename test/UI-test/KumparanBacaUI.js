var utils = require ('../../pages/KumparanBaca.js');

module.exports = {
    '@tags' : ['KumparanBacaUI'],
    before : function(browser){
        utils(browser).openBrowser();
    },
    
    'Go to read news': function(browser) {
        utils(browser).BacaBerita();
    },

    after :function(browser){
        browser.pause(5000);
        browser.end();
    }
}