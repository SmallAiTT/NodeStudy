/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-11
 * Time: 下午2:41
 * To change this template use File | Settings | File Templates.
 */

var os = require("os");

console.log(os.tmpdir());
console.log(os.endianness());
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log("a" + os.EOL + "b");