var index = require("./index.js");

var buffer = index.encode({a:1,b:3,c:"茶水费",d:{c:1,b:2}});
console.log(buffer);
var model = index.decode(buffer);
console.log(model);

var VChecker = require('v_checker');


var obj = {
	str: "123123",
	num: 1000,
	date: 1231231231,
	ary: 1,
	json: {
		a:1
	}
};
var vchecker = new VChecker(obj);

vchecker.requireArray("ary");
console.log(vchecker.error);