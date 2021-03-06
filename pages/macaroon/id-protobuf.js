/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.MacaroonId', null, global);
goog.exportSymbol('proto.Op', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MacaroonId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MacaroonId.repeatedFields_, null);
};
goog.inherits(proto.MacaroonId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MacaroonId.displayName = 'proto.MacaroonId';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MacaroonId.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MacaroonId.prototype.toObject = function(opt_includeInstance) {
  return proto.MacaroonId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MacaroonId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MacaroonId.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: msg.getNonce_asB64(),
    storageid: msg.getStorageid_asB64(),
    opsList: jspb.Message.toObjectList(msg.getOpsList(),
    proto.Op.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MacaroonId}
 */
proto.MacaroonId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MacaroonId;
  return proto.MacaroonId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MacaroonId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MacaroonId}
 */
proto.MacaroonId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStorageid(value);
      break;
    case 3:
      var value = new proto.Op;
      reader.readMessage(value,proto.Op.deserializeBinaryFromReader);
      msg.addOps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MacaroonId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MacaroonId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MacaroonId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MacaroonId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getStorageid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.Op.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes nonce = 1;
 * @return {string}
 */
proto.MacaroonId.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes nonce = 1;
 * This is a type-conversion wrapper around `getNonce()`
 * @return {string}
 */
proto.MacaroonId.prototype.getNonce_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNonce()));
};


/**
 * optional bytes nonce = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNonce()`
 * @return {!Uint8Array}
 */
proto.MacaroonId.prototype.getNonce_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNonce()));
};


/** @param {!(string|Uint8Array)} value */
proto.MacaroonId.prototype.setNonce = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes storageId = 2;
 * @return {string}
 */
proto.MacaroonId.prototype.getStorageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes storageId = 2;
 * This is a type-conversion wrapper around `getStorageid()`
 * @return {string}
 */
proto.MacaroonId.prototype.getStorageid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStorageid()));
};


/**
 * optional bytes storageId = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStorageid()`
 * @return {!Uint8Array}
 */
proto.MacaroonId.prototype.getStorageid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStorageid()));
};


/** @param {!(string|Uint8Array)} value */
proto.MacaroonId.prototype.setStorageid = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated Op ops = 3;
 * @return {!Array.<!proto.Op>}
 */
proto.MacaroonId.prototype.getOpsList = function() {
  return /** @type{!Array.<!proto.Op>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Op, 3));
};


/** @param {!Array.<!proto.Op>} value */
proto.MacaroonId.prototype.setOpsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Op=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Op}
 */
proto.MacaroonId.prototype.addOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Op, opt_index);
};


proto.MacaroonId.prototype.clearOpsList = function() {
  this.setOpsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Op = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Op.repeatedFields_, null);
};
goog.inherits(proto.Op, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Op.displayName = 'proto.Op';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Op.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Op.prototype.toObject = function(opt_includeInstance) {
  return proto.Op.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Op} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Op.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    actionsList: jspb.Message.getRepeatedField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Op}
 */
proto.Op.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Op;
  return proto.Op.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Op} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Op}
 */
proto.Op.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Op.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Op.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Op} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Op.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string entity = 1;
 * @return {string}
 */
proto.Op.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Op.prototype.setEntity = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated string actions = 2;
 * @return {!Array.<string>}
 */
proto.Op.prototype.getActionsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array.<string>} value */
proto.Op.prototype.setActionsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.Op.prototype.addActions = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.Op.prototype.clearActionsList = function() {
  this.setActionsList([]);
};


goog.object.extend(exports, proto);
