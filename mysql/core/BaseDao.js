/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-18
 * Time: 下午2:30
 * To change this template use File | Settings | File Templates.
 */

function BaseDao(){

    this.select = function(tbName, cnd){
        var sql = "select * from " + tbName + cnd;

    };

};