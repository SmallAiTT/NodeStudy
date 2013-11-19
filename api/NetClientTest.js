/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-11
 * Time: 下午3:03
 * To change this template use File | Settings | File Templates.
 */

var net = require('net');
var client = net.connect({port: 8124},
    function() { //'connect' 监听器
        console.log('client connected');
        client.write('world!\r\n');
        client.write("fdfdfd\r\n")
    });
client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});
client.on('end', function() {
    console.log('客户端断开连接');
});