/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-11
 * Time: 下午4:54
 * To change this template use File | Settings | File Templates.
 */
var dns = require('dns');

dns.resolve4('www.google.com', function (err, addresses) {
    if (err) throw err;

    console.log('地址: ' + JSON.stringify(addresses));

    addresses.forEach(function (a) {
        dns.reverse(a, function (err, domains) {
            if (err) {
                throw err;
            }

            console.log('反向解析 ' + a + ': ' + JSON.stringify(domains));
        });
    });
});