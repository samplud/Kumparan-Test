module.exports = function(browser) {
    this.openBrowser = function() {
        browser
            .windowMaximize()
            .url('https://www.cermati.com/gabung')
            .waitForElementVisible('body', 1000);
        return browser;
    };  

    this.registrasi = function(){
        browser
            .setValue('#email','santoso229@gmail.com')
            .setValue('#password','P@ssw0rd')
            .setValue('#first-name','Test')
            .setValue('#last-name','Automation')
            .setValue('#mobile-phone','081280558341')
            .setValue('#residence-city','band')
            .pause(3000)
            .click('#ui-id-3')
            .pause(3000)
            .keys(browser.Keys.ENTER)
            //.click('#submit-join')
            .pause(5000)
        return browser;
    };

    return this;
}