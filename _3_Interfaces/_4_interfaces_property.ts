interface LoginInterface {
    username: string,
    password: string
}

var loginFunc: (userinfo: LoginInterface) => boolean;

var myAdmin: LoginInterface = { username: 'admin', password: '123456' };

loginFunc = function (userinfo: LoginInterface) {

    if (userinfo.username !== undefined && userinfo.password !== undefined) {
        return true;
    }
    return false;
};

console.log(loginFunc(myAdmin));




