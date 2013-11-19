/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-11
 * Time: 下午2:59
 * To change this template use File | Settings | File Templates.
 */
var net = require('net');
var server = net.createServer(function(c) { // 'connection' 监听器
    console.log('服务器已连接');
    c.on('end', function() {
        console.log('服务器已断开');
    });
    c.write('hello\r\n');
    c.pipe(c);
});
server.listen(8124, function() { // 'listening' 监听器
    console.log('服务器已绑定');
});