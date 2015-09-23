var protoData = require("./protoData.js");

module.exports = function(_obj){
	if(!_obj || typeof _obj != "object"){
		return;
	}
	var model = new protoData.Model.AcceptMessage();	
	model.msg = JSON.stringify(_obj);

	var buffer = model.encode().toArrayBuffer();
	buffer = new Buffer(new Uint8Array(buffer));
	return buffer;
}