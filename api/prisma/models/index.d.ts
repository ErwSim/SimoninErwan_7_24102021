
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Category
 */

export type Category = {
  id: number
  name: string
}

/**
 * Model Post
 */

export type Post = {
  id: number
  title: string
  createdAt: Date
  content: string
  spoiler: boolean
  userId: number
  categoryId: number
  messageId: number | null
}

/**
 * Model User
 */

export type User = {
  id: number
  email: string
  password: string
  resetToken: string | null
  firstname: string
  lastname: string
  admin: boolean
  createdAt: Date
}

/**
 * Model UserPostVote
 */

export type UserPostVote = {
  postId: number
  userId: number
  type: VoteTypes
  createdAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const VoteTypes: {
  UPVOTE: 'UPVOTE',
  DOWNVOTE: 'DOWNVOTE'
};

export type VoteTypes = (typeof VoteTypes)[keyof typeof VoteTypes]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.userPostVote`: Exposes CRUD operations for the **UserPostVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPostVotes
    * const userPostVotes = await prisma.userPostVote.findMany()
    * ```
    */
  get userPostVote(): Prisma.UserPostVoteDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.3.0
   * Query Engine version: 33838b0f78f1fe9052cf9a00e9761c9dc097a63c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Category: 'Category',
    Post: 'Post',
    User: 'User',
    UserPostVote: 'UserPostVote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    Posts: number
  }

  export type CategoryCountOutputTypeSelect = {
    Posts?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CategoryCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CategoryCountOutputType
    : S extends undefined
    ? never
    : S extends CategoryCountOutputTypeArgs
    ?'include' extends U
    ? CategoryCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CategoryCountOutputType ?CategoryCountOutputType [P]
  : 
     never
  } 
    : CategoryCountOutputType
  : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     * 
    **/
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type PostCountOutputType
   */


  export type PostCountOutputType = {
    messages: number
    usersVotes: number
  }

  export type PostCountOutputTypeSelect = {
    messages?: boolean
    usersVotes?: boolean
  }

  export type PostCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PostCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PostCountOutputType
    : S extends undefined
    ? never
    : S extends PostCountOutputTypeArgs
    ?'include' extends U
    ? PostCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostCountOutputType ?PostCountOutputType [P]
  : 
     never
  } 
    : PostCountOutputType
  : PostCountOutputType




  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     * 
    **/
    select?: PostCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Posts: number
    postsVoted: number
  }

  export type UserCountOutputTypeSelect = {
    Posts?: boolean
    postsVoted?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }


    
    
  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: Array<CategoryScalarFieldEnum>
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Promise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CategoryGroupByOutputType[P]> 
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      > 
    >


  export type CategorySelect = {
    id?: boolean
    name?: boolean
    Posts?: boolean | PostFindManyArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryInclude = {
    Posts?: boolean | PostFindManyArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryArgs,
    U = keyof S
      > = S extends true
        ? Category
    : S extends undefined
    ? never
    : S extends CategoryArgs | CategoryFindManyArgs
    ?'include' extends U
    ? Category  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Posts'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? CategoryCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Category ?Category [P]
  : 
          P extends 'Posts'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? CategoryCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Category
  : Category


  type CategoryCountArgs = Merge<
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }
  >

  export interface CategoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Throw an Error if a Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Throw an Error if a Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     * 
    **/
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     * 
    **/
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     * 
    **/
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     * 
    **/
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    where?: CategoryWhereInput
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    messageId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    messageId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    content: string | null
    spoiler: boolean | null
    userId: number | null
    categoryId: number | null
    messageId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    content: string | null
    spoiler: boolean | null
    userId: number | null
    categoryId: number | null
    messageId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    content: number
    spoiler: number
    userId: number
    categoryId: number
    messageId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    messageId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    messageId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    content?: true
    spoiler?: true
    userId?: true
    categoryId?: true
    messageId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    content?: true
    spoiler?: true
    userId?: true
    categoryId?: true
    messageId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    content?: true
    spoiler?: true
    userId?: true
    categoryId?: true
    messageId?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }


    
    
  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithAggregationInput>
    by: Array<PostScalarFieldEnum>
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: number
    title: string
    createdAt: Date
    content: string
    spoiler: boolean
    userId: number
    categoryId: number
    messageId: number | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Promise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PostGroupByOutputType[P]> 
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      > 
    >


  export type PostSelect = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    content?: boolean
    spoiler?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    categoryId?: boolean
    Category?: boolean | CategoryArgs
    messages?: boolean | PostFindManyArgs
    messageId?: boolean
    postMessages?: boolean | PostArgs
    usersVotes?: boolean | UserPostVoteFindManyArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostInclude = {
    User?: boolean | UserArgs
    Category?: boolean | CategoryArgs
    messages?: boolean | PostFindManyArgs
    postMessages?: boolean | PostArgs
    usersVotes?: boolean | UserPostVoteFindManyArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostGetPayload<
    S extends boolean | null | undefined | PostArgs,
    U = keyof S
      > = S extends true
        ? Post
    : S extends undefined
    ? never
    : S extends PostArgs | PostFindManyArgs
    ?'include' extends U
    ? Post  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'User'
        ? UserGetPayload<S['include'][P]> :
        P extends 'Category'
        ? CategoryGetPayload<S['include'][P]> :
        P extends 'messages'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'postMessages'
        ? PostGetPayload<S['include'][P]> | null :
        P extends 'usersVotes'
        ? Array < UserPostVoteGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? PostCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Post ?Post [P]
  : 
          P extends 'User'
        ? UserGetPayload<S['select'][P]> :
        P extends 'Category'
        ? CategoryGetPayload<S['select'][P]> :
        P extends 'messages'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'postMessages'
        ? PostGetPayload<S['select'][P]> | null :
        P extends 'usersVotes'
        ? Array < UserPostVoteGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? PostCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Post
  : Post


  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Category<T extends CategoryArgs = {}>(args?: Subset<T, CategoryArgs>): CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>;

    messages<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    postMessages<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>;

    usersVotes<T extends UserPostVoteFindManyArgs = {}>(args?: Subset<T, UserPostVoteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserPostVote>>, PrismaPromise<Array<UserPostVoteGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     * 
    **/
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     * 
    **/
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     * 
    **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     * 
    **/
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    where?: PostWhereInput
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    resetToken: string | null
    firstname: string | null
    lastname: string | null
    admin: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    resetToken: string | null
    firstname: string | null
    lastname: string | null
    admin: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    resetToken: number
    firstname: number
    lastname: number
    admin: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    resetToken?: true
    firstname?: true
    lastname?: true
    admin?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    resetToken?: true
    firstname?: true
    lastname?: true
    admin?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    resetToken?: true
    firstname?: true
    lastname?: true
    admin?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    resetToken: string | null
    firstname: string
    lastname: string
    admin: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UserGroupByOutputType[P]> 
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      > 
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    resetToken?: boolean
    firstname?: boolean
    lastname?: boolean
    admin?: boolean
    createdAt?: boolean
    Posts?: boolean | PostFindManyArgs
    postsVoted?: boolean | UserPostVoteFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    Posts?: boolean | PostFindManyArgs
    postsVoted?: boolean | UserPostVoteFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Posts'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'postsVoted'
        ? Array < UserPostVoteGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'Posts'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'postsVoted'
        ? Array < UserPostVoteGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    postsVoted<T extends UserPostVoteFindManyArgs = {}>(args?: Subset<T, UserPostVoteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserPostVote>>, PrismaPromise<Array<UserPostVoteGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model UserPostVote
   */


  export type AggregateUserPostVote = {
    _count: UserPostVoteCountAggregateOutputType | null
    _avg: UserPostVoteAvgAggregateOutputType | null
    _sum: UserPostVoteSumAggregateOutputType | null
    _min: UserPostVoteMinAggregateOutputType | null
    _max: UserPostVoteMaxAggregateOutputType | null
  }

  export type UserPostVoteAvgAggregateOutputType = {
    postId: number | null
    userId: number | null
  }

  export type UserPostVoteSumAggregateOutputType = {
    postId: number | null
    userId: number | null
  }

  export type UserPostVoteMinAggregateOutputType = {
    postId: number | null
    userId: number | null
    type: VoteTypes | null
    createdAt: Date | null
  }

  export type UserPostVoteMaxAggregateOutputType = {
    postId: number | null
    userId: number | null
    type: VoteTypes | null
    createdAt: Date | null
  }

  export type UserPostVoteCountAggregateOutputType = {
    postId: number
    userId: number
    type: number
    createdAt: number
    _all: number
  }


  export type UserPostVoteAvgAggregateInputType = {
    postId?: true
    userId?: true
  }

  export type UserPostVoteSumAggregateInputType = {
    postId?: true
    userId?: true
  }

  export type UserPostVoteMinAggregateInputType = {
    postId?: true
    userId?: true
    type?: true
    createdAt?: true
  }

  export type UserPostVoteMaxAggregateInputType = {
    postId?: true
    userId?: true
    type?: true
    createdAt?: true
  }

  export type UserPostVoteCountAggregateInputType = {
    postId?: true
    userId?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type UserPostVoteAggregateArgs = {
    /**
     * Filter which UserPostVote to aggregate.
     * 
    **/
    where?: UserPostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPostVotes to fetch.
     * 
    **/
    orderBy?: Enumerable<UserPostVoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserPostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPostVotes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPostVotes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPostVotes
    **/
    _count?: true | UserPostVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPostVoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPostVoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPostVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPostVoteMaxAggregateInputType
  }

  export type GetUserPostVoteAggregateType<T extends UserPostVoteAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPostVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPostVote[P]>
      : GetScalarType<T[P], AggregateUserPostVote[P]>
  }


    
    
  export type UserPostVoteGroupByArgs = {
    where?: UserPostVoteWhereInput
    orderBy?: Enumerable<UserPostVoteOrderByWithAggregationInput>
    by: Array<UserPostVoteScalarFieldEnum>
    having?: UserPostVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPostVoteCountAggregateInputType | true
    _avg?: UserPostVoteAvgAggregateInputType
    _sum?: UserPostVoteSumAggregateInputType
    _min?: UserPostVoteMinAggregateInputType
    _max?: UserPostVoteMaxAggregateInputType
  }


  export type UserPostVoteGroupByOutputType = {
    postId: number
    userId: number
    type: VoteTypes
    createdAt: Date
    _count: UserPostVoteCountAggregateOutputType | null
    _avg: UserPostVoteAvgAggregateOutputType | null
    _sum: UserPostVoteSumAggregateOutputType | null
    _min: UserPostVoteMinAggregateOutputType | null
    _max: UserPostVoteMaxAggregateOutputType | null
  }

  type GetUserPostVoteGroupByPayload<T extends UserPostVoteGroupByArgs> = Promise<
    Array<
      PickArray<UserPostVoteGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UserPostVoteGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UserPostVoteGroupByOutputType[P]> 
            : GetScalarType<T[P], UserPostVoteGroupByOutputType[P]>
        }
      > 
    >


  export type UserPostVoteSelect = {
    post?: boolean | PostArgs
    postId?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type UserPostVoteInclude = {
    post?: boolean | PostArgs
    user?: boolean | UserArgs
  }

  export type UserPostVoteGetPayload<
    S extends boolean | null | undefined | UserPostVoteArgs,
    U = keyof S
      > = S extends true
        ? UserPostVote
    : S extends undefined
    ? never
    : S extends UserPostVoteArgs | UserPostVoteFindManyArgs
    ?'include' extends U
    ? UserPostVote  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'post'
        ? PostGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserPostVote ?UserPostVote [P]
  : 
          P extends 'post'
        ? PostGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : UserPostVote
  : UserPostVote


  type UserPostVoteCountArgs = Merge<
    Omit<UserPostVoteFindManyArgs, 'select' | 'include'> & {
      select?: UserPostVoteCountAggregateInputType | true
    }
  >

  export interface UserPostVoteDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserPostVote that matches the filter.
     * @param {UserPostVoteFindUniqueArgs} args - Arguments to find a UserPostVote
     * @example
     * // Get one UserPostVote
     * const userPostVote = await prisma.userPostVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserPostVoteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserPostVoteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserPostVote'> extends True ? CheckSelect<T, Prisma__UserPostVoteClient<UserPostVote>, Prisma__UserPostVoteClient<UserPostVoteGetPayload<T>>> : CheckSelect<T, Prisma__UserPostVoteClient<UserPostVote | null >, Prisma__UserPostVoteClient<UserPostVoteGetPayload<T> | null >>

    /**
     * Find the first UserPostVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostVoteFindFirstArgs} args - Arguments to find a UserPostVote
     * @example
     * // Get one UserPostVote
     * const userPostVote = await prisma.userPostVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserPostVoteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserPostVoteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserPostVote'> extends True ? CheckSelect<T, Prisma__UserPostVoteClient<UserPostVote>, Prisma__UserPostVoteClient<UserPostVoteGetPayload<T>>> : CheckSelect<T, Prisma__UserPostVoteClient<UserPostVote | null >, Prisma__UserPostVoteClient<UserPostVoteGetPayload<T> | null >>

    /**
     * Find zero or more UserPostVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostVoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPostVotes
     * const userPostVotes = await prisma.userPostVote.findMany()
     * 
     * // Get first 10 UserPostVotes
     * const userPostVotes = await prisma.userPostVote.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const userPostVoteWithPostIdOnly = await prisma.userPostVote.findMany({ select: { postId: true } })
     * 
    **/
    findMany<T extends UserPostVoteFindManyArgs>(
      args?: SelectSubset<T, UserPostVoteFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserPostVote>>, PrismaPromise<Array<UserPostVoteGetPayload<T>>>>

    /**
     * Create a UserPostVote.
     * @param {UserPostVoteCreateArgs} args - Arguments to create a UserPostVote.
     * @example
     * // Create one UserPostVote
     * const UserPostVote = await prisma.userPostVote.create({
     *   data: {
     *     // ... data to create a UserPostVote
     *   }
     * })
     * 
    **/
    create<T extends UserPostVoteCreateArgs>(
      args: SelectSubset<T, UserPostVoteCreateArgs>
    ): CheckSelect<T, Prisma__UserPostVoteClient<UserPostVote>, Prisma__UserPostVoteClient<UserPostVoteGetPayload<T>>>

    /**
     * Create many UserPostVotes.
     *     @param {UserPostVoteCreateManyArgs} args - Arguments to create many UserPostVotes.
     *     @example
     *     // Create many UserPostVotes
     *     const userPostVote = await prisma.userPostVote.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserPostVoteCreateManyArgs>(
      args?: SelectSubset<T, UserPostVoteCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserPostVote.
     * @param {UserPostVoteDeleteArgs} args - Arguments to delete one UserPostVote.
     * @example
     * // Delete one UserPostVote
     * const UserPostVote = await prisma.userPostVote.delete({
     *   where: {
     *     // ... filter to delete one UserPostVote
     *   }
     * })
     * 
    **/
    delete<T extends UserPostVoteDeleteArgs>(
      args: SelectSubset<T, UserPostVoteDeleteArgs>
    ): CheckSelect<T, Prisma__UserPostVoteClient<UserPostVote>, Prisma__UserPostVoteClient<UserPostVoteGetPayload<T>>>

    /**
     * Update one UserPostVote.
     * @param {UserPostVoteUpdateArgs} args - Arguments to update one UserPostVote.
     * @example
     * // Update one UserPostVote
     * const userPostVote = await prisma.userPostVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserPostVoteUpdateArgs>(
      args: SelectSubset<T, UserPostVoteUpdateArgs>
    ): CheckSelect<T, Prisma__UserPostVoteClient<UserPostVote>, Prisma__UserPostVoteClient<UserPostVoteGetPayload<T>>>

    /**
     * Delete zero or more UserPostVotes.
     * @param {UserPostVoteDeleteManyArgs} args - Arguments to filter UserPostVotes to delete.
     * @example
     * // Delete a few UserPostVotes
     * const { count } = await prisma.userPostVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserPostVoteDeleteManyArgs>(
      args?: SelectSubset<T, UserPostVoteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPostVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPostVotes
     * const userPostVote = await prisma.userPostVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserPostVoteUpdateManyArgs>(
      args: SelectSubset<T, UserPostVoteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPostVote.
     * @param {UserPostVoteUpsertArgs} args - Arguments to update or create a UserPostVote.
     * @example
     * // Update or create a UserPostVote
     * const userPostVote = await prisma.userPostVote.upsert({
     *   create: {
     *     // ... data to create a UserPostVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPostVote we want to update
     *   }
     * })
    **/
    upsert<T extends UserPostVoteUpsertArgs>(
      args: SelectSubset<T, UserPostVoteUpsertArgs>
    ): CheckSelect<T, Prisma__UserPostVoteClient<UserPostVote>, Prisma__UserPostVoteClient<UserPostVoteGetPayload<T>>>

    /**
     * Count the number of UserPostVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostVoteCountArgs} args - Arguments to filter UserPostVotes to count.
     * @example
     * // Count the number of UserPostVotes
     * const count = await prisma.userPostVote.count({
     *   where: {
     *     // ... the filter for the UserPostVotes we want to count
     *   }
     * })
    **/
    count<T extends UserPostVoteCountArgs>(
      args?: Subset<T, UserPostVoteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPostVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPostVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPostVoteAggregateArgs>(args: Subset<T, UserPostVoteAggregateArgs>): PrismaPromise<GetUserPostVoteAggregateType<T>>

    /**
     * Group by UserPostVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostVoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPostVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPostVoteGroupByArgs['orderBy'] }
        : { orderBy?: UserPostVoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPostVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPostVoteGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPostVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserPostVoteClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserPostVote findUnique
   */
  export type UserPostVoteFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the UserPostVote
     * 
    **/
    select?: UserPostVoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPostVoteInclude | null
    /**
     * Throw an Error if a UserPostVote can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserPostVote to fetch.
     * 
    **/
    where: UserPostVoteWhereUniqueInput
  }


  /**
   * UserPostVote findFirst
   */
  export type UserPostVoteFindFirstArgs = {
    /**
     * Select specific fields to fetch from the UserPostVote
     * 
    **/
    select?: UserPostVoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPostVoteInclude | null
    /**
     * Throw an Error if a UserPostVote can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserPostVote to fetch.
     * 
    **/
    where?: UserPostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPostVotes to fetch.
     * 
    **/
    orderBy?: Enumerable<UserPostVoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPostVotes.
     * 
    **/
    cursor?: UserPostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPostVotes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPostVotes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPostVotes.
     * 
    **/
    distinct?: Enumerable<UserPostVoteScalarFieldEnum>
  }


  /**
   * UserPostVote findMany
   */
  export type UserPostVoteFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserPostVote
     * 
    **/
    select?: UserPostVoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPostVoteInclude | null
    /**
     * Filter, which UserPostVotes to fetch.
     * 
    **/
    where?: UserPostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPostVotes to fetch.
     * 
    **/
    orderBy?: Enumerable<UserPostVoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPostVotes.
     * 
    **/
    cursor?: UserPostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPostVotes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPostVotes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserPostVoteScalarFieldEnum>
  }


  /**
   * UserPostVote create
   */
  export type UserPostVoteCreateArgs = {
    /**
     * Select specific fields to fetch from the UserPostVote
     * 
    **/
    select?: UserPostVoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPostVoteInclude | null
    /**
     * The data needed to create a UserPostVote.
     * 
    **/
    data: XOR<UserPostVoteCreateInput, UserPostVoteUncheckedCreateInput>
  }


  /**
   * UserPostVote createMany
   */
  export type UserPostVoteCreateManyArgs = {
    data: Enumerable<UserPostVoteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserPostVote update
   */
  export type UserPostVoteUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserPostVote
     * 
    **/
    select?: UserPostVoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPostVoteInclude | null
    /**
     * The data needed to update a UserPostVote.
     * 
    **/
    data: XOR<UserPostVoteUpdateInput, UserPostVoteUncheckedUpdateInput>
    /**
     * Choose, which UserPostVote to update.
     * 
    **/
    where: UserPostVoteWhereUniqueInput
  }


  /**
   * UserPostVote updateMany
   */
  export type UserPostVoteUpdateManyArgs = {
    data: XOR<UserPostVoteUpdateManyMutationInput, UserPostVoteUncheckedUpdateManyInput>
    where?: UserPostVoteWhereInput
  }


  /**
   * UserPostVote upsert
   */
  export type UserPostVoteUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserPostVote
     * 
    **/
    select?: UserPostVoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPostVoteInclude | null
    /**
     * The filter to search for the UserPostVote to update in case it exists.
     * 
    **/
    where: UserPostVoteWhereUniqueInput
    /**
     * In case the UserPostVote found by the `where` argument doesn't exist, create a new UserPostVote with this data.
     * 
    **/
    create: XOR<UserPostVoteCreateInput, UserPostVoteUncheckedCreateInput>
    /**
     * In case the UserPostVote was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserPostVoteUpdateInput, UserPostVoteUncheckedUpdateInput>
  }


  /**
   * UserPostVote delete
   */
  export type UserPostVoteDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserPostVote
     * 
    **/
    select?: UserPostVoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPostVoteInclude | null
    /**
     * Filter which UserPostVote to delete.
     * 
    **/
    where: UserPostVoteWhereUniqueInput
  }


  /**
   * UserPostVote deleteMany
   */
  export type UserPostVoteDeleteManyArgs = {
    where?: UserPostVoteWhereInput
  }


  /**
   * UserPostVote without action
   */
  export type UserPostVoteArgs = {
    /**
     * Select specific fields to fetch from the UserPostVote
     * 
    **/
    select?: UserPostVoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserPostVoteInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    content: 'content',
    spoiler: 'spoiler',
    userId: 'userId',
    categoryId: 'categoryId',
    messageId: 'messageId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    resetToken: 'resetToken',
    firstname: 'firstname',
    lastname: 'lastname',
    admin: 'admin',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPostVoteScalarFieldEnum: {
    postId: 'postId',
    userId: 'userId',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type UserPostVoteScalarFieldEnum = (typeof UserPostVoteScalarFieldEnum)[keyof typeof UserPostVoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    Posts?: PostListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Posts?: PostOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = {
    id?: number
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    content?: StringFilter | string
    spoiler?: BoolFilter | boolean
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    categoryId?: IntFilter | number
    Category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    messages?: PostListRelationFilter
    messageId?: IntNullableFilter | number | null
    postMessages?: XOR<PostRelationFilter, PostWhereInput> | null
    usersVotes?: UserPostVoteListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    spoiler?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    categoryId?: SortOrder
    Category?: CategoryOrderByWithRelationInput
    messages?: PostOrderByRelationAggregateInput
    messageId?: SortOrder
    postMessages?: PostOrderByWithRelationInput
    usersVotes?: UserPostVoteOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = {
    id?: number
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    spoiler?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    messageId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    content?: StringWithAggregatesFilter | string
    spoiler?: BoolWithAggregatesFilter | boolean
    userId?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
    messageId?: IntNullableWithAggregatesFilter | number | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    resetToken?: StringNullableFilter | string | null
    firstname?: StringFilter | string
    lastname?: StringFilter | string
    admin?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    Posts?: PostListRelationFilter
    postsVoted?: UserPostVoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
    Posts?: PostOrderByRelationAggregateInput
    postsVoted?: UserPostVoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    resetToken?: StringNullableWithAggregatesFilter | string | null
    firstname?: StringWithAggregatesFilter | string
    lastname?: StringWithAggregatesFilter | string
    admin?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserPostVoteWhereInput = {
    AND?: Enumerable<UserPostVoteWhereInput>
    OR?: Enumerable<UserPostVoteWhereInput>
    NOT?: Enumerable<UserPostVoteWhereInput>
    post?: XOR<PostRelationFilter, PostWhereInput>
    postId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    type?: EnumVoteTypesFilter | VoteTypes
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserPostVoteOrderByWithRelationInput = {
    post?: PostOrderByWithRelationInput
    postId?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPostVoteWhereUniqueInput = {
    postId_userId?: UserPostVotePostIdUserIdCompoundUniqueInput
  }

  export type UserPostVoteOrderByWithAggregationInput = {
    postId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: UserPostVoteCountOrderByAggregateInput
    _avg?: UserPostVoteAvgOrderByAggregateInput
    _max?: UserPostVoteMaxOrderByAggregateInput
    _min?: UserPostVoteMinOrderByAggregateInput
    _sum?: UserPostVoteSumOrderByAggregateInput
  }

  export type UserPostVoteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserPostVoteScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserPostVoteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserPostVoteScalarWhereWithAggregatesInput>
    postId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    type?: EnumVoteTypesWithAggregatesFilter | VoteTypes
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    Posts?: PostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    Posts?: PostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Posts?: PostUpdateManyWithoutCategoryInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Posts?: PostUncheckedUpdateManyWithoutCategoryInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    User: UserCreateNestedOneWithoutPostsInput
    Category: CategoryCreateNestedOneWithoutPostsInput
    messages?: PostCreateNestedManyWithoutPostMessagesInput
    postMessages?: PostCreateNestedOneWithoutMessagesInput
    usersVotes?: UserPostVoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    userId: number
    categoryId: number
    messageId?: number | null
    messages?: PostUncheckedCreateNestedManyWithoutPostMessagesInput
    usersVotes?: UserPostVoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutPostsInput
    Category?: CategoryUpdateOneRequiredWithoutPostsInput
    messages?: PostUpdateManyWithoutPostMessagesInput
    postMessages?: PostUpdateOneWithoutMessagesInput
    usersVotes?: UserPostVoteUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: PostUncheckedUpdateManyWithoutPostMessagesInput
    usersVotes?: UserPostVoteUncheckedUpdateManyWithoutPostInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    userId: number
    categoryId: number
    messageId?: number | null
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    resetToken?: string | null
    firstname: string
    lastname: string
    admin?: boolean
    createdAt?: Date | string
    Posts?: PostCreateNestedManyWithoutUserInput
    postsVoted?: UserPostVoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    resetToken?: string | null
    firstname: string
    lastname: string
    admin?: boolean
    createdAt?: Date | string
    Posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postsVoted?: UserPostVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Posts?: PostUpdateManyWithoutUserInput
    postsVoted?: UserPostVoteUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Posts?: PostUncheckedUpdateManyWithoutUserInput
    postsVoted?: UserPostVoteUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    resetToken?: string | null
    firstname: string
    lastname: string
    admin?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPostVoteCreateInput = {
    type: VoteTypes
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutUsersVotesInput
    user: UserCreateNestedOneWithoutPostsVotedInput
  }

  export type UserPostVoteUncheckedCreateInput = {
    postId: number
    userId: number
    type: VoteTypes
    createdAt?: Date | string
  }

  export type UserPostVoteUpdateInput = {
    type?: EnumVoteTypesFieldUpdateOperationsInput | VoteTypes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutUsersVotesInput
    user?: UserUpdateOneRequiredWithoutPostsVotedInput
  }

  export type UserPostVoteUncheckedUpdateInput = {
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumVoteTypesFieldUpdateOperationsInput | VoteTypes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPostVoteCreateManyInput = {
    postId: number
    userId: number
    type: VoteTypes
    createdAt?: Date | string
  }

  export type UserPostVoteUpdateManyMutationInput = {
    type?: EnumVoteTypesFieldUpdateOperationsInput | VoteTypes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPostVoteUncheckedUpdateManyInput = {
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumVoteTypesFieldUpdateOperationsInput | VoteTypes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type UserPostVoteListRelationFilter = {
    every?: UserPostVoteWhereInput
    some?: UserPostVoteWhereInput
    none?: UserPostVoteWhereInput
  }

  export type UserPostVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    spoiler?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    messageId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    messageId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    spoiler?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    messageId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    spoiler?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    messageId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    messageId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumVoteTypesFilter = {
    equals?: VoteTypes
    in?: Enumerable<VoteTypes>
    notIn?: Enumerable<VoteTypes>
    not?: NestedEnumVoteTypesFilter | VoteTypes
  }

  export type UserPostVotePostIdUserIdCompoundUniqueInput = {
    postId: number
    userId: number
  }

  export type UserPostVoteCountOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPostVoteAvgOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
  }

  export type UserPostVoteMaxOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPostVoteMinOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPostVoteSumOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
  }

  export type EnumVoteTypesWithAggregatesFilter = {
    equals?: VoteTypes
    in?: Enumerable<VoteTypes>
    notIn?: Enumerable<VoteTypes>
    not?: NestedEnumVoteTypesWithAggregatesFilter | VoteTypes
    _count?: NestedIntFilter
    _min?: NestedEnumVoteTypesFilter
    _max?: NestedEnumVoteTypesFilter
  }

  export type PostCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<PostCreateWithoutCategoryInput>, Enumerable<PostUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCategoryInput>
    createMany?: PostCreateManyCategoryInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<PostCreateWithoutCategoryInput>, Enumerable<PostUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCategoryInput>
    createMany?: PostCreateManyCategoryInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PostUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<PostCreateWithoutCategoryInput>, Enumerable<PostUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: PostCreateManyCategoryInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<PostCreateWithoutCategoryInput>, Enumerable<PostUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: PostCreateManyCategoryInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    connect?: CategoryWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutPostMessagesInput = {
    create?: XOR<Enumerable<PostCreateWithoutPostMessagesInput>, Enumerable<PostUncheckedCreateWithoutPostMessagesInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutPostMessagesInput>
    createMany?: PostCreateManyPostMessagesInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostCreateNestedOneWithoutMessagesInput = {
    create?: XOR<PostCreateWithoutMessagesInput, PostUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutMessagesInput
    connect?: PostWhereUniqueInput
  }

  export type UserPostVoteCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<UserPostVoteCreateWithoutPostInput>, Enumerable<UserPostVoteUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<UserPostVoteCreateOrConnectWithoutPostInput>
    createMany?: UserPostVoteCreateManyPostInputEnvelope
    connect?: Enumerable<UserPostVoteWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutPostMessagesInput = {
    create?: XOR<Enumerable<PostCreateWithoutPostMessagesInput>, Enumerable<PostUncheckedCreateWithoutPostMessagesInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutPostMessagesInput>
    createMany?: PostCreateManyPostMessagesInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type UserPostVoteUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<UserPostVoteCreateWithoutPostInput>, Enumerable<UserPostVoteUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<UserPostVoteCreateOrConnectWithoutPostInput>
    createMany?: UserPostVoteCreateManyPostInputEnvelope
    connect?: Enumerable<UserPostVoteWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    upsert?: CategoryUpsertWithoutPostsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type PostUpdateManyWithoutPostMessagesInput = {
    create?: XOR<Enumerable<PostCreateWithoutPostMessagesInput>, Enumerable<PostUncheckedCreateWithoutPostMessagesInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutPostMessagesInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutPostMessagesInput>
    createMany?: PostCreateManyPostMessagesInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutPostMessagesInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutPostMessagesInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostUpdateOneWithoutMessagesInput = {
    create?: XOR<PostCreateWithoutMessagesInput, PostUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutMessagesInput
    upsert?: PostUpsertWithoutMessagesInput
    connect?: PostWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<PostUpdateWithoutMessagesInput, PostUncheckedUpdateWithoutMessagesInput>
  }

  export type UserPostVoteUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<UserPostVoteCreateWithoutPostInput>, Enumerable<UserPostVoteUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<UserPostVoteCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<UserPostVoteUpsertWithWhereUniqueWithoutPostInput>
    createMany?: UserPostVoteCreateManyPostInputEnvelope
    connect?: Enumerable<UserPostVoteWhereUniqueInput>
    set?: Enumerable<UserPostVoteWhereUniqueInput>
    disconnect?: Enumerable<UserPostVoteWhereUniqueInput>
    delete?: Enumerable<UserPostVoteWhereUniqueInput>
    update?: Enumerable<UserPostVoteUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<UserPostVoteUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<UserPostVoteScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutPostMessagesInput = {
    create?: XOR<Enumerable<PostCreateWithoutPostMessagesInput>, Enumerable<PostUncheckedCreateWithoutPostMessagesInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutPostMessagesInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutPostMessagesInput>
    createMany?: PostCreateManyPostMessagesInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutPostMessagesInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutPostMessagesInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type UserPostVoteUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<UserPostVoteCreateWithoutPostInput>, Enumerable<UserPostVoteUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<UserPostVoteCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<UserPostVoteUpsertWithWhereUniqueWithoutPostInput>
    createMany?: UserPostVoteCreateManyPostInputEnvelope
    connect?: Enumerable<UserPostVoteWhereUniqueInput>
    set?: Enumerable<UserPostVoteWhereUniqueInput>
    disconnect?: Enumerable<UserPostVoteWhereUniqueInput>
    delete?: Enumerable<UserPostVoteWhereUniqueInput>
    update?: Enumerable<UserPostVoteUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<UserPostVoteUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<UserPostVoteScalarWhereInput>
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type UserPostVoteCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserPostVoteCreateWithoutUserInput>, Enumerable<UserPostVoteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserPostVoteCreateOrConnectWithoutUserInput>
    createMany?: UserPostVoteCreateManyUserInputEnvelope
    connect?: Enumerable<UserPostVoteWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type UserPostVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserPostVoteCreateWithoutUserInput>, Enumerable<UserPostVoteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserPostVoteCreateOrConnectWithoutUserInput>
    createMany?: UserPostVoteCreateManyUserInputEnvelope
    connect?: Enumerable<UserPostVoteWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PostUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type UserPostVoteUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<UserPostVoteCreateWithoutUserInput>, Enumerable<UserPostVoteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserPostVoteCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserPostVoteUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserPostVoteCreateManyUserInputEnvelope
    connect?: Enumerable<UserPostVoteWhereUniqueInput>
    set?: Enumerable<UserPostVoteWhereUniqueInput>
    disconnect?: Enumerable<UserPostVoteWhereUniqueInput>
    delete?: Enumerable<UserPostVoteWhereUniqueInput>
    update?: Enumerable<UserPostVoteUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserPostVoteUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserPostVoteScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type UserPostVoteUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<UserPostVoteCreateWithoutUserInput>, Enumerable<UserPostVoteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserPostVoteCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserPostVoteUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserPostVoteCreateManyUserInputEnvelope
    connect?: Enumerable<UserPostVoteWhereUniqueInput>
    set?: Enumerable<UserPostVoteWhereUniqueInput>
    disconnect?: Enumerable<UserPostVoteWhereUniqueInput>
    delete?: Enumerable<UserPostVoteWhereUniqueInput>
    update?: Enumerable<UserPostVoteUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserPostVoteUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserPostVoteScalarWhereInput>
  }

  export type PostCreateNestedOneWithoutUsersVotesInput = {
    create?: XOR<PostCreateWithoutUsersVotesInput, PostUncheckedCreateWithoutUsersVotesInput>
    connectOrCreate?: PostCreateOrConnectWithoutUsersVotesInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostsVotedInput = {
    create?: XOR<UserCreateWithoutPostsVotedInput, UserUncheckedCreateWithoutPostsVotedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsVotedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumVoteTypesFieldUpdateOperationsInput = {
    set?: VoteTypes
  }

  export type PostUpdateOneRequiredWithoutUsersVotesInput = {
    create?: XOR<PostCreateWithoutUsersVotesInput, PostUncheckedCreateWithoutUsersVotesInput>
    connectOrCreate?: PostCreateOrConnectWithoutUsersVotesInput
    upsert?: PostUpsertWithoutUsersVotesInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutUsersVotesInput, PostUncheckedUpdateWithoutUsersVotesInput>
  }

  export type UserUpdateOneRequiredWithoutPostsVotedInput = {
    create?: XOR<UserCreateWithoutPostsVotedInput, UserUncheckedCreateWithoutPostsVotedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsVotedInput
    upsert?: UserUpsertWithoutPostsVotedInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostsVotedInput, UserUncheckedUpdateWithoutPostsVotedInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedEnumVoteTypesFilter = {
    equals?: VoteTypes
    in?: Enumerable<VoteTypes>
    notIn?: Enumerable<VoteTypes>
    not?: NestedEnumVoteTypesFilter | VoteTypes
  }

  export type NestedEnumVoteTypesWithAggregatesFilter = {
    equals?: VoteTypes
    in?: Enumerable<VoteTypes>
    notIn?: Enumerable<VoteTypes>
    not?: NestedEnumVoteTypesWithAggregatesFilter | VoteTypes
    _count?: NestedIntFilter
    _min?: NestedEnumVoteTypesFilter
    _max?: NestedEnumVoteTypesFilter
  }

  export type PostCreateWithoutCategoryInput = {
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    User: UserCreateNestedOneWithoutPostsInput
    messages?: PostCreateNestedManyWithoutPostMessagesInput
    postMessages?: PostCreateNestedOneWithoutMessagesInput
    usersVotes?: UserPostVoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    userId: number
    messageId?: number | null
    messages?: PostUncheckedCreateNestedManyWithoutPostMessagesInput
    usersVotes?: UserPostVoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCategoryInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
  }

  export type PostCreateManyCategoryInputEnvelope = {
    data: Enumerable<PostCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCategoryInput, PostUncheckedUpdateWithoutCategoryInput>
    create: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCategoryInput, PostUncheckedUpdateWithoutCategoryInput>
  }

  export type PostUpdateManyWithWhereWithoutCategoryInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    content?: StringFilter | string
    spoiler?: BoolFilter | boolean
    userId?: IntFilter | number
    categoryId?: IntFilter | number
    messageId?: IntNullableFilter | number | null
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    password: string
    resetToken?: string | null
    firstname: string
    lastname: string
    admin?: boolean
    createdAt?: Date | string
    postsVoted?: UserPostVoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    password: string
    resetToken?: string | null
    firstname: string
    lastname: string
    admin?: boolean
    createdAt?: Date | string
    postsVoted?: UserPostVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CategoryCreateWithoutPostsInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type PostCreateWithoutPostMessagesInput = {
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    User: UserCreateNestedOneWithoutPostsInput
    Category: CategoryCreateNestedOneWithoutPostsInput
    messages?: PostCreateNestedManyWithoutPostMessagesInput
    usersVotes?: UserPostVoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostMessagesInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    userId: number
    categoryId: number
    messages?: PostUncheckedCreateNestedManyWithoutPostMessagesInput
    usersVotes?: UserPostVoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostMessagesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostMessagesInput, PostUncheckedCreateWithoutPostMessagesInput>
  }

  export type PostCreateManyPostMessagesInputEnvelope = {
    data: Enumerable<PostCreateManyPostMessagesInput>
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutMessagesInput = {
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    User: UserCreateNestedOneWithoutPostsInput
    Category: CategoryCreateNestedOneWithoutPostsInput
    postMessages?: PostCreateNestedOneWithoutMessagesInput
    usersVotes?: UserPostVoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutMessagesInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    userId: number
    categoryId: number
    messageId?: number | null
    usersVotes?: UserPostVoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutMessagesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutMessagesInput, PostUncheckedCreateWithoutMessagesInput>
  }

  export type UserPostVoteCreateWithoutPostInput = {
    type: VoteTypes
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsVotedInput
  }

  export type UserPostVoteUncheckedCreateWithoutPostInput = {
    userId: number
    type: VoteTypes
    createdAt?: Date | string
  }

  export type UserPostVoteCreateOrConnectWithoutPostInput = {
    where: UserPostVoteWhereUniqueInput
    create: XOR<UserPostVoteCreateWithoutPostInput, UserPostVoteUncheckedCreateWithoutPostInput>
  }

  export type UserPostVoteCreateManyPostInputEnvelope = {
    data: Enumerable<UserPostVoteCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postsVoted?: UserPostVoteUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postsVoted?: UserPostVoteUncheckedUpdateManyWithoutUserInput
  }

  export type CategoryUpsertWithoutPostsInput = {
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type CategoryUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpsertWithWhereUniqueWithoutPostMessagesInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutPostMessagesInput, PostUncheckedUpdateWithoutPostMessagesInput>
    create: XOR<PostCreateWithoutPostMessagesInput, PostUncheckedCreateWithoutPostMessagesInput>
  }

  export type PostUpdateWithWhereUniqueWithoutPostMessagesInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutPostMessagesInput, PostUncheckedUpdateWithoutPostMessagesInput>
  }

  export type PostUpdateManyWithWhereWithoutPostMessagesInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutMessagesInput>
  }

  export type PostUpsertWithoutMessagesInput = {
    update: XOR<PostUpdateWithoutMessagesInput, PostUncheckedUpdateWithoutMessagesInput>
    create: XOR<PostCreateWithoutMessagesInput, PostUncheckedCreateWithoutMessagesInput>
  }

  export type PostUpdateWithoutMessagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutPostsInput
    Category?: CategoryUpdateOneRequiredWithoutPostsInput
    postMessages?: PostUpdateOneWithoutMessagesInput
    usersVotes?: UserPostVoteUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
    usersVotes?: UserPostVoteUncheckedUpdateManyWithoutPostInput
  }

  export type UserPostVoteUpsertWithWhereUniqueWithoutPostInput = {
    where: UserPostVoteWhereUniqueInput
    update: XOR<UserPostVoteUpdateWithoutPostInput, UserPostVoteUncheckedUpdateWithoutPostInput>
    create: XOR<UserPostVoteCreateWithoutPostInput, UserPostVoteUncheckedCreateWithoutPostInput>
  }

  export type UserPostVoteUpdateWithWhereUniqueWithoutPostInput = {
    where: UserPostVoteWhereUniqueInput
    data: XOR<UserPostVoteUpdateWithoutPostInput, UserPostVoteUncheckedUpdateWithoutPostInput>
  }

  export type UserPostVoteUpdateManyWithWhereWithoutPostInput = {
    where: UserPostVoteScalarWhereInput
    data: XOR<UserPostVoteUpdateManyMutationInput, UserPostVoteUncheckedUpdateManyWithoutUsersVotesInput>
  }

  export type UserPostVoteScalarWhereInput = {
    AND?: Enumerable<UserPostVoteScalarWhereInput>
    OR?: Enumerable<UserPostVoteScalarWhereInput>
    NOT?: Enumerable<UserPostVoteScalarWhereInput>
    postId?: IntFilter | number
    userId?: IntFilter | number
    type?: EnumVoteTypesFilter | VoteTypes
    createdAt?: DateTimeFilter | Date | string
  }

  export type PostCreateWithoutUserInput = {
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    Category: CategoryCreateNestedOneWithoutPostsInput
    messages?: PostCreateNestedManyWithoutPostMessagesInput
    postMessages?: PostCreateNestedOneWithoutMessagesInput
    usersVotes?: UserPostVoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    categoryId: number
    messageId?: number | null
    messages?: PostUncheckedCreateNestedManyWithoutPostMessagesInput
    usersVotes?: UserPostVoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: Enumerable<PostCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserPostVoteCreateWithoutUserInput = {
    type: VoteTypes
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutUsersVotesInput
  }

  export type UserPostVoteUncheckedCreateWithoutUserInput = {
    postId: number
    type: VoteTypes
    createdAt?: Date | string
  }

  export type UserPostVoteCreateOrConnectWithoutUserInput = {
    where: UserPostVoteWhereUniqueInput
    create: XOR<UserPostVoteCreateWithoutUserInput, UserPostVoteUncheckedCreateWithoutUserInput>
  }

  export type UserPostVoteCreateManyUserInputEnvelope = {
    data: Enumerable<UserPostVoteCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type UserPostVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPostVoteWhereUniqueInput
    update: XOR<UserPostVoteUpdateWithoutUserInput, UserPostVoteUncheckedUpdateWithoutUserInput>
    create: XOR<UserPostVoteCreateWithoutUserInput, UserPostVoteUncheckedCreateWithoutUserInput>
  }

  export type UserPostVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPostVoteWhereUniqueInput
    data: XOR<UserPostVoteUpdateWithoutUserInput, UserPostVoteUncheckedUpdateWithoutUserInput>
  }

  export type UserPostVoteUpdateManyWithWhereWithoutUserInput = {
    where: UserPostVoteScalarWhereInput
    data: XOR<UserPostVoteUpdateManyMutationInput, UserPostVoteUncheckedUpdateManyWithoutPostsVotedInput>
  }

  export type PostCreateWithoutUsersVotesInput = {
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    User: UserCreateNestedOneWithoutPostsInput
    Category: CategoryCreateNestedOneWithoutPostsInput
    messages?: PostCreateNestedManyWithoutPostMessagesInput
    postMessages?: PostCreateNestedOneWithoutMessagesInput
  }

  export type PostUncheckedCreateWithoutUsersVotesInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    userId: number
    categoryId: number
    messageId?: number | null
    messages?: PostUncheckedCreateNestedManyWithoutPostMessagesInput
  }

  export type PostCreateOrConnectWithoutUsersVotesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUsersVotesInput, PostUncheckedCreateWithoutUsersVotesInput>
  }

  export type UserCreateWithoutPostsVotedInput = {
    email: string
    password: string
    resetToken?: string | null
    firstname: string
    lastname: string
    admin?: boolean
    createdAt?: Date | string
    Posts?: PostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsVotedInput = {
    id?: number
    email: string
    password: string
    resetToken?: string | null
    firstname: string
    lastname: string
    admin?: boolean
    createdAt?: Date | string
    Posts?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsVotedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsVotedInput, UserUncheckedCreateWithoutPostsVotedInput>
  }

  export type PostUpsertWithoutUsersVotesInput = {
    update: XOR<PostUpdateWithoutUsersVotesInput, PostUncheckedUpdateWithoutUsersVotesInput>
    create: XOR<PostCreateWithoutUsersVotesInput, PostUncheckedCreateWithoutUsersVotesInput>
  }

  export type PostUpdateWithoutUsersVotesInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutPostsInput
    Category?: CategoryUpdateOneRequiredWithoutPostsInput
    messages?: PostUpdateManyWithoutPostMessagesInput
    postMessages?: PostUpdateOneWithoutMessagesInput
  }

  export type PostUncheckedUpdateWithoutUsersVotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: PostUncheckedUpdateManyWithoutPostMessagesInput
  }

  export type UserUpsertWithoutPostsVotedInput = {
    update: XOR<UserUpdateWithoutPostsVotedInput, UserUncheckedUpdateWithoutPostsVotedInput>
    create: XOR<UserCreateWithoutPostsVotedInput, UserUncheckedCreateWithoutPostsVotedInput>
  }

  export type UserUpdateWithoutPostsVotedInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Posts?: PostUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutPostsVotedInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Posts?: PostUncheckedUpdateManyWithoutUserInput
  }

  export type PostCreateManyCategoryInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    userId: number
    messageId?: number | null
  }

  export type PostUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutPostsInput
    messages?: PostUpdateManyWithoutPostMessagesInput
    postMessages?: PostUpdateOneWithoutMessagesInput
    usersVotes?: UserPostVoteUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: PostUncheckedUpdateManyWithoutPostMessagesInput
    usersVotes?: UserPostVoteUncheckedUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyPostMessagesInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    userId: number
    categoryId: number
  }

  export type UserPostVoteCreateManyPostInput = {
    userId: number
    type: VoteTypes
    createdAt?: Date | string
  }

  export type PostUpdateWithoutPostMessagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutPostsInput
    Category?: CategoryUpdateOneRequiredWithoutPostsInput
    messages?: PostUpdateManyWithoutPostMessagesInput
    usersVotes?: UserPostVoteUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutPostMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    messages?: PostUncheckedUpdateManyWithoutPostMessagesInput
    usersVotes?: UserPostVoteUncheckedUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserPostVoteUpdateWithoutPostInput = {
    type?: EnumVoteTypesFieldUpdateOperationsInput | VoteTypes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsVotedInput
  }

  export type UserPostVoteUncheckedUpdateWithoutPostInput = {
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumVoteTypesFieldUpdateOperationsInput | VoteTypes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPostVoteUncheckedUpdateManyWithoutUsersVotesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumVoteTypesFieldUpdateOperationsInput | VoteTypes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyUserInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content: string
    spoiler?: boolean
    categoryId: number
    messageId?: number | null
  }

  export type UserPostVoteCreateManyUserInput = {
    postId: number
    type: VoteTypes
    createdAt?: Date | string
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    Category?: CategoryUpdateOneRequiredWithoutPostsInput
    messages?: PostUpdateManyWithoutPostMessagesInput
    postMessages?: PostUpdateOneWithoutMessagesInput
    usersVotes?: UserPostVoteUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    spoiler?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: PostUncheckedUpdateManyWithoutPostMessagesInput
    usersVotes?: UserPostVoteUncheckedUpdateManyWithoutPostInput
  }

  export type UserPostVoteUpdateWithoutUserInput = {
    type?: EnumVoteTypesFieldUpdateOperationsInput | VoteTypes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutUsersVotesInput
  }

  export type UserPostVoteUncheckedUpdateWithoutUserInput = {
    postId?: IntFieldUpdateOperationsInput | number
    type?: EnumVoteTypesFieldUpdateOperationsInput | VoteTypes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPostVoteUncheckedUpdateManyWithoutPostsVotedInput = {
    postId?: IntFieldUpdateOperationsInput | number
    type?: EnumVoteTypesFieldUpdateOperationsInput | VoteTypes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}