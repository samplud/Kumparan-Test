const supertest = require('supertest');

const api = supertest('https://ace.tokopedia.com/');
const api2 = supertest('https://www.traveloka.com/');

const patch = 'search/product/v3';

function getAuth(body, resp) {
    api2.post('api/v2/user/idp/authorizeContext')
    .query(body)
    .set('accept', 'application/json')
    .set('content-type', 'application/json')
    .end((err, result) => {
        resp(err,result)
    });
}

function getList(param,resp) {
    api.get(patch)
    .query(param)
    .set('content-type', 'application/json')
    .end((err,result) => {
        resp(err, result)
    });
}

module.exports = {
    getList,
    getAuth
};