/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Mensagem', null, global);
goog.exportSymbol('proto.Mensagem.Clima', null, global);
goog.exportSymbol('proto.Mensagem.Dolar', null, global);
goog.exportSymbol('proto.Mensagem.Previsao', null, global);

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
proto.Mensagem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Mensagem.repeatedFields_, null);
};
goog.inherits(proto.Mensagem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Mensagem.displayName = 'proto.Mensagem';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Mensagem.repeatedFields_ = [4];



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
proto.Mensagem.prototype.toObject = function(opt_includeInstance) {
  return proto.Mensagem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mensagem} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Mensagem.toObject = function(includeInstance, msg) {
  var f, obj = {
    cidade: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pais: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clima: (f = msg.getClima()) && proto.Mensagem.Clima.toObject(includeInstance, f),
    previsaoList: jspb.Message.toObjectList(msg.getPrevisaoList(),
    proto.Mensagem.Previsao.toObject, includeInstance),
    dolar: (f = msg.getDolar()) && proto.Mensagem.Dolar.toObject(includeInstance, f)
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
 * @return {!proto.Mensagem}
 */
proto.Mensagem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mensagem;
  return proto.Mensagem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mensagem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mensagem}
 */
proto.Mensagem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCidade(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPais(value);
      break;
    case 3:
      var value = new proto.Mensagem.Clima;
      reader.readMessage(value,proto.Mensagem.Clima.deserializeBinaryFromReader);
      msg.setClima(value);
      break;
    case 4:
      var value = new proto.Mensagem.Previsao;
      reader.readMessage(value,proto.Mensagem.Previsao.deserializeBinaryFromReader);
      msg.addPrevisao(value);
      break;
    case 5:
      var value = new proto.Mensagem.Dolar;
      reader.readMessage(value,proto.Mensagem.Dolar.deserializeBinaryFromReader);
      msg.setDolar(value);
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
proto.Mensagem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mensagem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mensagem} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Mensagem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCidade();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPais();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClima();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.Mensagem.Clima.serializeBinaryToWriter
    );
  }
  f = message.getPrevisaoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.Mensagem.Previsao.serializeBinaryToWriter
    );
  }
  f = message.getDolar();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.Mensagem.Dolar.serializeBinaryToWriter
    );
  }
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
proto.Mensagem.Clima = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mensagem.Clima, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Mensagem.Clima.displayName = 'proto.Mensagem.Clima';
}


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
proto.Mensagem.Clima.prototype.toObject = function(opt_includeInstance) {
  return proto.Mensagem.Clima.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mensagem.Clima} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Mensagem.Clima.toObject = function(includeInstance, msg) {
  var f, obj = {
    descricao: jspb.Message.getFieldWithDefault(msg, 1, ""),
    icone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    temperatura: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    umidade: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    pressao: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    minima: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    maxima: +jspb.Message.getFieldWithDefault(msg, 7, 0.0)
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
 * @return {!proto.Mensagem.Clima}
 */
proto.Mensagem.Clima.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mensagem.Clima;
  return proto.Mensagem.Clima.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mensagem.Clima} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mensagem.Clima}
 */
proto.Mensagem.Clima.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescricao(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcone(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTemperatura(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setUmidade(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPressao(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinima(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxima(value);
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
proto.Mensagem.Clima.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mensagem.Clima.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mensagem.Clima} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Mensagem.Clima.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescricao();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIcone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTemperatura();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getUmidade();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getPressao();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getMinima();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getMaxima();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
};


/**
 * optional string descricao = 1;
 * @return {string}
 */
proto.Mensagem.Clima.prototype.getDescricao = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Mensagem.Clima.prototype.setDescricao = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string icone = 2;
 * @return {string}
 */
proto.Mensagem.Clima.prototype.getIcone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Mensagem.Clima.prototype.setIcone = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional float temperatura = 3;
 * @return {number}
 */
proto.Mensagem.Clima.prototype.getTemperatura = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.Mensagem.Clima.prototype.setTemperatura = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional float umidade = 4;
 * @return {number}
 */
proto.Mensagem.Clima.prototype.getUmidade = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.Mensagem.Clima.prototype.setUmidade = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional float pressao = 5;
 * @return {number}
 */
proto.Mensagem.Clima.prototype.getPressao = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.Mensagem.Clima.prototype.setPressao = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional float minima = 6;
 * @return {number}
 */
proto.Mensagem.Clima.prototype.getMinima = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.Mensagem.Clima.prototype.setMinima = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional float maxima = 7;
 * @return {number}
 */
proto.Mensagem.Clima.prototype.getMaxima = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.Mensagem.Clima.prototype.setMaxima = function(value) {
  jspb.Message.setField(this, 7, value);
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
proto.Mensagem.Previsao = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mensagem.Previsao, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Mensagem.Previsao.displayName = 'proto.Mensagem.Previsao';
}


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
proto.Mensagem.Previsao.prototype.toObject = function(opt_includeInstance) {
  return proto.Mensagem.Previsao.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mensagem.Previsao} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Mensagem.Previsao.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: jspb.Message.getFieldWithDefault(msg, 1, ""),
    descricao: jspb.Message.getFieldWithDefault(msg, 2, ""),
    icone: jspb.Message.getFieldWithDefault(msg, 3, ""),
    minima: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    maxima: +jspb.Message.getFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.Mensagem.Previsao}
 */
proto.Mensagem.Previsao.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mensagem.Previsao;
  return proto.Mensagem.Previsao.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mensagem.Previsao} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mensagem.Previsao}
 */
proto.Mensagem.Previsao.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescricao(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcone(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinima(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxima(value);
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
proto.Mensagem.Previsao.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mensagem.Previsao.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mensagem.Previsao} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Mensagem.Previsao.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescricao();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIcone();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMinima();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getMaxima();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
};


/**
 * optional string data = 1;
 * @return {string}
 */
proto.Mensagem.Previsao.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Mensagem.Previsao.prototype.setData = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string descricao = 2;
 * @return {string}
 */
proto.Mensagem.Previsao.prototype.getDescricao = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Mensagem.Previsao.prototype.setDescricao = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string icone = 3;
 * @return {string}
 */
proto.Mensagem.Previsao.prototype.getIcone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.Mensagem.Previsao.prototype.setIcone = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional float minima = 4;
 * @return {number}
 */
proto.Mensagem.Previsao.prototype.getMinima = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.Mensagem.Previsao.prototype.setMinima = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional float maxima = 5;
 * @return {number}
 */
proto.Mensagem.Previsao.prototype.getMaxima = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.Mensagem.Previsao.prototype.setMaxima = function(value) {
  jspb.Message.setField(this, 5, value);
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
proto.Mensagem.Dolar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mensagem.Dolar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Mensagem.Dolar.displayName = 'proto.Mensagem.Dolar';
}


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
proto.Mensagem.Dolar.prototype.toObject = function(opt_includeInstance) {
  return proto.Mensagem.Dolar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mensagem.Dolar} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Mensagem.Dolar.toObject = function(includeInstance, msg) {
  var f, obj = {
    moeda: jspb.Message.getFieldWithDefault(msg, 1, ""),
    valor: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.Mensagem.Dolar}
 */
proto.Mensagem.Dolar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mensagem.Dolar;
  return proto.Mensagem.Dolar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mensagem.Dolar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mensagem.Dolar}
 */
proto.Mensagem.Dolar.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMoeda(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValor(value);
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
proto.Mensagem.Dolar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mensagem.Dolar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mensagem.Dolar} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Mensagem.Dolar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMoeda();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValor();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional string moeda = 1;
 * @return {string}
 */
proto.Mensagem.Dolar.prototype.getMoeda = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Mensagem.Dolar.prototype.setMoeda = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional float valor = 2;
 * @return {number}
 */
proto.Mensagem.Dolar.prototype.getValor = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.Mensagem.Dolar.prototype.setValor = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string cidade = 1;
 * @return {string}
 */
proto.Mensagem.prototype.getCidade = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Mensagem.prototype.setCidade = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string pais = 2;
 * @return {string}
 */
proto.Mensagem.prototype.getPais = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Mensagem.prototype.setPais = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Clima clima = 3;
 * @return {?proto.Mensagem.Clima}
 */
proto.Mensagem.prototype.getClima = function() {
  return /** @type{?proto.Mensagem.Clima} */ (
    jspb.Message.getWrapperField(this, proto.Mensagem.Clima, 3));
};


/** @param {?proto.Mensagem.Clima|undefined} value */
proto.Mensagem.prototype.setClima = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.Mensagem.prototype.clearClima = function() {
  this.setClima(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Mensagem.prototype.hasClima = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Previsao previsao = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.Mensagem.Previsao>}
 */
proto.Mensagem.prototype.getPrevisaoList = function() {
  return /** @type{!Array.<!proto.Mensagem.Previsao>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Mensagem.Previsao, 4));
};


/** @param {!Array.<!proto.Mensagem.Previsao>} value */
proto.Mensagem.prototype.setPrevisaoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.Mensagem.Previsao=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Mensagem.Previsao}
 */
proto.Mensagem.prototype.addPrevisao = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Mensagem.Previsao, opt_index);
};


proto.Mensagem.prototype.clearPrevisaoList = function() {
  this.setPrevisaoList([]);
};


/**
 * optional Dolar dolar = 5;
 * @return {?proto.Mensagem.Dolar}
 */
proto.Mensagem.prototype.getDolar = function() {
  return /** @type{?proto.Mensagem.Dolar} */ (
    jspb.Message.getWrapperField(this, proto.Mensagem.Dolar, 5));
};


/** @param {?proto.Mensagem.Dolar|undefined} value */
proto.Mensagem.prototype.setDolar = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.Mensagem.prototype.clearDolar = function() {
  this.setDolar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Mensagem.prototype.hasDolar = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto);
