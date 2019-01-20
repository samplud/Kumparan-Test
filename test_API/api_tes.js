const {expect} = require('chai');
const blpage = require('../pages/api.js');
const data = require('./../helper/dataTp.json');

const testScenario = {
    testCase: {
        describe: 'Test API Tokopedia',
        itSearch1: 'Searching Xiaomi',
        itSearch2: 'Searching Samsung',
        itLogin: 'Login'
    },
};

describe(`${testScenario.testCase.describe}`, () => {
    it.skip(`${testScenario.testCase.itLogin}`, (done) => {
        blpage.getAuth(data.login, (err, resp) => {
            console.log(resp.body)
            expect(resp.status).to.equal(200);
            done();
        });
    });

    it(`${testScenario.testCase.itSearch1}`,(done) => {
        blpage.getList(data.search1, (err, resp) => {
            expect(resp.status).to.equal(200);
            //expect(resp.body.data.redirection.department_id).to.equal(0)
            expect(resp.body.data.q).to.equal(data.search1.q)
            done();
        });
    });

    it(`${testScenario.testCase.itSearch2}`,(done) => {
        blpage.getList(data.search2, (err, resp) => {
            expect(resp.status).to.equal(200);
            //expect(resp.body.data.redirection.department_id).to.equal(0)
            expect(resp.body.data.q).to.equal(data.search2.q)
            done();
        });
    });
});