/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-11
 * Time: 上午11:56
 * To change this template use File | Settings | File Templates.
 */
var util = require("util");
var events = require("events");

function MyStream() {
    events.EventEmitter.call(this);
}

util.inherits(MyStream, events.EventEmitter);

MyStream.prototype.write = function(data) {
    this.emit("data", data);
}

var stream = new MyStream();

console.log(stream instanceof events.EventEmitter); // true
console.log(MyStream.super_ === events.EventEmitter); // true

stream.on("data", function(data) {
    console.log('Received data: "' + data + '"');
})
stream.write("It works!"); // 输出结果：Received data: "It works!"