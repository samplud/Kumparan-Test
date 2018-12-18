module.exports = function(browser) {
    this.openBrowser = function() {
        browser
            .windowMaximize()
            .url('https://kumparan.com/')
            .waitForElementVisible('body', 1000);
        return browser;
    };

    this.BacaBerita = function(){
        browser
            .click('#onesignal-popover-cancel-button')
            //.click('#onesignal-popover-cancel-button')
            .setValue('#content > div > div > div:nth-child(1) > div > nav > div > div.indexweb__TColumn-sc-78tqc5-1.dDQGEF > div:nth-child(3) > div > div > div > div > div.indexweb__TColumn-sc-78tqc5-1.dDQGEF > input','Jadwal Siaran Langsung Liga Inggris Akhir Pekan Ini, Ada Liverpool vs MU')
            .keys(browser.Keys.ENTER)
            .pause(3000)
            .click('#content > div > div > div.PageWrapper__ContainerWrapper-s12e5q4j-0.dgKpqA > div > div > div.View__StyledView-sc-1nce11s-0.dlZqSf > div > div.PageWrapper__ContentColumn-s12e5q4j-3.cvjbo > div > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(1) > div.View__StyledView-sc-1nce11s-0.drIZFe > div > div > div > div.indexweb__TColumn-sc-78tqc5-1.cbbcEU > div > a > div:nth-child(1) > div > span')
            .waitForElementVisible('body', 5000)
        return browser;
    };

    return this;
}