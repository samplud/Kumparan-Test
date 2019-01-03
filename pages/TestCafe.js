module.exports = function(browser) {
    this.openBrowser = function() {
        browser
            .windowMaximize()
            .url('https://devexpress.github.io/testcafe/example/')
            .waitForElementVisible('body', 1000);
        return browser;
    };

    this.Isilah = function(){
        browser
            .setValue('#developer-name','Samplud')
            .click('#windows')
            .click('#main-form > div > div.row > div.column.col-1 > fieldset:nth-child(2) > p:nth-child(2) > label')
            .click('#main-form > div > div.row > div.column.col-1 > fieldset:nth-child(2) > p:nth-child(4) > label')
            .click('#main-form > div > div.row > div.column.col-1 > fieldset:nth-child(2) > p:nth-child(5) > label')
            .click("#preferred-interface option:nth-child(2)")
            .click('#tried-section > label')
            .click('#slider > span')
            .keys(browser.Keys.RIGHT_ARROW)
            .keys(browser.Keys.RIGHT_ARROW)
            .keys(browser.Keys.RIGHT_ARROW)
            .setValue('#comments','ini adalah test automation menggunakan testcafe')
            .pause(5000)
            .click('#submit-button')
            .pause(2000)
        return browser;
    };

    return this;
}