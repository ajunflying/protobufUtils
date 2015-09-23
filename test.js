var index = require("./lib/index.js");

var buffer = index.encode({a:1,b:3,c:"茶水费",d:{c:1,b:2}});
console.log(buffer);
var model = index.decode(buffer);
console.log(model);