/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-11
 * Time: 下午3:43
 * To change this template use File | Settings | File Templates.
 */
require("fs");
console.log('当前目录：' + process.cwd());
try {
    process.chdir('/tmp');
    console.log('新目录：' + process.cwd());
}
catch (err) {
    console.log('chdir: ' + err);
}