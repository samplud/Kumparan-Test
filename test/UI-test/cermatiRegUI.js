var cermatiReg = require ('../../pages/cermatiReg.js');

module.exports = {
    '@tags' : ['cermatiRegUI'],
    before : function(browser){
        cermatiReg(browser).openBrowser();
    },
    
    'Go to Registration page': function(browser) {
        cermatiReg(browser).registrasi();
    },

    after :function(browser){
        browser.pause(5000);
        browser.end();
    }
}