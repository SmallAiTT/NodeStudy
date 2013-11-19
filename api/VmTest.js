/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-11
 * Time: 下午5:22
 * To change this template use File | Settings | File Templates.
 */
var vm = require('vm');
var localVar = 'initial value';

var vmResult = vm.runInThisContext('localVar = "vm";');
console.log('vmResult: ', vmResult);
console.log('localVar: ', localVar);

var evalResult = eval('localVar = "eval";');
console.log('evalResult: ', evalResult);
console.log('localVar: ', localVar);

// vmResult: 'vm', localVar: 'initial value'
// evalResult: 'eval', localVar: 'eval'