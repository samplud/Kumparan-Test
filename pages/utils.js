module.exports = function(browser) {
    this.openBrowser = function() {
        browser
            .windowMaximize()
            .url('https://www.bukalapak.com/')
            .waitForElementVisible('body', 1000);
        return browser;
    };

    this.loginMainButton = function(){
        browser
            .click('#login_link')
            .waitForElementVisible('body', 5000)
        return browser;
    };

    this.loginUser = function(){
        browser
            .setValue('#user_session_username', 'budygalaxy')
            .setValue('#user_session_password', 'sakuragi')
            .click('#new_user_session > div:nth-child(3) > div:nth-child(5) > button.c-btn.c-btn--red.c-btn--block.js-btn-menu-login.js-tfa-required-button')
            .pause(3000)
        return browser;
    };
    return this;
}