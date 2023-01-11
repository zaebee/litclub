/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.models = (function() {

    /**
     * Namespace models.
     * @exports models
     * @namespace
     */
    var models = {};

    models.Author = (function() {

        /**
         * Properties of an Author.
         * @memberof models
         * @interface IAuthor
         * @property {number|null} [ID] Author ID
         * @property {string|null} [firstName] Author firstName
         * @property {string|null} [lastName] Author lastName
         * @property {string|null} [bio] Author bio
         */

        /**
         * Constructs a new Author.
         * @memberof models
         * @classdesc Represents an Author.
         * @implements IAuthor
         * @constructor
         * @param {models.IAuthor=} [properties] Properties to set
         */
        function Author(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Author ID.
         * @member {number} ID
         * @memberof models.Author
         * @instance
         */
        Author.prototype.ID = 0;

        /**
         * Author firstName.
         * @member {string} firstName
         * @memberof models.Author
         * @instance
         */
        Author.prototype.firstName = "";

        /**
         * Author lastName.
         * @member {string} lastName
         * @memberof models.Author
         * @instance
         */
        Author.prototype.lastName = "";

        /**
         * Author bio.
         * @member {string} bio
         * @memberof models.Author
         * @instance
         */
        Author.prototype.bio = "";

        /**
         * Creates a new Author instance using the specified properties.
         * @function create
         * @memberof models.Author
         * @static
         * @param {models.IAuthor=} [properties] Properties to set
         * @returns {models.Author} Author instance
         */
        Author.create = function create(properties) {
            return new Author(properties);
        };

        /**
         * Encodes the specified Author message. Does not implicitly {@link models.Author.verify|verify} messages.
         * @function encode
         * @memberof models.Author
         * @static
         * @param {models.IAuthor} message Author message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Author.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.firstName);
            if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastName);
            if (message.bio != null && Object.hasOwnProperty.call(message, "bio"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.bio);
            return writer;
        };

        /**
         * Encodes the specified Author message, length delimited. Does not implicitly {@link models.Author.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Author
         * @static
         * @param {models.IAuthor} message Author message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Author.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Author message from the specified reader or buffer.
         * @function decode
         * @memberof models.Author
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Author} Author
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Author.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Author();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ID = reader.uint32();
                        break;
                    }
                case 2: {
                        message.firstName = reader.string();
                        break;
                    }
                case 3: {
                        message.lastName = reader.string();
                        break;
                    }
                case 4: {
                        message.bio = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Author message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Author
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Author} Author
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Author.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Author message.
         * @function verify
         * @memberof models.Author
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Author.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                if (!$util.isString(message.firstName))
                    return "firstName: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.bio != null && message.hasOwnProperty("bio"))
                if (!$util.isString(message.bio))
                    return "bio: string expected";
            return null;
        };

        /**
         * Creates an Author message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Author
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Author} Author
         */
        Author.fromObject = function fromObject(object) {
            if (object instanceof $root.models.Author)
                return object;
            var message = new $root.models.Author();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.bio != null)
                message.bio = String(object.bio);
            return message;
        };

        /**
         * Creates a plain object from an Author message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Author
         * @static
         * @param {models.Author} message Author
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Author.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.firstName = "";
                object.lastName = "";
                object.bio = "";
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.bio != null && message.hasOwnProperty("bio"))
                object.bio = message.bio;
            return object;
        };

        /**
         * Converts this Author to JSON.
         * @function toJSON
         * @memberof models.Author
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Author.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Author
         * @function getTypeUrl
         * @memberof models.Author
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Author.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.Author";
        };

        return Author;
    })();

    models.CommentType = (function() {

        /**
         * Properties of a CommentType.
         * @memberof models
         * @interface ICommentType
         * @property {number|null} [ID] CommentType ID
         * @property {string|null} [type] CommentType type
         */

        /**
         * Constructs a new CommentType.
         * @memberof models
         * @classdesc Represents a CommentType.
         * @implements ICommentType
         * @constructor
         * @param {models.ICommentType=} [properties] Properties to set
         */
        function CommentType(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommentType ID.
         * @member {number} ID
         * @memberof models.CommentType
         * @instance
         */
        CommentType.prototype.ID = 0;

        /**
         * CommentType type.
         * @member {string} type
         * @memberof models.CommentType
         * @instance
         */
        CommentType.prototype.type = "";

        /**
         * Creates a new CommentType instance using the specified properties.
         * @function create
         * @memberof models.CommentType
         * @static
         * @param {models.ICommentType=} [properties] Properties to set
         * @returns {models.CommentType} CommentType instance
         */
        CommentType.create = function create(properties) {
            return new CommentType(properties);
        };

        /**
         * Encodes the specified CommentType message. Does not implicitly {@link models.CommentType.verify|verify} messages.
         * @function encode
         * @memberof models.CommentType
         * @static
         * @param {models.ICommentType} message CommentType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommentType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            return writer;
        };

        /**
         * Encodes the specified CommentType message, length delimited. Does not implicitly {@link models.CommentType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.CommentType
         * @static
         * @param {models.ICommentType} message CommentType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommentType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommentType message from the specified reader or buffer.
         * @function decode
         * @memberof models.CommentType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.CommentType} CommentType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommentType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.CommentType();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ID = reader.uint32();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommentType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.CommentType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.CommentType} CommentType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommentType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommentType message.
         * @function verify
         * @memberof models.CommentType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommentType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            return null;
        };

        /**
         * Creates a CommentType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.CommentType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.CommentType} CommentType
         */
        CommentType.fromObject = function fromObject(object) {
            if (object instanceof $root.models.CommentType)
                return object;
            var message = new $root.models.CommentType();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };

        /**
         * Creates a plain object from a CommentType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.CommentType
         * @static
         * @param {models.CommentType} message CommentType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommentType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.type = "";
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this CommentType to JSON.
         * @function toJSON
         * @memberof models.CommentType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommentType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CommentType
         * @function getTypeUrl
         * @memberof models.CommentType
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CommentType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.CommentType";
        };

        return CommentType;
    })();

    models.Comment = (function() {

        /**
         * Properties of a Comment.
         * @memberof models
         * @interface IComment
         * @property {number|null} [ID] Comment ID
         * @property {models.IUser|null} [user] Comment user
         * @property {models.ICommentType|null} [type] Comment type
         * @property {string|null} [content] Comment content
         * @property {boolean|null} [visible] Comment visible
         */

        /**
         * Constructs a new Comment.
         * @memberof models
         * @classdesc Represents a Comment.
         * @implements IComment
         * @constructor
         * @param {models.IComment=} [properties] Properties to set
         */
        function Comment(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Comment ID.
         * @member {number} ID
         * @memberof models.Comment
         * @instance
         */
        Comment.prototype.ID = 0;

        /**
         * Comment user.
         * @member {models.IUser|null|undefined} user
         * @memberof models.Comment
         * @instance
         */
        Comment.prototype.user = null;

        /**
         * Comment type.
         * @member {models.ICommentType|null|undefined} type
         * @memberof models.Comment
         * @instance
         */
        Comment.prototype.type = null;

        /**
         * Comment content.
         * @member {string} content
         * @memberof models.Comment
         * @instance
         */
        Comment.prototype.content = "";

        /**
         * Comment visible.
         * @member {boolean} visible
         * @memberof models.Comment
         * @instance
         */
        Comment.prototype.visible = false;

        /**
         * Creates a new Comment instance using the specified properties.
         * @function create
         * @memberof models.Comment
         * @static
         * @param {models.IComment=} [properties] Properties to set
         * @returns {models.Comment} Comment instance
         */
        Comment.create = function create(properties) {
            return new Comment(properties);
        };

        /**
         * Encodes the specified Comment message. Does not implicitly {@link models.Comment.verify|verify} messages.
         * @function encode
         * @memberof models.Comment
         * @static
         * @param {models.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.models.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                $root.models.CommentType.encode(message.type, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.visible);
            return writer;
        };

        /**
         * Encodes the specified Comment message, length delimited. Does not implicitly {@link models.Comment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Comment
         * @static
         * @param {models.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Comment message from the specified reader or buffer.
         * @function decode
         * @memberof models.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Comment();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ID = reader.uint32();
                        break;
                    }
                case 2: {
                        message.user = $root.models.User.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.type = $root.models.CommentType.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.content = reader.string();
                        break;
                    }
                case 5: {
                        message.visible = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Comment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Comment message.
         * @function verify
         * @memberof models.Comment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Comment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.models.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.type != null && message.hasOwnProperty("type")) {
                var error = $root.models.CommentType.verify(message.type);
                if (error)
                    return "type." + error;
            }
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.visible != null && message.hasOwnProperty("visible"))
                if (typeof message.visible !== "boolean")
                    return "visible: boolean expected";
            return null;
        };

        /**
         * Creates a Comment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Comment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Comment} Comment
         */
        Comment.fromObject = function fromObject(object) {
            if (object instanceof $root.models.Comment)
                return object;
            var message = new $root.models.Comment();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".models.Comment.user: object expected");
                message.user = $root.models.User.fromObject(object.user);
            }
            if (object.type != null) {
                if (typeof object.type !== "object")
                    throw TypeError(".models.Comment.type: object expected");
                message.type = $root.models.CommentType.fromObject(object.type);
            }
            if (object.content != null)
                message.content = String(object.content);
            if (object.visible != null)
                message.visible = Boolean(object.visible);
            return message;
        };

        /**
         * Creates a plain object from a Comment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Comment
         * @static
         * @param {models.Comment} message Comment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Comment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.user = null;
                object.type = null;
                object.content = "";
                object.visible = false;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.models.User.toObject(message.user, options);
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = $root.models.CommentType.toObject(message.type, options);
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.visible != null && message.hasOwnProperty("visible"))
                object.visible = message.visible;
            return object;
        };

        /**
         * Converts this Comment to JSON.
         * @function toJSON
         * @memberof models.Comment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Comment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Comment
         * @function getTypeUrl
         * @memberof models.Comment
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Comment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.Comment";
        };

        return Comment;
    })();

    models.Book = (function() {

        /**
         * Properties of a Book.
         * @memberof models
         * @interface IBook
         * @property {number|null} [ID] Book ID
         * @property {string|null} [title] Book title
         * @property {string|null} [cover] Book cover
         * @property {models.IAuthor|null} [author] Book author
         * @property {Array.<models.IComment>|null} [cites] Book cites
         * @property {Array.<models.IComment>|null} [takeovers] Book takeovers
         * @property {Array.<models.IComment>|null} [comments] Book comments
         */

        /**
         * Constructs a new Book.
         * @memberof models
         * @classdesc Represents a Book.
         * @implements IBook
         * @constructor
         * @param {models.IBook=} [properties] Properties to set
         */
        function Book(properties) {
            this.cites = [];
            this.takeovers = [];
            this.comments = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Book ID.
         * @member {number} ID
         * @memberof models.Book
         * @instance
         */
        Book.prototype.ID = 0;

        /**
         * Book title.
         * @member {string} title
         * @memberof models.Book
         * @instance
         */
        Book.prototype.title = "";

        /**
         * Book cover.
         * @member {string} cover
         * @memberof models.Book
         * @instance
         */
        Book.prototype.cover = "";

        /**
         * Book author.
         * @member {models.IAuthor|null|undefined} author
         * @memberof models.Book
         * @instance
         */
        Book.prototype.author = null;

        /**
         * Book cites.
         * @member {Array.<models.IComment>} cites
         * @memberof models.Book
         * @instance
         */
        Book.prototype.cites = $util.emptyArray;

        /**
         * Book takeovers.
         * @member {Array.<models.IComment>} takeovers
         * @memberof models.Book
         * @instance
         */
        Book.prototype.takeovers = $util.emptyArray;

        /**
         * Book comments.
         * @member {Array.<models.IComment>} comments
         * @memberof models.Book
         * @instance
         */
        Book.prototype.comments = $util.emptyArray;

        /**
         * Creates a new Book instance using the specified properties.
         * @function create
         * @memberof models.Book
         * @static
         * @param {models.IBook=} [properties] Properties to set
         * @returns {models.Book} Book instance
         */
        Book.create = function create(properties) {
            return new Book(properties);
        };

        /**
         * Encodes the specified Book message. Does not implicitly {@link models.Book.verify|verify} messages.
         * @function encode
         * @memberof models.Book
         * @static
         * @param {models.IBook} message Book message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Book.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.cover != null && Object.hasOwnProperty.call(message, "cover"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.cover);
            if (message.author != null && Object.hasOwnProperty.call(message, "author"))
                $root.models.Author.encode(message.author, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.cites != null && message.cites.length)
                for (var i = 0; i < message.cites.length; ++i)
                    $root.models.Comment.encode(message.cites[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.takeovers != null && message.takeovers.length)
                for (var i = 0; i < message.takeovers.length; ++i)
                    $root.models.Comment.encode(message.takeovers[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.comments != null && message.comments.length)
                for (var i = 0; i < message.comments.length; ++i)
                    $root.models.Comment.encode(message.comments[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Book message, length delimited. Does not implicitly {@link models.Book.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Book
         * @static
         * @param {models.IBook} message Book message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Book.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Book message from the specified reader or buffer.
         * @function decode
         * @memberof models.Book
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Book} Book
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Book.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Book();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ID = reader.uint32();
                        break;
                    }
                case 2: {
                        message.title = reader.string();
                        break;
                    }
                case 3: {
                        message.cover = reader.string();
                        break;
                    }
                case 4: {
                        message.author = $root.models.Author.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        if (!(message.cites && message.cites.length))
                            message.cites = [];
                        message.cites.push($root.models.Comment.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        if (!(message.takeovers && message.takeovers.length))
                            message.takeovers = [];
                        message.takeovers.push($root.models.Comment.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        if (!(message.comments && message.comments.length))
                            message.comments = [];
                        message.comments.push($root.models.Comment.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Book message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Book
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Book} Book
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Book.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Book message.
         * @function verify
         * @memberof models.Book
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Book.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.cover != null && message.hasOwnProperty("cover"))
                if (!$util.isString(message.cover))
                    return "cover: string expected";
            if (message.author != null && message.hasOwnProperty("author")) {
                var error = $root.models.Author.verify(message.author);
                if (error)
                    return "author." + error;
            }
            if (message.cites != null && message.hasOwnProperty("cites")) {
                if (!Array.isArray(message.cites))
                    return "cites: array expected";
                for (var i = 0; i < message.cites.length; ++i) {
                    var error = $root.models.Comment.verify(message.cites[i]);
                    if (error)
                        return "cites." + error;
                }
            }
            if (message.takeovers != null && message.hasOwnProperty("takeovers")) {
                if (!Array.isArray(message.takeovers))
                    return "takeovers: array expected";
                for (var i = 0; i < message.takeovers.length; ++i) {
                    var error = $root.models.Comment.verify(message.takeovers[i]);
                    if (error)
                        return "takeovers." + error;
                }
            }
            if (message.comments != null && message.hasOwnProperty("comments")) {
                if (!Array.isArray(message.comments))
                    return "comments: array expected";
                for (var i = 0; i < message.comments.length; ++i) {
                    var error = $root.models.Comment.verify(message.comments[i]);
                    if (error)
                        return "comments." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Book message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Book
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Book} Book
         */
        Book.fromObject = function fromObject(object) {
            if (object instanceof $root.models.Book)
                return object;
            var message = new $root.models.Book();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.cover != null)
                message.cover = String(object.cover);
            if (object.author != null) {
                if (typeof object.author !== "object")
                    throw TypeError(".models.Book.author: object expected");
                message.author = $root.models.Author.fromObject(object.author);
            }
            if (object.cites) {
                if (!Array.isArray(object.cites))
                    throw TypeError(".models.Book.cites: array expected");
                message.cites = [];
                for (var i = 0; i < object.cites.length; ++i) {
                    if (typeof object.cites[i] !== "object")
                        throw TypeError(".models.Book.cites: object expected");
                    message.cites[i] = $root.models.Comment.fromObject(object.cites[i]);
                }
            }
            if (object.takeovers) {
                if (!Array.isArray(object.takeovers))
                    throw TypeError(".models.Book.takeovers: array expected");
                message.takeovers = [];
                for (var i = 0; i < object.takeovers.length; ++i) {
                    if (typeof object.takeovers[i] !== "object")
                        throw TypeError(".models.Book.takeovers: object expected");
                    message.takeovers[i] = $root.models.Comment.fromObject(object.takeovers[i]);
                }
            }
            if (object.comments) {
                if (!Array.isArray(object.comments))
                    throw TypeError(".models.Book.comments: array expected");
                message.comments = [];
                for (var i = 0; i < object.comments.length; ++i) {
                    if (typeof object.comments[i] !== "object")
                        throw TypeError(".models.Book.comments: object expected");
                    message.comments[i] = $root.models.Comment.fromObject(object.comments[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Book message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Book
         * @static
         * @param {models.Book} message Book
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Book.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.cites = [];
                object.takeovers = [];
                object.comments = [];
            }
            if (options.defaults) {
                object.ID = 0;
                object.title = "";
                object.cover = "";
                object.author = null;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.cover != null && message.hasOwnProperty("cover"))
                object.cover = message.cover;
            if (message.author != null && message.hasOwnProperty("author"))
                object.author = $root.models.Author.toObject(message.author, options);
            if (message.cites && message.cites.length) {
                object.cites = [];
                for (var j = 0; j < message.cites.length; ++j)
                    object.cites[j] = $root.models.Comment.toObject(message.cites[j], options);
            }
            if (message.takeovers && message.takeovers.length) {
                object.takeovers = [];
                for (var j = 0; j < message.takeovers.length; ++j)
                    object.takeovers[j] = $root.models.Comment.toObject(message.takeovers[j], options);
            }
            if (message.comments && message.comments.length) {
                object.comments = [];
                for (var j = 0; j < message.comments.length; ++j)
                    object.comments[j] = $root.models.Comment.toObject(message.comments[j], options);
            }
            return object;
        };

        /**
         * Converts this Book to JSON.
         * @function toJSON
         * @memberof models.Book
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Book.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Book
         * @function getTypeUrl
         * @memberof models.Book
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Book.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.Book";
        };

        return Book;
    })();

    models.User = (function() {

        /**
         * Properties of a User.
         * @memberof models
         * @interface IUser
         * @property {number|null} [ID] User ID
         * @property {number|null} [createdAt] User createdAt
         * @property {number|null} [updatedAt] User updatedAt
         * @property {string|null} [firstName] User firstName
         * @property {string|null} [lastName] User lastName
         * @property {string|null} [email] User email
         * @property {models.User.Role|null} [role] User role
         * @property {Array.<models.IBook>|null} [books] User books
         */

        /**
         * Constructs a new User.
         * @memberof models
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {models.IUser=} [properties] Properties to set
         */
        function User(properties) {
            this.books = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User ID.
         * @member {number} ID
         * @memberof models.User
         * @instance
         */
        User.prototype.ID = 0;

        /**
         * User createdAt.
         * @member {number} createdAt
         * @memberof models.User
         * @instance
         */
        User.prototype.createdAt = 0;

        /**
         * User updatedAt.
         * @member {number} updatedAt
         * @memberof models.User
         * @instance
         */
        User.prototype.updatedAt = 0;

        /**
         * User firstName.
         * @member {string} firstName
         * @memberof models.User
         * @instance
         */
        User.prototype.firstName = "";

        /**
         * User lastName.
         * @member {string} lastName
         * @memberof models.User
         * @instance
         */
        User.prototype.lastName = "";

        /**
         * User email.
         * @member {string} email
         * @memberof models.User
         * @instance
         */
        User.prototype.email = "";

        /**
         * User role.
         * @member {models.User.Role} role
         * @memberof models.User
         * @instance
         */
        User.prototype.role = 0;

        /**
         * User books.
         * @member {Array.<models.IBook>} books
         * @memberof models.User
         * @instance
         */
        User.prototype.books = $util.emptyArray;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof models.User
         * @static
         * @param {models.IUser=} [properties] Properties to set
         * @returns {models.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link models.User.verify|verify} messages.
         * @function encode
         * @memberof models.User
         * @static
         * @param {models.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.updatedAt);
            if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.firstName);
            if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.lastName);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.email);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.role);
            if (message.books != null && message.books.length)
                for (var i = 0; i < message.books.length; ++i)
                    $root.models.Book.encode(message.books[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link models.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.User
         * @static
         * @param {models.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof models.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ID = reader.uint32();
                        break;
                    }
                case 2: {
                        message.createdAt = reader.uint32();
                        break;
                    }
                case 3: {
                        message.updatedAt = reader.uint32();
                        break;
                    }
                case 4: {
                        message.firstName = reader.string();
                        break;
                    }
                case 5: {
                        message.lastName = reader.string();
                        break;
                    }
                case 6: {
                        message.email = reader.string();
                        break;
                    }
                case 8: {
                        message.role = reader.int32();
                        break;
                    }
                case 9: {
                        if (!(message.books && message.books.length))
                            message.books = [];
                        message.books.push($root.models.Book.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof models.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isInteger(message.createdAt))
                    return "createdAt: integer expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isInteger(message.updatedAt))
                    return "updatedAt: integer expected";
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                if (!$util.isString(message.firstName))
                    return "firstName: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.books != null && message.hasOwnProperty("books")) {
                if (!Array.isArray(message.books))
                    return "books: array expected";
                for (var i = 0; i < message.books.length; ++i) {
                    var error = $root.models.Book.verify(message.books[i]);
                    if (error)
                        return "books." + error;
                }
            }
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.models.User)
                return object;
            var message = new $root.models.User();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.createdAt != null)
                message.createdAt = object.createdAt >>> 0;
            if (object.updatedAt != null)
                message.updatedAt = object.updatedAt >>> 0;
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.email != null)
                message.email = String(object.email);
            switch (object.role) {
            default:
                if (typeof object.role === "number") {
                    message.role = object.role;
                    break;
                }
                break;
            case "ROLE_USER":
            case 0:
                message.role = 0;
                break;
            case "ROLE_CONTENT_ADMIN":
            case 1:
                message.role = 1;
                break;
            case "ROLE_ADMIN":
            case 2:
                message.role = 2;
                break;
            }
            if (object.books) {
                if (!Array.isArray(object.books))
                    throw TypeError(".models.User.books: array expected");
                message.books = [];
                for (var i = 0; i < object.books.length; ++i) {
                    if (typeof object.books[i] !== "object")
                        throw TypeError(".models.User.books: object expected");
                    message.books[i] = $root.models.Book.fromObject(object.books[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.User
         * @static
         * @param {models.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.books = [];
            if (options.defaults) {
                object.ID = 0;
                object.createdAt = 0;
                object.updatedAt = 0;
                object.firstName = "";
                object.lastName = "";
                object.email = "";
                object.role = options.enums === String ? "ROLE_USER" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.models.User.Role[message.role] === undefined ? message.role : $root.models.User.Role[message.role] : message.role;
            if (message.books && message.books.length) {
                object.books = [];
                for (var j = 0; j < message.books.length; ++j)
                    object.books[j] = $root.models.Book.toObject(message.books[j], options);
            }
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof models.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof models.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.User";
        };

        /**
         * Role enum.
         * @name models.User.Role
         * @enum {number}
         * @property {number} ROLE_USER=0 ROLE_USER value
         * @property {number} ROLE_CONTENT_ADMIN=1 ROLE_CONTENT_ADMIN value
         * @property {number} ROLE_ADMIN=2 ROLE_ADMIN value
         */
        User.Role = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ROLE_USER"] = 0;
            values[valuesById[1] = "ROLE_CONTENT_ADMIN"] = 1;
            values[valuesById[2] = "ROLE_ADMIN"] = 2;
            return values;
        })();

        return User;
    })();

    models.Team = (function() {

        /**
         * Properties of a Team.
         * @memberof models
         * @interface ITeam
         * @property {number|null} [ID] Team ID
         * @property {string|null} [name] Team name
         * @property {Array.<models.IUser>|null} [admins] Team admins
         * @property {Array.<models.IUser>|null} [members] Team members
         * @property {Array.<models.IUser>|null} [invites] Team invites
         */

        /**
         * Constructs a new Team.
         * @memberof models
         * @classdesc Represents a Team.
         * @implements ITeam
         * @constructor
         * @param {models.ITeam=} [properties] Properties to set
         */
        function Team(properties) {
            this.admins = [];
            this.members = [];
            this.invites = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Team ID.
         * @member {number} ID
         * @memberof models.Team
         * @instance
         */
        Team.prototype.ID = 0;

        /**
         * Team name.
         * @member {string} name
         * @memberof models.Team
         * @instance
         */
        Team.prototype.name = "";

        /**
         * Team admins.
         * @member {Array.<models.IUser>} admins
         * @memberof models.Team
         * @instance
         */
        Team.prototype.admins = $util.emptyArray;

        /**
         * Team members.
         * @member {Array.<models.IUser>} members
         * @memberof models.Team
         * @instance
         */
        Team.prototype.members = $util.emptyArray;

        /**
         * Team invites.
         * @member {Array.<models.IUser>} invites
         * @memberof models.Team
         * @instance
         */
        Team.prototype.invites = $util.emptyArray;

        /**
         * Creates a new Team instance using the specified properties.
         * @function create
         * @memberof models.Team
         * @static
         * @param {models.ITeam=} [properties] Properties to set
         * @returns {models.Team} Team instance
         */
        Team.create = function create(properties) {
            return new Team(properties);
        };

        /**
         * Encodes the specified Team message. Does not implicitly {@link models.Team.verify|verify} messages.
         * @function encode
         * @memberof models.Team
         * @static
         * @param {models.ITeam} message Team message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Team.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.admins != null && message.admins.length)
                for (var i = 0; i < message.admins.length; ++i)
                    $root.models.User.encode(message.admins[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.members != null && message.members.length)
                for (var i = 0; i < message.members.length; ++i)
                    $root.models.User.encode(message.members[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.invites != null && message.invites.length)
                for (var i = 0; i < message.invites.length; ++i)
                    $root.models.User.encode(message.invites[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Team message, length delimited. Does not implicitly {@link models.Team.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Team
         * @static
         * @param {models.ITeam} message Team message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Team.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Team message from the specified reader or buffer.
         * @function decode
         * @memberof models.Team
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Team} Team
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Team.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Team();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ID = reader.uint32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.admins && message.admins.length))
                            message.admins = [];
                        message.admins.push($root.models.User.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.members && message.members.length))
                            message.members = [];
                        message.members.push($root.models.User.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (!(message.invites && message.invites.length))
                            message.invites = [];
                        message.invites.push($root.models.User.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Team message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Team
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Team} Team
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Team.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Team message.
         * @function verify
         * @memberof models.Team
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Team.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.admins != null && message.hasOwnProperty("admins")) {
                if (!Array.isArray(message.admins))
                    return "admins: array expected";
                for (var i = 0; i < message.admins.length; ++i) {
                    var error = $root.models.User.verify(message.admins[i]);
                    if (error)
                        return "admins." + error;
                }
            }
            if (message.members != null && message.hasOwnProperty("members")) {
                if (!Array.isArray(message.members))
                    return "members: array expected";
                for (var i = 0; i < message.members.length; ++i) {
                    var error = $root.models.User.verify(message.members[i]);
                    if (error)
                        return "members." + error;
                }
            }
            if (message.invites != null && message.hasOwnProperty("invites")) {
                if (!Array.isArray(message.invites))
                    return "invites: array expected";
                for (var i = 0; i < message.invites.length; ++i) {
                    var error = $root.models.User.verify(message.invites[i]);
                    if (error)
                        return "invites." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Team message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Team
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Team} Team
         */
        Team.fromObject = function fromObject(object) {
            if (object instanceof $root.models.Team)
                return object;
            var message = new $root.models.Team();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.admins) {
                if (!Array.isArray(object.admins))
                    throw TypeError(".models.Team.admins: array expected");
                message.admins = [];
                for (var i = 0; i < object.admins.length; ++i) {
                    if (typeof object.admins[i] !== "object")
                        throw TypeError(".models.Team.admins: object expected");
                    message.admins[i] = $root.models.User.fromObject(object.admins[i]);
                }
            }
            if (object.members) {
                if (!Array.isArray(object.members))
                    throw TypeError(".models.Team.members: array expected");
                message.members = [];
                for (var i = 0; i < object.members.length; ++i) {
                    if (typeof object.members[i] !== "object")
                        throw TypeError(".models.Team.members: object expected");
                    message.members[i] = $root.models.User.fromObject(object.members[i]);
                }
            }
            if (object.invites) {
                if (!Array.isArray(object.invites))
                    throw TypeError(".models.Team.invites: array expected");
                message.invites = [];
                for (var i = 0; i < object.invites.length; ++i) {
                    if (typeof object.invites[i] !== "object")
                        throw TypeError(".models.Team.invites: object expected");
                    message.invites[i] = $root.models.User.fromObject(object.invites[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Team message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Team
         * @static
         * @param {models.Team} message Team
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Team.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.admins = [];
                object.members = [];
                object.invites = [];
            }
            if (options.defaults) {
                object.ID = 0;
                object.name = "";
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.admins && message.admins.length) {
                object.admins = [];
                for (var j = 0; j < message.admins.length; ++j)
                    object.admins[j] = $root.models.User.toObject(message.admins[j], options);
            }
            if (message.members && message.members.length) {
                object.members = [];
                for (var j = 0; j < message.members.length; ++j)
                    object.members[j] = $root.models.User.toObject(message.members[j], options);
            }
            if (message.invites && message.invites.length) {
                object.invites = [];
                for (var j = 0; j < message.invites.length; ++j)
                    object.invites[j] = $root.models.User.toObject(message.invites[j], options);
            }
            return object;
        };

        /**
         * Converts this Team to JSON.
         * @function toJSON
         * @memberof models.Team
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Team.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Team
         * @function getTypeUrl
         * @memberof models.Team
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Team.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.Team";
        };

        return Team;
    })();

    return models;
})();

module.exports = $root;
