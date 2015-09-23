var protoData = require("./protoData.js");

module.exports = function(buf){
	if(!buf){
		console.log("buf not allow empty");
		return;
	}
	if(typeof buf != "object"){
		console.log("buf type not buffer");
		return;
	}
	var _model = protoData.Model["AcceptMessage"].decode(buf);	
	return JSON.parse(_model.msg);
}