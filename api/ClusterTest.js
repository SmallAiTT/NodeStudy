/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-11
 * Time: 下午4:59
 * To change this template use File | Settings | File Templates.
 */
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // Fork 工作进程
    console.log(numCPUs);
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('工作进程 ' + worker.process.pid + ' 被终止');
    });
} else {
    // 工作进程可以共享任何 TCP 连接
    // 本例中为 HTTP 服务器
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(8000);
}