import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace models. */
export namespace models {

    /** Properties of an Author. */
    interface IAuthor {

        /** Author ID */
        ID?: (number|null);

        /** Author firstName */
        firstName?: (string|null);

        /** Author lastName */
        lastName?: (string|null);

        /** Author bio */
        bio?: (string|null);
    }

    /** Represents an Author. */
    class Author implements IAuthor {

        /**
         * Constructs a new Author.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.IAuthor);

        /** Author ID. */
        public ID: number;

        /** Author firstName. */
        public firstName: string;

        /** Author lastName. */
        public lastName: string;

        /** Author bio. */
        public bio: string;

        /**
         * Creates a new Author instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Author instance
         */
        public static create(properties?: models.IAuthor): models.Author;

        /**
         * Encodes the specified Author message. Does not implicitly {@link models.Author.verify|verify} messages.
         * @param message Author message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.IAuthor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Author message, length delimited. Does not implicitly {@link models.Author.verify|verify} messages.
         * @param message Author message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.IAuthor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Author message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Author
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.Author;

        /**
         * Decodes an Author message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Author
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.Author;

        /**
         * Verifies an Author message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Author message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Author
         */
        public static fromObject(object: { [k: string]: any }): models.Author;

        /**
         * Creates a plain object from an Author message. Also converts values to other types if specified.
         * @param message Author
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.Author, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Author to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Author
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CommentType. */
    interface ICommentType {

        /** CommentType ID */
        ID?: (number|null);

        /** CommentType type */
        type?: (string|null);
    }

    /** Represents a CommentType. */
    class CommentType implements ICommentType {

        /**
         * Constructs a new CommentType.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.ICommentType);

        /** CommentType ID. */
        public ID: number;

        /** CommentType type. */
        public type: string;

        /**
         * Creates a new CommentType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommentType instance
         */
        public static create(properties?: models.ICommentType): models.CommentType;

        /**
         * Encodes the specified CommentType message. Does not implicitly {@link models.CommentType.verify|verify} messages.
         * @param message CommentType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.ICommentType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommentType message, length delimited. Does not implicitly {@link models.CommentType.verify|verify} messages.
         * @param message CommentType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.ICommentType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommentType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommentType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.CommentType;

        /**
         * Decodes a CommentType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommentType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.CommentType;

        /**
         * Verifies a CommentType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommentType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommentType
         */
        public static fromObject(object: { [k: string]: any }): models.CommentType;

        /**
         * Creates a plain object from a CommentType message. Also converts values to other types if specified.
         * @param message CommentType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.CommentType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommentType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CommentType
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Comment. */
    interface IComment {

        /** Comment ID */
        ID?: (number|null);

        /** Comment user */
        user?: (models.IUser|null);

        /** Comment type */
        type?: (models.ICommentType|null);

        /** Comment content */
        content?: (string|null);

        /** Comment visible */
        visible?: (boolean|null);
    }

    /** Represents a Comment. */
    class Comment implements IComment {

        /**
         * Constructs a new Comment.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.IComment);

        /** Comment ID. */
        public ID: number;

        /** Comment user. */
        public user?: (models.IUser|null);

        /** Comment type. */
        public type?: (models.ICommentType|null);

        /** Comment content. */
        public content: string;

        /** Comment visible. */
        public visible: boolean;

        /**
         * Creates a new Comment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Comment instance
         */
        public static create(properties?: models.IComment): models.Comment;

        /**
         * Encodes the specified Comment message. Does not implicitly {@link models.Comment.verify|verify} messages.
         * @param message Comment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.IComment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Comment message, length delimited. Does not implicitly {@link models.Comment.verify|verify} messages.
         * @param message Comment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.IComment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Comment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.Comment;

        /**
         * Decodes a Comment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.Comment;

        /**
         * Verifies a Comment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Comment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Comment
         */
        public static fromObject(object: { [k: string]: any }): models.Comment;

        /**
         * Creates a plain object from a Comment message. Also converts values to other types if specified.
         * @param message Comment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.Comment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Comment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Comment
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Book. */
    interface IBook {

        /** Book ID */
        ID?: (number|null);

        /** Book title */
        title?: (string|null);

        /** Book cover */
        cover?: (string|null);

        /** Book author */
        author?: (models.IAuthor|null);

        /** Book cites */
        cites?: (models.IComment[]|null);

        /** Book takeovers */
        takeovers?: (models.IComment[]|null);

        /** Book comments */
        comments?: (models.IComment[]|null);
    }

    /** Represents a Book. */
    class Book implements IBook {

        /**
         * Constructs a new Book.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.IBook);

        /** Book ID. */
        public ID: number;

        /** Book title. */
        public title: string;

        /** Book cover. */
        public cover: string;

        /** Book author. */
        public author?: (models.IAuthor|null);

        /** Book cites. */
        public cites: models.IComment[];

        /** Book takeovers. */
        public takeovers: models.IComment[];

        /** Book comments. */
        public comments: models.IComment[];

        /**
         * Creates a new Book instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Book instance
         */
        public static create(properties?: models.IBook): models.Book;

        /**
         * Encodes the specified Book message. Does not implicitly {@link models.Book.verify|verify} messages.
         * @param message Book message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.IBook, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Book message, length delimited. Does not implicitly {@link models.Book.verify|verify} messages.
         * @param message Book message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.IBook, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Book message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Book
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.Book;

        /**
         * Decodes a Book message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Book
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.Book;

        /**
         * Verifies a Book message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Book message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Book
         */
        public static fromObject(object: { [k: string]: any }): models.Book;

        /**
         * Creates a plain object from a Book message. Also converts values to other types if specified.
         * @param message Book
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.Book, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Book to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Book
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a User. */
    interface IUser {

        /** User ID */
        ID?: (number|null);

        /** User createdAt */
        createdAt?: (number|null);

        /** User updatedAt */
        updatedAt?: (number|null);

        /** User firstName */
        firstName?: (string|null);

        /** User lastName */
        lastName?: (string|null);

        /** User email */
        email?: (string|null);

        /** User role */
        role?: (models.User.Role|null);

        /** User books */
        books?: (models.IBook[]|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.IUser);

        /** User ID. */
        public ID: number;

        /** User createdAt. */
        public createdAt: number;

        /** User updatedAt. */
        public updatedAt: number;

        /** User firstName. */
        public firstName: string;

        /** User lastName. */
        public lastName: string;

        /** User email. */
        public email: string;

        /** User role. */
        public role: models.User.Role;

        /** User books. */
        public books: models.IBook[];

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: models.IUser): models.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link models.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link models.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): models.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace User {

        /** Role enum. */
        enum Role {
            ROLE_USER = 0,
            ROLE_CONTENT_ADMIN = 1,
            ROLE_ADMIN = 2
        }
    }

    /** Properties of a Team. */
    interface ITeam {

        /** Team ID */
        ID?: (number|null);

        /** Team name */
        name?: (string|null);

        /** Team admins */
        admins?: (models.IUser[]|null);

        /** Team members */
        members?: (models.IUser[]|null);

        /** Team invites */
        invites?: (models.IUser[]|null);
    }

    /** Represents a Team. */
    class Team implements ITeam {

        /**
         * Constructs a new Team.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.ITeam);

        /** Team ID. */
        public ID: number;

        /** Team name. */
        public name: string;

        /** Team admins. */
        public admins: models.IUser[];

        /** Team members. */
        public members: models.IUser[];

        /** Team invites. */
        public invites: models.IUser[];

        /**
         * Creates a new Team instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Team instance
         */
        public static create(properties?: models.ITeam): models.Team;

        /**
         * Encodes the specified Team message. Does not implicitly {@link models.Team.verify|verify} messages.
         * @param message Team message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Team message, length delimited. Does not implicitly {@link models.Team.verify|verify} messages.
         * @param message Team message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Team message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Team
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.Team;

        /**
         * Decodes a Team message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Team
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.Team;

        /**
         * Verifies a Team message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Team message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Team
         */
        public static fromObject(object: { [k: string]: any }): models.Team;

        /**
         * Creates a plain object from a Team message. Also converts values to other types if specified.
         * @param message Team
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.Team, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Team to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Team
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
