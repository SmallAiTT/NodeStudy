/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-11
 * Time: 下午12:02
 * To change this template use File | Settings | File Templates.
 */

var url = require("url");

var urlStr1 = "http://user:Pass@host.com:8080/p/a/t/h?query=string#hash";

console.log(url.parse(urlStr1))
console.log("--------------------------")
console.log(url.parse(urlStr1, true))
console.log("--------------------------")
console.log(url.parse(urlStr1, true, true))
console.log("--------------------------")
var urlObj = { protocol: 'http:',
    slashes: true,
    auth: 'user:Pass',
    host: 'host.com:8080',
    port: '8080',
    hostname: 'host.com',
    hash: '#hash',
    search: '?query=string',
    query: { query: 'string' },
    pathname: '/p/a/t/h',
    path: '/p/a/t/h?query=string',
    href: 'http://user:Pass@host.com:8080/p/a/t/h?query=string#hash'
};
console.log(url.format(urlObj));
console.log("--------------------------")

console.log(url.resolve('/one/two/three', 'four'));
console.log(url.resolve('/one/two/three/a', 'four'));
console.log(url.resolve('http://example.com/', '/two'));
console.log(url.resolve('http://example.com/one/', '/two'));
console.log(url.resolve('http://example.com/one/a', '/two'));
console.log("--------------------------");