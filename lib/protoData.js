
var protobuf = require("protobufjs");

exports.Protocol = protobuf.protoFromFile(__dirname + "/proto/protocol.proto").build("proto").MessageHandler;
exports.Model = protobuf.protoFromFile(__dirname + "/proto/model.proto").build("proto");