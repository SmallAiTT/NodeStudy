/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-11
 * Time: 下午2:11
 * To change this template use File | Settings | File Templates.
 */
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What do you think of node.js? ", function(answer) {
    // TODO: 记录答案到数据库
    console.log("Thank you for your valuable feedback:", answer);

    rl.close();
});