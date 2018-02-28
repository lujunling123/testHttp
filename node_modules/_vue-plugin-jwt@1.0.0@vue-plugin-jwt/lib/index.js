/**
 * Created by liumapp on ${DATE}.
 * E-mail:liumapp.com@gmail.com
 * home-page:http://www.liumapp.com
 */
var jwt = {}

jwt.install = function (Vue , options) {

    var opt = {
        defaultType: 'generateToken',
        store: null,
        url: 'http://localhost:9080/api/',
        axios: null
    };

    for (property in options) {
        opt[property] = options[property]
    };

    Vue.prototype.$jwt = function (tips, type) {

        var curType = type ? type : opt.defaultType

        switch (curType) {
            case 'generateToken':
                generateToken()
                break;
            case 'chkToken':
                return chkToken()
            default:
                console.log('get the wrong type !')
        }

    };

    ['generateToken', 'chkToken'].forEach(function (type){
        Vue.prototype.$jwt[type] = function (tips) {
            return Vue.prototype.$jwt(tips , type)
        }
    });

    var generateToken = function () {
        opt.axios({
            method: 'post',
            url: opt.url + 'token/test',
            data: {
                appId: 'i am appId',
                appSecret: 'i am appSecret'
            },
            timeout: 5000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
    };

    var callback = function (data) {
        console.log('this is callback')
    }

    var chkToken = function () {
        return true
    };


}

module.exports = jwt
