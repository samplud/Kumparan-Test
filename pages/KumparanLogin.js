module.exports = function(browser) {
    this.openBrowser = function() {
        browser
            .windowMaximize()
            .deleteCookies()
            .url('https://kumparan.com/')
            .waitForElementVisible('body', 1000)
            .click('#onesignal-popover-cancel-button')
            .click('#onesignal-popover-cancel-button');
        return browser;
    };

    this.loginMainButton = function(){
        browser
            .click('#login > div > div > div.indexweb__SocialLogoContainer-hk3bgd-3.kyiToU > div:nth-child(1) > button > span > span > span')
            .waitForElementVisible('body', 5000)

        // Switch to new tab
        browser.window_handles(function (result) {
        // 0 == current main window, 1 == new tab
            var handle = result.value[1];
            browser.switchWindow(handle);
            });
        return browser;
    };

    this.loginUser = function(){
        browser
            .setValue('#email', 'uchiha_2402@yahoo.com')
            .setValue('#pass', 'zxc123')
            .click('#u_0_0')
            .pause(10000)

        browser.window_handles(function (result) {
            // 0 == current main window, 1 == new tab
            var handle = result.value[0];
            browser.switchWindow(handle);
            });
        
        return browser;
    };

    this.BacaBerita = function(){
        browser
            .setValue('#content > div > div > div:nth-child(1) > div > nav > div > div.indexweb__TColumn-sc-78tqc5-1.dDQGEF > div:nth-child(3) > div > div > div > div > div.indexweb__TColumn-sc-78tqc5-1.dDQGEF > input','Jadwal Siaran Langsung Liga Inggris Akhir Pekan Ini, Ada Liverpool vs MU')
            .keys(browser.Keys.ENTER)
            .pause(3000)
            .click('#content > div > div > div.PageWrapper__ContainerWrapper-s12e5q4j-0.dgKpqA > div > div > div.View__StyledView-sc-1nce11s-0.dlZqSf > div > div.PageWrapper__ContentColumn-s12e5q4j-3.cvjbo > div > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(1) > div.View__StyledView-sc-1nce11s-0.drIZFe > div > div > div > div.indexweb__TColumn-sc-78tqc5-1.cbbcEU > div > a > div:nth-child(1) > div > span')
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.DOWN_ARROW)
            .click('#content > div > div > div.PageWrapper__ContainerWrapper-s12e5q4j-0.dgKpqA > div > div > div.View__StyledView-sc-1nce11s-0.dlZqSf > div > div.PageWrapper__ContentColumn-s12e5q4j-3.cvjbo > div > div.View__StyledView-sc-1nce11s-0.gjmEbL > div > div > div > div.View__StyledView-sc-1nce11s-0.gpsWdY > div > div.View__StyledView-sc-1nce11s-0.khpuDQ > div > div.indexweb__TColumn-sc-78tqc5-1.dDQGEF > div > div > div > div > div.DraftEditor-editorContainer > div > div > div > div')
            .setValue('#content > div > div > div.PageWrapper__ContainerWrapper-s12e5q4j-0.dgKpqA > div > div > div.View__StyledView-sc-1nce11s-0.dlZqSf > div > div.PageWrapper__ContentColumn-s12e5q4j-3.cvjbo > div > div.View__StyledView-sc-1nce11s-0.gjmEbL > div > div > div > div.View__StyledView-sc-1nce11s-0.gpsWdY > div > div.View__StyledView-sc-1nce11s-0.khpuDQ > div > div.indexweb__TColumn-sc-78tqc5-1.dDQGEF > div > div > div > div > div','Mantap Arsenal')
            .click('#content > div > div > div.PageWrapper__ContainerWrapper-s12e5q4j-0.dgKpqA > div > div > div.View__StyledView-sc-1nce11s-0.dlZqSf > div > div.PageWrapper__ContentColumn-s12e5q4j-3.cvjbo > div > div.View__StyledView-sc-1nce11s-0.gjmEbL > div > div > div > div.View__StyledView-sc-1nce11s-0.gpsWdY > div > div.View__StyledView-sc-1nce11s-0.khpuDQ > div > div.indexweb__TColumn-sc-78tqc5-1.ifDyVo > a')
        return browser;
    };  

    return this;
}