/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-11
 * Time: 下午2:21
 * To change this template use File | Settings | File Templates.
 */

var path = require("path");

console.log(path.normalize("//foo/bar//baz/asd/fda//quux/"));
console.log(path.normalize("//foo/bar//baz/asd/fda//quux/.."));

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux'));
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

console.log(path.resolve('/foo/bar', './baz'));
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

//console.log(path.isAbsolute("/foo/bar"));
//console.log(path.isAbsolute("/baz/.."));
//console.log(path.isAbsolute("qux/"));
//console.log(path.isAbsolute("."));

console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));

console.log(path.dirname("/foo/bar/baz/asdf/quux"));

console.log(path.basename("/foo/bar/baz/asdf/test.html"));
console.log(path.basename("/foo/bar/baz/asdf/test.html", ".html"));
console.log(path.basename("/foo/bar/baz/asdf/test.html", ".js"));

console.log(path.extname("/foot/bar/baz.asdf/test.html"));

console.log("foot/bar/baz".split(path.sep));

console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));