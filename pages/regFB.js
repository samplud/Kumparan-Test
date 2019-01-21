module.exports = function(browser) {
    this.openBrowser = function() {
        browser
            .windowMaximize()
            .url('https://web.facebook.com/')
            .waitForElementVisible('body', 1000);
        return browser;
    };  

    this.registrasi = function(){
        browser
            .setValue('#u_0_j','Haryadhi')
            .setValue('#u_0_l','Santoso')
            .setValue('#u_0_o','santoso220@gmail.com')
            .setValue('#u_0_r','santoso220@gmail.com')
            .setValue('#u_0_v','P@ssw0rd')
            .setValue ('#day','23')
            .setValue ('#month','Sep')
            .setValue ('#year','1990')
            .click('#u_0_a')
            .pause(2000)
            .click('#u_0_11')
            .pause(6000)
        return browser;
    };

    return this;
}