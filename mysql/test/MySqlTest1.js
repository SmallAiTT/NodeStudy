/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-18
 * Time: 上午11:42
 * To change this template use File | Settings | File Templates.
 */

var mysql = require("mysql");
var mc = mysql.createConnection({
    host : "localhost",
    database : "NodeStudy",
    user : "NodeStudy",
    password : "123456"
});

/*mc.connect();
mc.query("select * from dm_user", function(err, results, fileds){
    mc.end();
    if(err) return console.log(err);

    console.log(results);
    console.log(fileds);
});*/

mc.connect();
mc.query("insert into dm_user SET ? ", {name : "Test1"}, function(err){
    mc.end();
    if(err) return console.log(err);

    console.log(arguments);
});