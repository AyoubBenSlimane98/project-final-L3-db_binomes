
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Binome
 * 
 */
export type Binome = $Result.DefaultSelection<Prisma.$BinomePayload>
/**
 * Model Etudaint
 * 
 */
export type Etudaint = $Result.DefaultSelection<Prisma.$EtudaintPayload>
/**
 * Model Emails
 * 
 */
export type Emails = $Result.DefaultSelection<Prisma.$EmailsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SexeUtilisateur: {
  Male: 'Male',
  Female: 'Female'
};

export type SexeUtilisateur = (typeof SexeUtilisateur)[keyof typeof SexeUtilisateur]

}

export type SexeUtilisateur = $Enums.SexeUtilisateur

export const SexeUtilisateur: typeof $Enums.SexeUtilisateur

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Binomes
 * const binomes = await prisma.binome.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Binomes
   * const binomes = await prisma.binome.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.binome`: Exposes CRUD operations for the **Binome** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Binomes
    * const binomes = await prisma.binome.findMany()
    * ```
    */
  get binome(): Prisma.BinomeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etudaint`: Exposes CRUD operations for the **Etudaint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etudaints
    * const etudaints = await prisma.etudaint.findMany()
    * ```
    */
  get etudaint(): Prisma.EtudaintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emails`: Exposes CRUD operations for the **Emails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.emails.findMany()
    * ```
    */
  get emails(): Prisma.EmailsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Binome: 'Binome',
    Etudaint: 'Etudaint',
    Emails: 'Emails'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "binome" | "etudaint" | "emails"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Binome: {
        payload: Prisma.$BinomePayload<ExtArgs>
        fields: Prisma.BinomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BinomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BinomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinomePayload>
          }
          findFirst: {
            args: Prisma.BinomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BinomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinomePayload>
          }
          findMany: {
            args: Prisma.BinomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinomePayload>[]
          }
          create: {
            args: Prisma.BinomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinomePayload>
          }
          createMany: {
            args: Prisma.BinomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BinomeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinomePayload>[]
          }
          delete: {
            args: Prisma.BinomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinomePayload>
          }
          update: {
            args: Prisma.BinomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinomePayload>
          }
          deleteMany: {
            args: Prisma.BinomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BinomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BinomeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinomePayload>[]
          }
          upsert: {
            args: Prisma.BinomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinomePayload>
          }
          aggregate: {
            args: Prisma.BinomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBinome>
          }
          groupBy: {
            args: Prisma.BinomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BinomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BinomeCountArgs<ExtArgs>
            result: $Utils.Optional<BinomeCountAggregateOutputType> | number
          }
        }
      }
      Etudaint: {
        payload: Prisma.$EtudaintPayload<ExtArgs>
        fields: Prisma.EtudaintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtudaintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudaintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtudaintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudaintPayload>
          }
          findFirst: {
            args: Prisma.EtudaintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudaintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtudaintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudaintPayload>
          }
          findMany: {
            args: Prisma.EtudaintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudaintPayload>[]
          }
          create: {
            args: Prisma.EtudaintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudaintPayload>
          }
          createMany: {
            args: Prisma.EtudaintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EtudaintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudaintPayload>[]
          }
          delete: {
            args: Prisma.EtudaintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudaintPayload>
          }
          update: {
            args: Prisma.EtudaintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudaintPayload>
          }
          deleteMany: {
            args: Prisma.EtudaintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtudaintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EtudaintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudaintPayload>[]
          }
          upsert: {
            args: Prisma.EtudaintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudaintPayload>
          }
          aggregate: {
            args: Prisma.EtudaintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtudaint>
          }
          groupBy: {
            args: Prisma.EtudaintGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtudaintGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtudaintCountArgs<ExtArgs>
            result: $Utils.Optional<EtudaintCountAggregateOutputType> | number
          }
        }
      }
      Emails: {
        payload: Prisma.$EmailsPayload<ExtArgs>
        fields: Prisma.EmailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailsPayload>
          }
          findFirst: {
            args: Prisma.EmailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailsPayload>
          }
          findMany: {
            args: Prisma.EmailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailsPayload>[]
          }
          create: {
            args: Prisma.EmailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailsPayload>
          }
          createMany: {
            args: Prisma.EmailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailsPayload>[]
          }
          delete: {
            args: Prisma.EmailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailsPayload>
          }
          update: {
            args: Prisma.EmailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailsPayload>
          }
          deleteMany: {
            args: Prisma.EmailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailsPayload>[]
          }
          upsert: {
            args: Prisma.EmailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailsPayload>
          }
          aggregate: {
            args: Prisma.EmailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmails>
          }
          groupBy: {
            args: Prisma.EmailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailsCountArgs<ExtArgs>
            result: $Utils.Optional<EmailsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    binome?: BinomeOmit
    etudaint?: EtudaintOmit
    emails?: EmailsOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Binome
   */

  export type AggregateBinome = {
    _count: BinomeCountAggregateOutputType | null
    _avg: BinomeAvgAggregateOutputType | null
    _sum: BinomeSumAggregateOutputType | null
    _min: BinomeMinAggregateOutputType | null
    _max: BinomeMaxAggregateOutputType | null
  }

  export type BinomeAvgAggregateOutputType = {
    id: number | null
    etudaint1Id: number | null
    etudaint2Id: number | null
  }

  export type BinomeSumAggregateOutputType = {
    id: number | null
    etudaint1Id: number | null
    etudaint2Id: number | null
  }

  export type BinomeMinAggregateOutputType = {
    id: number | null
    etudaint1Id: number | null
    etudaint2Id: number | null
  }

  export type BinomeMaxAggregateOutputType = {
    id: number | null
    etudaint1Id: number | null
    etudaint2Id: number | null
  }

  export type BinomeCountAggregateOutputType = {
    id: number
    etudaint1Id: number
    etudaint2Id: number
    _all: number
  }


  export type BinomeAvgAggregateInputType = {
    id?: true
    etudaint1Id?: true
    etudaint2Id?: true
  }

  export type BinomeSumAggregateInputType = {
    id?: true
    etudaint1Id?: true
    etudaint2Id?: true
  }

  export type BinomeMinAggregateInputType = {
    id?: true
    etudaint1Id?: true
    etudaint2Id?: true
  }

  export type BinomeMaxAggregateInputType = {
    id?: true
    etudaint1Id?: true
    etudaint2Id?: true
  }

  export type BinomeCountAggregateInputType = {
    id?: true
    etudaint1Id?: true
    etudaint2Id?: true
    _all?: true
  }

  export type BinomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Binome to aggregate.
     */
    where?: BinomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Binomes to fetch.
     */
    orderBy?: BinomeOrderByWithRelationInput | BinomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BinomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Binomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Binomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Binomes
    **/
    _count?: true | BinomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BinomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BinomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BinomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BinomeMaxAggregateInputType
  }

  export type GetBinomeAggregateType<T extends BinomeAggregateArgs> = {
        [P in keyof T & keyof AggregateBinome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBinome[P]>
      : GetScalarType<T[P], AggregateBinome[P]>
  }




  export type BinomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinomeWhereInput
    orderBy?: BinomeOrderByWithAggregationInput | BinomeOrderByWithAggregationInput[]
    by: BinomeScalarFieldEnum[] | BinomeScalarFieldEnum
    having?: BinomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BinomeCountAggregateInputType | true
    _avg?: BinomeAvgAggregateInputType
    _sum?: BinomeSumAggregateInputType
    _min?: BinomeMinAggregateInputType
    _max?: BinomeMaxAggregateInputType
  }

  export type BinomeGroupByOutputType = {
    id: number
    etudaint1Id: number
    etudaint2Id: number | null
    _count: BinomeCountAggregateOutputType | null
    _avg: BinomeAvgAggregateOutputType | null
    _sum: BinomeSumAggregateOutputType | null
    _min: BinomeMinAggregateOutputType | null
    _max: BinomeMaxAggregateOutputType | null
  }

  type GetBinomeGroupByPayload<T extends BinomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BinomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BinomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BinomeGroupByOutputType[P]>
            : GetScalarType<T[P], BinomeGroupByOutputType[P]>
        }
      >
    >


  export type BinomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    etudaint1Id?: boolean
    etudaint2Id?: boolean
    Etudaint1?: boolean | EtudaintDefaultArgs<ExtArgs>
    Etudaint2?: boolean | Binome$Etudaint2Args<ExtArgs>
  }, ExtArgs["result"]["binome"]>

  export type BinomeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    etudaint1Id?: boolean
    etudaint2Id?: boolean
    Etudaint1?: boolean | EtudaintDefaultArgs<ExtArgs>
    Etudaint2?: boolean | Binome$Etudaint2Args<ExtArgs>
  }, ExtArgs["result"]["binome"]>

  export type BinomeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    etudaint1Id?: boolean
    etudaint2Id?: boolean
    Etudaint1?: boolean | EtudaintDefaultArgs<ExtArgs>
    Etudaint2?: boolean | Binome$Etudaint2Args<ExtArgs>
  }, ExtArgs["result"]["binome"]>

  export type BinomeSelectScalar = {
    id?: boolean
    etudaint1Id?: boolean
    etudaint2Id?: boolean
  }

  export type BinomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "etudaint1Id" | "etudaint2Id", ExtArgs["result"]["binome"]>
  export type BinomeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Etudaint1?: boolean | EtudaintDefaultArgs<ExtArgs>
    Etudaint2?: boolean | Binome$Etudaint2Args<ExtArgs>
  }
  export type BinomeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Etudaint1?: boolean | EtudaintDefaultArgs<ExtArgs>
    Etudaint2?: boolean | Binome$Etudaint2Args<ExtArgs>
  }
  export type BinomeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Etudaint1?: boolean | EtudaintDefaultArgs<ExtArgs>
    Etudaint2?: boolean | Binome$Etudaint2Args<ExtArgs>
  }

  export type $BinomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Binome"
    objects: {
      Etudaint1: Prisma.$EtudaintPayload<ExtArgs>
      Etudaint2: Prisma.$EtudaintPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      etudaint1Id: number
      etudaint2Id: number | null
    }, ExtArgs["result"]["binome"]>
    composites: {}
  }

  type BinomeGetPayload<S extends boolean | null | undefined | BinomeDefaultArgs> = $Result.GetResult<Prisma.$BinomePayload, S>

  type BinomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BinomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BinomeCountAggregateInputType | true
    }

  export interface BinomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Binome'], meta: { name: 'Binome' } }
    /**
     * Find zero or one Binome that matches the filter.
     * @param {BinomeFindUniqueArgs} args - Arguments to find a Binome
     * @example
     * // Get one Binome
     * const binome = await prisma.binome.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BinomeFindUniqueArgs>(args: SelectSubset<T, BinomeFindUniqueArgs<ExtArgs>>): Prisma__BinomeClient<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Binome that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BinomeFindUniqueOrThrowArgs} args - Arguments to find a Binome
     * @example
     * // Get one Binome
     * const binome = await prisma.binome.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BinomeFindUniqueOrThrowArgs>(args: SelectSubset<T, BinomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BinomeClient<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Binome that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinomeFindFirstArgs} args - Arguments to find a Binome
     * @example
     * // Get one Binome
     * const binome = await prisma.binome.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BinomeFindFirstArgs>(args?: SelectSubset<T, BinomeFindFirstArgs<ExtArgs>>): Prisma__BinomeClient<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Binome that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinomeFindFirstOrThrowArgs} args - Arguments to find a Binome
     * @example
     * // Get one Binome
     * const binome = await prisma.binome.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BinomeFindFirstOrThrowArgs>(args?: SelectSubset<T, BinomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BinomeClient<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Binomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Binomes
     * const binomes = await prisma.binome.findMany()
     * 
     * // Get first 10 Binomes
     * const binomes = await prisma.binome.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const binomeWithIdOnly = await prisma.binome.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BinomeFindManyArgs>(args?: SelectSubset<T, BinomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Binome.
     * @param {BinomeCreateArgs} args - Arguments to create a Binome.
     * @example
     * // Create one Binome
     * const Binome = await prisma.binome.create({
     *   data: {
     *     // ... data to create a Binome
     *   }
     * })
     * 
     */
    create<T extends BinomeCreateArgs>(args: SelectSubset<T, BinomeCreateArgs<ExtArgs>>): Prisma__BinomeClient<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Binomes.
     * @param {BinomeCreateManyArgs} args - Arguments to create many Binomes.
     * @example
     * // Create many Binomes
     * const binome = await prisma.binome.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BinomeCreateManyArgs>(args?: SelectSubset<T, BinomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Binomes and returns the data saved in the database.
     * @param {BinomeCreateManyAndReturnArgs} args - Arguments to create many Binomes.
     * @example
     * // Create many Binomes
     * const binome = await prisma.binome.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Binomes and only return the `id`
     * const binomeWithIdOnly = await prisma.binome.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BinomeCreateManyAndReturnArgs>(args?: SelectSubset<T, BinomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Binome.
     * @param {BinomeDeleteArgs} args - Arguments to delete one Binome.
     * @example
     * // Delete one Binome
     * const Binome = await prisma.binome.delete({
     *   where: {
     *     // ... filter to delete one Binome
     *   }
     * })
     * 
     */
    delete<T extends BinomeDeleteArgs>(args: SelectSubset<T, BinomeDeleteArgs<ExtArgs>>): Prisma__BinomeClient<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Binome.
     * @param {BinomeUpdateArgs} args - Arguments to update one Binome.
     * @example
     * // Update one Binome
     * const binome = await prisma.binome.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BinomeUpdateArgs>(args: SelectSubset<T, BinomeUpdateArgs<ExtArgs>>): Prisma__BinomeClient<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Binomes.
     * @param {BinomeDeleteManyArgs} args - Arguments to filter Binomes to delete.
     * @example
     * // Delete a few Binomes
     * const { count } = await prisma.binome.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BinomeDeleteManyArgs>(args?: SelectSubset<T, BinomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Binomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Binomes
     * const binome = await prisma.binome.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BinomeUpdateManyArgs>(args: SelectSubset<T, BinomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Binomes and returns the data updated in the database.
     * @param {BinomeUpdateManyAndReturnArgs} args - Arguments to update many Binomes.
     * @example
     * // Update many Binomes
     * const binome = await prisma.binome.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Binomes and only return the `id`
     * const binomeWithIdOnly = await prisma.binome.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BinomeUpdateManyAndReturnArgs>(args: SelectSubset<T, BinomeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Binome.
     * @param {BinomeUpsertArgs} args - Arguments to update or create a Binome.
     * @example
     * // Update or create a Binome
     * const binome = await prisma.binome.upsert({
     *   create: {
     *     // ... data to create a Binome
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Binome we want to update
     *   }
     * })
     */
    upsert<T extends BinomeUpsertArgs>(args: SelectSubset<T, BinomeUpsertArgs<ExtArgs>>): Prisma__BinomeClient<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Binomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinomeCountArgs} args - Arguments to filter Binomes to count.
     * @example
     * // Count the number of Binomes
     * const count = await prisma.binome.count({
     *   where: {
     *     // ... the filter for the Binomes we want to count
     *   }
     * })
    **/
    count<T extends BinomeCountArgs>(
      args?: Subset<T, BinomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BinomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Binome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BinomeAggregateArgs>(args: Subset<T, BinomeAggregateArgs>): Prisma.PrismaPromise<GetBinomeAggregateType<T>>

    /**
     * Group by Binome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinomeGroupByArgs} args - Group by arguments.
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
      T extends BinomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BinomeGroupByArgs['orderBy'] }
        : { orderBy?: BinomeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BinomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBinomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Binome model
   */
  readonly fields: BinomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Binome.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BinomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Etudaint1<T extends EtudaintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtudaintDefaultArgs<ExtArgs>>): Prisma__EtudaintClient<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Etudaint2<T extends Binome$Etudaint2Args<ExtArgs> = {}>(args?: Subset<T, Binome$Etudaint2Args<ExtArgs>>): Prisma__EtudaintClient<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Binome model
   */
  interface BinomeFieldRefs {
    readonly id: FieldRef<"Binome", 'Int'>
    readonly etudaint1Id: FieldRef<"Binome", 'Int'>
    readonly etudaint2Id: FieldRef<"Binome", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Binome findUnique
   */
  export type BinomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeInclude<ExtArgs> | null
    /**
     * Filter, which Binome to fetch.
     */
    where: BinomeWhereUniqueInput
  }

  /**
   * Binome findUniqueOrThrow
   */
  export type BinomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeInclude<ExtArgs> | null
    /**
     * Filter, which Binome to fetch.
     */
    where: BinomeWhereUniqueInput
  }

  /**
   * Binome findFirst
   */
  export type BinomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeInclude<ExtArgs> | null
    /**
     * Filter, which Binome to fetch.
     */
    where?: BinomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Binomes to fetch.
     */
    orderBy?: BinomeOrderByWithRelationInput | BinomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Binomes.
     */
    cursor?: BinomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Binomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Binomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Binomes.
     */
    distinct?: BinomeScalarFieldEnum | BinomeScalarFieldEnum[]
  }

  /**
   * Binome findFirstOrThrow
   */
  export type BinomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeInclude<ExtArgs> | null
    /**
     * Filter, which Binome to fetch.
     */
    where?: BinomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Binomes to fetch.
     */
    orderBy?: BinomeOrderByWithRelationInput | BinomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Binomes.
     */
    cursor?: BinomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Binomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Binomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Binomes.
     */
    distinct?: BinomeScalarFieldEnum | BinomeScalarFieldEnum[]
  }

  /**
   * Binome findMany
   */
  export type BinomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeInclude<ExtArgs> | null
    /**
     * Filter, which Binomes to fetch.
     */
    where?: BinomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Binomes to fetch.
     */
    orderBy?: BinomeOrderByWithRelationInput | BinomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Binomes.
     */
    cursor?: BinomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Binomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Binomes.
     */
    skip?: number
    distinct?: BinomeScalarFieldEnum | BinomeScalarFieldEnum[]
  }

  /**
   * Binome create
   */
  export type BinomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeInclude<ExtArgs> | null
    /**
     * The data needed to create a Binome.
     */
    data: XOR<BinomeCreateInput, BinomeUncheckedCreateInput>
  }

  /**
   * Binome createMany
   */
  export type BinomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Binomes.
     */
    data: BinomeCreateManyInput | BinomeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Binome createManyAndReturn
   */
  export type BinomeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * The data used to create many Binomes.
     */
    data: BinomeCreateManyInput | BinomeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Binome update
   */
  export type BinomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeInclude<ExtArgs> | null
    /**
     * The data needed to update a Binome.
     */
    data: XOR<BinomeUpdateInput, BinomeUncheckedUpdateInput>
    /**
     * Choose, which Binome to update.
     */
    where: BinomeWhereUniqueInput
  }

  /**
   * Binome updateMany
   */
  export type BinomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Binomes.
     */
    data: XOR<BinomeUpdateManyMutationInput, BinomeUncheckedUpdateManyInput>
    /**
     * Filter which Binomes to update
     */
    where?: BinomeWhereInput
    /**
     * Limit how many Binomes to update.
     */
    limit?: number
  }

  /**
   * Binome updateManyAndReturn
   */
  export type BinomeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * The data used to update Binomes.
     */
    data: XOR<BinomeUpdateManyMutationInput, BinomeUncheckedUpdateManyInput>
    /**
     * Filter which Binomes to update
     */
    where?: BinomeWhereInput
    /**
     * Limit how many Binomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Binome upsert
   */
  export type BinomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeInclude<ExtArgs> | null
    /**
     * The filter to search for the Binome to update in case it exists.
     */
    where: BinomeWhereUniqueInput
    /**
     * In case the Binome found by the `where` argument doesn't exist, create a new Binome with this data.
     */
    create: XOR<BinomeCreateInput, BinomeUncheckedCreateInput>
    /**
     * In case the Binome was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BinomeUpdateInput, BinomeUncheckedUpdateInput>
  }

  /**
   * Binome delete
   */
  export type BinomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeInclude<ExtArgs> | null
    /**
     * Filter which Binome to delete.
     */
    where: BinomeWhereUniqueInput
  }

  /**
   * Binome deleteMany
   */
  export type BinomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Binomes to delete
     */
    where?: BinomeWhereInput
    /**
     * Limit how many Binomes to delete.
     */
    limit?: number
  }

  /**
   * Binome.Etudaint2
   */
  export type Binome$Etudaint2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudaintInclude<ExtArgs> | null
    where?: EtudaintWhereInput
  }

  /**
   * Binome without action
   */
  export type BinomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeInclude<ExtArgs> | null
  }


  /**
   * Model Etudaint
   */

  export type AggregateEtudaint = {
    _count: EtudaintCountAggregateOutputType | null
    _avg: EtudaintAvgAggregateOutputType | null
    _sum: EtudaintSumAggregateOutputType | null
    _min: EtudaintMinAggregateOutputType | null
    _max: EtudaintMaxAggregateOutputType | null
  }

  export type EtudaintAvgAggregateOutputType = {
    id: number | null
  }

  export type EtudaintSumAggregateOutputType = {
    id: number | null
  }

  export type EtudaintMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    matricul: string | null
    sexe: $Enums.SexeUtilisateur | null
    dateNaissance: Date | null
  }

  export type EtudaintMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    matricul: string | null
    sexe: $Enums.SexeUtilisateur | null
    dateNaissance: Date | null
  }

  export type EtudaintCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    matricul: number
    sexe: number
    dateNaissance: number
    _all: number
  }


  export type EtudaintAvgAggregateInputType = {
    id?: true
  }

  export type EtudaintSumAggregateInputType = {
    id?: true
  }

  export type EtudaintMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    matricul?: true
    sexe?: true
    dateNaissance?: true
  }

  export type EtudaintMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    matricul?: true
    sexe?: true
    dateNaissance?: true
  }

  export type EtudaintCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    matricul?: true
    sexe?: true
    dateNaissance?: true
    _all?: true
  }

  export type EtudaintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etudaint to aggregate.
     */
    where?: EtudaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etudaints to fetch.
     */
    orderBy?: EtudaintOrderByWithRelationInput | EtudaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtudaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etudaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etudaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etudaints
    **/
    _count?: true | EtudaintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtudaintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtudaintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtudaintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtudaintMaxAggregateInputType
  }

  export type GetEtudaintAggregateType<T extends EtudaintAggregateArgs> = {
        [P in keyof T & keyof AggregateEtudaint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtudaint[P]>
      : GetScalarType<T[P], AggregateEtudaint[P]>
  }




  export type EtudaintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtudaintWhereInput
    orderBy?: EtudaintOrderByWithAggregationInput | EtudaintOrderByWithAggregationInput[]
    by: EtudaintScalarFieldEnum[] | EtudaintScalarFieldEnum
    having?: EtudaintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtudaintCountAggregateInputType | true
    _avg?: EtudaintAvgAggregateInputType
    _sum?: EtudaintSumAggregateInputType
    _min?: EtudaintMinAggregateInputType
    _max?: EtudaintMaxAggregateInputType
  }

  export type EtudaintGroupByOutputType = {
    id: number
    nom: string
    prenom: string
    email: string
    matricul: string
    sexe: $Enums.SexeUtilisateur
    dateNaissance: Date
    _count: EtudaintCountAggregateOutputType | null
    _avg: EtudaintAvgAggregateOutputType | null
    _sum: EtudaintSumAggregateOutputType | null
    _min: EtudaintMinAggregateOutputType | null
    _max: EtudaintMaxAggregateOutputType | null
  }

  type GetEtudaintGroupByPayload<T extends EtudaintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtudaintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtudaintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtudaintGroupByOutputType[P]>
            : GetScalarType<T[P], EtudaintGroupByOutputType[P]>
        }
      >
    >


  export type EtudaintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    matricul?: boolean
    sexe?: boolean
    dateNaissance?: boolean
    Binome1?: boolean | Etudaint$Binome1Args<ExtArgs>
    Binome2?: boolean | Etudaint$Binome2Args<ExtArgs>
  }, ExtArgs["result"]["etudaint"]>

  export type EtudaintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    matricul?: boolean
    sexe?: boolean
    dateNaissance?: boolean
  }, ExtArgs["result"]["etudaint"]>

  export type EtudaintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    matricul?: boolean
    sexe?: boolean
    dateNaissance?: boolean
  }, ExtArgs["result"]["etudaint"]>

  export type EtudaintSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    matricul?: boolean
    sexe?: boolean
    dateNaissance?: boolean
  }

  export type EtudaintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "matricul" | "sexe" | "dateNaissance", ExtArgs["result"]["etudaint"]>
  export type EtudaintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Binome1?: boolean | Etudaint$Binome1Args<ExtArgs>
    Binome2?: boolean | Etudaint$Binome2Args<ExtArgs>
  }
  export type EtudaintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EtudaintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EtudaintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etudaint"
    objects: {
      Binome1: Prisma.$BinomePayload<ExtArgs> | null
      Binome2: Prisma.$BinomePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      prenom: string
      email: string
      matricul: string
      sexe: $Enums.SexeUtilisateur
      dateNaissance: Date
    }, ExtArgs["result"]["etudaint"]>
    composites: {}
  }

  type EtudaintGetPayload<S extends boolean | null | undefined | EtudaintDefaultArgs> = $Result.GetResult<Prisma.$EtudaintPayload, S>

  type EtudaintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtudaintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtudaintCountAggregateInputType | true
    }

  export interface EtudaintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etudaint'], meta: { name: 'Etudaint' } }
    /**
     * Find zero or one Etudaint that matches the filter.
     * @param {EtudaintFindUniqueArgs} args - Arguments to find a Etudaint
     * @example
     * // Get one Etudaint
     * const etudaint = await prisma.etudaint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtudaintFindUniqueArgs>(args: SelectSubset<T, EtudaintFindUniqueArgs<ExtArgs>>): Prisma__EtudaintClient<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etudaint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtudaintFindUniqueOrThrowArgs} args - Arguments to find a Etudaint
     * @example
     * // Get one Etudaint
     * const etudaint = await prisma.etudaint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtudaintFindUniqueOrThrowArgs>(args: SelectSubset<T, EtudaintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtudaintClient<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etudaint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudaintFindFirstArgs} args - Arguments to find a Etudaint
     * @example
     * // Get one Etudaint
     * const etudaint = await prisma.etudaint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtudaintFindFirstArgs>(args?: SelectSubset<T, EtudaintFindFirstArgs<ExtArgs>>): Prisma__EtudaintClient<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etudaint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudaintFindFirstOrThrowArgs} args - Arguments to find a Etudaint
     * @example
     * // Get one Etudaint
     * const etudaint = await prisma.etudaint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtudaintFindFirstOrThrowArgs>(args?: SelectSubset<T, EtudaintFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtudaintClient<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etudaints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudaintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etudaints
     * const etudaints = await prisma.etudaint.findMany()
     * 
     * // Get first 10 Etudaints
     * const etudaints = await prisma.etudaint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etudaintWithIdOnly = await prisma.etudaint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtudaintFindManyArgs>(args?: SelectSubset<T, EtudaintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etudaint.
     * @param {EtudaintCreateArgs} args - Arguments to create a Etudaint.
     * @example
     * // Create one Etudaint
     * const Etudaint = await prisma.etudaint.create({
     *   data: {
     *     // ... data to create a Etudaint
     *   }
     * })
     * 
     */
    create<T extends EtudaintCreateArgs>(args: SelectSubset<T, EtudaintCreateArgs<ExtArgs>>): Prisma__EtudaintClient<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etudaints.
     * @param {EtudaintCreateManyArgs} args - Arguments to create many Etudaints.
     * @example
     * // Create many Etudaints
     * const etudaint = await prisma.etudaint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtudaintCreateManyArgs>(args?: SelectSubset<T, EtudaintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Etudaints and returns the data saved in the database.
     * @param {EtudaintCreateManyAndReturnArgs} args - Arguments to create many Etudaints.
     * @example
     * // Create many Etudaints
     * const etudaint = await prisma.etudaint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Etudaints and only return the `id`
     * const etudaintWithIdOnly = await prisma.etudaint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EtudaintCreateManyAndReturnArgs>(args?: SelectSubset<T, EtudaintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Etudaint.
     * @param {EtudaintDeleteArgs} args - Arguments to delete one Etudaint.
     * @example
     * // Delete one Etudaint
     * const Etudaint = await prisma.etudaint.delete({
     *   where: {
     *     // ... filter to delete one Etudaint
     *   }
     * })
     * 
     */
    delete<T extends EtudaintDeleteArgs>(args: SelectSubset<T, EtudaintDeleteArgs<ExtArgs>>): Prisma__EtudaintClient<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etudaint.
     * @param {EtudaintUpdateArgs} args - Arguments to update one Etudaint.
     * @example
     * // Update one Etudaint
     * const etudaint = await prisma.etudaint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtudaintUpdateArgs>(args: SelectSubset<T, EtudaintUpdateArgs<ExtArgs>>): Prisma__EtudaintClient<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etudaints.
     * @param {EtudaintDeleteManyArgs} args - Arguments to filter Etudaints to delete.
     * @example
     * // Delete a few Etudaints
     * const { count } = await prisma.etudaint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtudaintDeleteManyArgs>(args?: SelectSubset<T, EtudaintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etudaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudaintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etudaints
     * const etudaint = await prisma.etudaint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtudaintUpdateManyArgs>(args: SelectSubset<T, EtudaintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etudaints and returns the data updated in the database.
     * @param {EtudaintUpdateManyAndReturnArgs} args - Arguments to update many Etudaints.
     * @example
     * // Update many Etudaints
     * const etudaint = await prisma.etudaint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Etudaints and only return the `id`
     * const etudaintWithIdOnly = await prisma.etudaint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EtudaintUpdateManyAndReturnArgs>(args: SelectSubset<T, EtudaintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Etudaint.
     * @param {EtudaintUpsertArgs} args - Arguments to update or create a Etudaint.
     * @example
     * // Update or create a Etudaint
     * const etudaint = await prisma.etudaint.upsert({
     *   create: {
     *     // ... data to create a Etudaint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etudaint we want to update
     *   }
     * })
     */
    upsert<T extends EtudaintUpsertArgs>(args: SelectSubset<T, EtudaintUpsertArgs<ExtArgs>>): Prisma__EtudaintClient<$Result.GetResult<Prisma.$EtudaintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etudaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudaintCountArgs} args - Arguments to filter Etudaints to count.
     * @example
     * // Count the number of Etudaints
     * const count = await prisma.etudaint.count({
     *   where: {
     *     // ... the filter for the Etudaints we want to count
     *   }
     * })
    **/
    count<T extends EtudaintCountArgs>(
      args?: Subset<T, EtudaintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtudaintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etudaint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudaintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtudaintAggregateArgs>(args: Subset<T, EtudaintAggregateArgs>): Prisma.PrismaPromise<GetEtudaintAggregateType<T>>

    /**
     * Group by Etudaint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudaintGroupByArgs} args - Group by arguments.
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
      T extends EtudaintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtudaintGroupByArgs['orderBy'] }
        : { orderBy?: EtudaintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EtudaintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtudaintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etudaint model
   */
  readonly fields: EtudaintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etudaint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtudaintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Binome1<T extends Etudaint$Binome1Args<ExtArgs> = {}>(args?: Subset<T, Etudaint$Binome1Args<ExtArgs>>): Prisma__BinomeClient<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Binome2<T extends Etudaint$Binome2Args<ExtArgs> = {}>(args?: Subset<T, Etudaint$Binome2Args<ExtArgs>>): Prisma__BinomeClient<$Result.GetResult<Prisma.$BinomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Etudaint model
   */
  interface EtudaintFieldRefs {
    readonly id: FieldRef<"Etudaint", 'Int'>
    readonly nom: FieldRef<"Etudaint", 'String'>
    readonly prenom: FieldRef<"Etudaint", 'String'>
    readonly email: FieldRef<"Etudaint", 'String'>
    readonly matricul: FieldRef<"Etudaint", 'String'>
    readonly sexe: FieldRef<"Etudaint", 'SexeUtilisateur'>
    readonly dateNaissance: FieldRef<"Etudaint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Etudaint findUnique
   */
  export type EtudaintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudaintInclude<ExtArgs> | null
    /**
     * Filter, which Etudaint to fetch.
     */
    where: EtudaintWhereUniqueInput
  }

  /**
   * Etudaint findUniqueOrThrow
   */
  export type EtudaintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudaintInclude<ExtArgs> | null
    /**
     * Filter, which Etudaint to fetch.
     */
    where: EtudaintWhereUniqueInput
  }

  /**
   * Etudaint findFirst
   */
  export type EtudaintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudaintInclude<ExtArgs> | null
    /**
     * Filter, which Etudaint to fetch.
     */
    where?: EtudaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etudaints to fetch.
     */
    orderBy?: EtudaintOrderByWithRelationInput | EtudaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etudaints.
     */
    cursor?: EtudaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etudaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etudaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etudaints.
     */
    distinct?: EtudaintScalarFieldEnum | EtudaintScalarFieldEnum[]
  }

  /**
   * Etudaint findFirstOrThrow
   */
  export type EtudaintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudaintInclude<ExtArgs> | null
    /**
     * Filter, which Etudaint to fetch.
     */
    where?: EtudaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etudaints to fetch.
     */
    orderBy?: EtudaintOrderByWithRelationInput | EtudaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etudaints.
     */
    cursor?: EtudaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etudaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etudaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etudaints.
     */
    distinct?: EtudaintScalarFieldEnum | EtudaintScalarFieldEnum[]
  }

  /**
   * Etudaint findMany
   */
  export type EtudaintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudaintInclude<ExtArgs> | null
    /**
     * Filter, which Etudaints to fetch.
     */
    where?: EtudaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etudaints to fetch.
     */
    orderBy?: EtudaintOrderByWithRelationInput | EtudaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etudaints.
     */
    cursor?: EtudaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etudaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etudaints.
     */
    skip?: number
    distinct?: EtudaintScalarFieldEnum | EtudaintScalarFieldEnum[]
  }

  /**
   * Etudaint create
   */
  export type EtudaintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudaintInclude<ExtArgs> | null
    /**
     * The data needed to create a Etudaint.
     */
    data: XOR<EtudaintCreateInput, EtudaintUncheckedCreateInput>
  }

  /**
   * Etudaint createMany
   */
  export type EtudaintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etudaints.
     */
    data: EtudaintCreateManyInput | EtudaintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etudaint createManyAndReturn
   */
  export type EtudaintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * The data used to create many Etudaints.
     */
    data: EtudaintCreateManyInput | EtudaintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etudaint update
   */
  export type EtudaintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudaintInclude<ExtArgs> | null
    /**
     * The data needed to update a Etudaint.
     */
    data: XOR<EtudaintUpdateInput, EtudaintUncheckedUpdateInput>
    /**
     * Choose, which Etudaint to update.
     */
    where: EtudaintWhereUniqueInput
  }

  /**
   * Etudaint updateMany
   */
  export type EtudaintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etudaints.
     */
    data: XOR<EtudaintUpdateManyMutationInput, EtudaintUncheckedUpdateManyInput>
    /**
     * Filter which Etudaints to update
     */
    where?: EtudaintWhereInput
    /**
     * Limit how many Etudaints to update.
     */
    limit?: number
  }

  /**
   * Etudaint updateManyAndReturn
   */
  export type EtudaintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * The data used to update Etudaints.
     */
    data: XOR<EtudaintUpdateManyMutationInput, EtudaintUncheckedUpdateManyInput>
    /**
     * Filter which Etudaints to update
     */
    where?: EtudaintWhereInput
    /**
     * Limit how many Etudaints to update.
     */
    limit?: number
  }

  /**
   * Etudaint upsert
   */
  export type EtudaintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudaintInclude<ExtArgs> | null
    /**
     * The filter to search for the Etudaint to update in case it exists.
     */
    where: EtudaintWhereUniqueInput
    /**
     * In case the Etudaint found by the `where` argument doesn't exist, create a new Etudaint with this data.
     */
    create: XOR<EtudaintCreateInput, EtudaintUncheckedCreateInput>
    /**
     * In case the Etudaint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtudaintUpdateInput, EtudaintUncheckedUpdateInput>
  }

  /**
   * Etudaint delete
   */
  export type EtudaintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudaintInclude<ExtArgs> | null
    /**
     * Filter which Etudaint to delete.
     */
    where: EtudaintWhereUniqueInput
  }

  /**
   * Etudaint deleteMany
   */
  export type EtudaintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etudaints to delete
     */
    where?: EtudaintWhereInput
    /**
     * Limit how many Etudaints to delete.
     */
    limit?: number
  }

  /**
   * Etudaint.Binome1
   */
  export type Etudaint$Binome1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeInclude<ExtArgs> | null
    where?: BinomeWhereInput
  }

  /**
   * Etudaint.Binome2
   */
  export type Etudaint$Binome2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binome
     */
    select?: BinomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binome
     */
    omit?: BinomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinomeInclude<ExtArgs> | null
    where?: BinomeWhereInput
  }

  /**
   * Etudaint without action
   */
  export type EtudaintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudaint
     */
    select?: EtudaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudaint
     */
    omit?: EtudaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudaintInclude<ExtArgs> | null
  }


  /**
   * Model Emails
   */

  export type AggregateEmails = {
    _count: EmailsCountAggregateOutputType | null
    _avg: EmailsAvgAggregateOutputType | null
    _sum: EmailsSumAggregateOutputType | null
    _min: EmailsMinAggregateOutputType | null
    _max: EmailsMaxAggregateOutputType | null
  }

  export type EmailsAvgAggregateOutputType = {
    id: number | null
  }

  export type EmailsSumAggregateOutputType = {
    id: number | null
  }

  export type EmailsMinAggregateOutputType = {
    id: number | null
    email: string | null
  }

  export type EmailsMaxAggregateOutputType = {
    id: number | null
    email: string | null
  }

  export type EmailsCountAggregateOutputType = {
    id: number
    email: number
    _all: number
  }


  export type EmailsAvgAggregateInputType = {
    id?: true
  }

  export type EmailsSumAggregateInputType = {
    id?: true
  }

  export type EmailsMinAggregateInputType = {
    id?: true
    email?: true
  }

  export type EmailsMaxAggregateInputType = {
    id?: true
    email?: true
  }

  export type EmailsCountAggregateInputType = {
    id?: true
    email?: true
    _all?: true
  }

  export type EmailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emails to aggregate.
     */
    where?: EmailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailsOrderByWithRelationInput | EmailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emails
    **/
    _count?: true | EmailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailsMaxAggregateInputType
  }

  export type GetEmailsAggregateType<T extends EmailsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmails[P]>
      : GetScalarType<T[P], AggregateEmails[P]>
  }




  export type EmailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailsWhereInput
    orderBy?: EmailsOrderByWithAggregationInput | EmailsOrderByWithAggregationInput[]
    by: EmailsScalarFieldEnum[] | EmailsScalarFieldEnum
    having?: EmailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailsCountAggregateInputType | true
    _avg?: EmailsAvgAggregateInputType
    _sum?: EmailsSumAggregateInputType
    _min?: EmailsMinAggregateInputType
    _max?: EmailsMaxAggregateInputType
  }

  export type EmailsGroupByOutputType = {
    id: number
    email: string
    _count: EmailsCountAggregateOutputType | null
    _avg: EmailsAvgAggregateOutputType | null
    _sum: EmailsSumAggregateOutputType | null
    _min: EmailsMinAggregateOutputType | null
    _max: EmailsMaxAggregateOutputType | null
  }

  type GetEmailsGroupByPayload<T extends EmailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailsGroupByOutputType[P]>
            : GetScalarType<T[P], EmailsGroupByOutputType[P]>
        }
      >
    >


  export type EmailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["emails"]>

  export type EmailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["emails"]>

  export type EmailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["emails"]>

  export type EmailsSelectScalar = {
    id?: boolean
    email?: boolean
  }

  export type EmailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email", ExtArgs["result"]["emails"]>

  export type $EmailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emails"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
    }, ExtArgs["result"]["emails"]>
    composites: {}
  }

  type EmailsGetPayload<S extends boolean | null | undefined | EmailsDefaultArgs> = $Result.GetResult<Prisma.$EmailsPayload, S>

  type EmailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailsCountAggregateInputType | true
    }

  export interface EmailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emails'], meta: { name: 'Emails' } }
    /**
     * Find zero or one Emails that matches the filter.
     * @param {EmailsFindUniqueArgs} args - Arguments to find a Emails
     * @example
     * // Get one Emails
     * const emails = await prisma.emails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailsFindUniqueArgs>(args: SelectSubset<T, EmailsFindUniqueArgs<ExtArgs>>): Prisma__EmailsClient<$Result.GetResult<Prisma.$EmailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailsFindUniqueOrThrowArgs} args - Arguments to find a Emails
     * @example
     * // Get one Emails
     * const emails = await prisma.emails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailsFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailsClient<$Result.GetResult<Prisma.$EmailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailsFindFirstArgs} args - Arguments to find a Emails
     * @example
     * // Get one Emails
     * const emails = await prisma.emails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailsFindFirstArgs>(args?: SelectSubset<T, EmailsFindFirstArgs<ExtArgs>>): Prisma__EmailsClient<$Result.GetResult<Prisma.$EmailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailsFindFirstOrThrowArgs} args - Arguments to find a Emails
     * @example
     * // Get one Emails
     * const emails = await prisma.emails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailsFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailsClient<$Result.GetResult<Prisma.$EmailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.emails.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.emails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailsWithIdOnly = await prisma.emails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailsFindManyArgs>(args?: SelectSubset<T, EmailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emails.
     * @param {EmailsCreateArgs} args - Arguments to create a Emails.
     * @example
     * // Create one Emails
     * const Emails = await prisma.emails.create({
     *   data: {
     *     // ... data to create a Emails
     *   }
     * })
     * 
     */
    create<T extends EmailsCreateArgs>(args: SelectSubset<T, EmailsCreateArgs<ExtArgs>>): Prisma__EmailsClient<$Result.GetResult<Prisma.$EmailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emails.
     * @param {EmailsCreateManyArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const emails = await prisma.emails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailsCreateManyArgs>(args?: SelectSubset<T, EmailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emails and returns the data saved in the database.
     * @param {EmailsCreateManyAndReturnArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const emails = await prisma.emails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emails and only return the `id`
     * const emailsWithIdOnly = await prisma.emails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailsCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emails.
     * @param {EmailsDeleteArgs} args - Arguments to delete one Emails.
     * @example
     * // Delete one Emails
     * const Emails = await prisma.emails.delete({
     *   where: {
     *     // ... filter to delete one Emails
     *   }
     * })
     * 
     */
    delete<T extends EmailsDeleteArgs>(args: SelectSubset<T, EmailsDeleteArgs<ExtArgs>>): Prisma__EmailsClient<$Result.GetResult<Prisma.$EmailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emails.
     * @param {EmailsUpdateArgs} args - Arguments to update one Emails.
     * @example
     * // Update one Emails
     * const emails = await prisma.emails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailsUpdateArgs>(args: SelectSubset<T, EmailsUpdateArgs<ExtArgs>>): Prisma__EmailsClient<$Result.GetResult<Prisma.$EmailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emails.
     * @param {EmailsDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.emails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailsDeleteManyArgs>(args?: SelectSubset<T, EmailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const emails = await prisma.emails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailsUpdateManyArgs>(args: SelectSubset<T, EmailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails and returns the data updated in the database.
     * @param {EmailsUpdateManyAndReturnArgs} args - Arguments to update many Emails.
     * @example
     * // Update many Emails
     * const emails = await prisma.emails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emails and only return the `id`
     * const emailsWithIdOnly = await prisma.emails.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailsUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emails.
     * @param {EmailsUpsertArgs} args - Arguments to update or create a Emails.
     * @example
     * // Update or create a Emails
     * const emails = await prisma.emails.upsert({
     *   create: {
     *     // ... data to create a Emails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emails we want to update
     *   }
     * })
     */
    upsert<T extends EmailsUpsertArgs>(args: SelectSubset<T, EmailsUpsertArgs<ExtArgs>>): Prisma__EmailsClient<$Result.GetResult<Prisma.$EmailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailsCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.emails.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends EmailsCountArgs>(
      args?: Subset<T, EmailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailsAggregateArgs>(args: Subset<T, EmailsAggregateArgs>): Prisma.PrismaPromise<GetEmailsAggregateType<T>>

    /**
     * Group by Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailsGroupByArgs} args - Group by arguments.
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
      T extends EmailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailsGroupByArgs['orderBy'] }
        : { orderBy?: EmailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emails model
   */
  readonly fields: EmailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Emails model
   */
  interface EmailsFieldRefs {
    readonly id: FieldRef<"Emails", 'Int'>
    readonly email: FieldRef<"Emails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Emails findUnique
   */
  export type EmailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emails
     */
    select?: EmailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emails
     */
    omit?: EmailsOmit<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where: EmailsWhereUniqueInput
  }

  /**
   * Emails findUniqueOrThrow
   */
  export type EmailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emails
     */
    select?: EmailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emails
     */
    omit?: EmailsOmit<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where: EmailsWhereUniqueInput
  }

  /**
   * Emails findFirst
   */
  export type EmailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emails
     */
    select?: EmailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emails
     */
    omit?: EmailsOmit<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where?: EmailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailsOrderByWithRelationInput | EmailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailsScalarFieldEnum | EmailsScalarFieldEnum[]
  }

  /**
   * Emails findFirstOrThrow
   */
  export type EmailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emails
     */
    select?: EmailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emails
     */
    omit?: EmailsOmit<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where?: EmailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailsOrderByWithRelationInput | EmailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailsScalarFieldEnum | EmailsScalarFieldEnum[]
  }

  /**
   * Emails findMany
   */
  export type EmailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emails
     */
    select?: EmailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emails
     */
    omit?: EmailsOmit<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where?: EmailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailsOrderByWithRelationInput | EmailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emails.
     */
    cursor?: EmailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    distinct?: EmailsScalarFieldEnum | EmailsScalarFieldEnum[]
  }

  /**
   * Emails create
   */
  export type EmailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emails
     */
    select?: EmailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emails
     */
    omit?: EmailsOmit<ExtArgs> | null
    /**
     * The data needed to create a Emails.
     */
    data: XOR<EmailsCreateInput, EmailsUncheckedCreateInput>
  }

  /**
   * Emails createMany
   */
  export type EmailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emails.
     */
    data: EmailsCreateManyInput | EmailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emails createManyAndReturn
   */
  export type EmailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emails
     */
    select?: EmailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emails
     */
    omit?: EmailsOmit<ExtArgs> | null
    /**
     * The data used to create many Emails.
     */
    data: EmailsCreateManyInput | EmailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emails update
   */
  export type EmailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emails
     */
    select?: EmailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emails
     */
    omit?: EmailsOmit<ExtArgs> | null
    /**
     * The data needed to update a Emails.
     */
    data: XOR<EmailsUpdateInput, EmailsUncheckedUpdateInput>
    /**
     * Choose, which Emails to update.
     */
    where: EmailsWhereUniqueInput
  }

  /**
   * Emails updateMany
   */
  export type EmailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailsUpdateManyMutationInput, EmailsUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailsWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
  }

  /**
   * Emails updateManyAndReturn
   */
  export type EmailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emails
     */
    select?: EmailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emails
     */
    omit?: EmailsOmit<ExtArgs> | null
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailsUpdateManyMutationInput, EmailsUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailsWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
  }

  /**
   * Emails upsert
   */
  export type EmailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emails
     */
    select?: EmailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emails
     */
    omit?: EmailsOmit<ExtArgs> | null
    /**
     * The filter to search for the Emails to update in case it exists.
     */
    where: EmailsWhereUniqueInput
    /**
     * In case the Emails found by the `where` argument doesn't exist, create a new Emails with this data.
     */
    create: XOR<EmailsCreateInput, EmailsUncheckedCreateInput>
    /**
     * In case the Emails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailsUpdateInput, EmailsUncheckedUpdateInput>
  }

  /**
   * Emails delete
   */
  export type EmailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emails
     */
    select?: EmailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emails
     */
    omit?: EmailsOmit<ExtArgs> | null
    /**
     * Filter which Emails to delete.
     */
    where: EmailsWhereUniqueInput
  }

  /**
   * Emails deleteMany
   */
  export type EmailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emails to delete
     */
    where?: EmailsWhereInput
    /**
     * Limit how many Emails to delete.
     */
    limit?: number
  }

  /**
   * Emails without action
   */
  export type EmailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emails
     */
    select?: EmailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emails
     */
    omit?: EmailsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BinomeScalarFieldEnum: {
    id: 'id',
    etudaint1Id: 'etudaint1Id',
    etudaint2Id: 'etudaint2Id'
  };

  export type BinomeScalarFieldEnum = (typeof BinomeScalarFieldEnum)[keyof typeof BinomeScalarFieldEnum]


  export const EtudaintScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    matricul: 'matricul',
    sexe: 'sexe',
    dateNaissance: 'dateNaissance'
  };

  export type EtudaintScalarFieldEnum = (typeof EtudaintScalarFieldEnum)[keyof typeof EtudaintScalarFieldEnum]


  export const EmailsScalarFieldEnum: {
    id: 'id',
    email: 'email'
  };

  export type EmailsScalarFieldEnum = (typeof EmailsScalarFieldEnum)[keyof typeof EmailsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'SexeUtilisateur'
   */
  export type EnumSexeUtilisateurFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SexeUtilisateur'>
    


  /**
   * Reference to a field of type 'SexeUtilisateur[]'
   */
  export type ListEnumSexeUtilisateurFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SexeUtilisateur[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BinomeWhereInput = {
    AND?: BinomeWhereInput | BinomeWhereInput[]
    OR?: BinomeWhereInput[]
    NOT?: BinomeWhereInput | BinomeWhereInput[]
    id?: IntFilter<"Binome"> | number
    etudaint1Id?: IntFilter<"Binome"> | number
    etudaint2Id?: IntNullableFilter<"Binome"> | number | null
    Etudaint1?: XOR<EtudaintScalarRelationFilter, EtudaintWhereInput>
    Etudaint2?: XOR<EtudaintNullableScalarRelationFilter, EtudaintWhereInput> | null
  }

  export type BinomeOrderByWithRelationInput = {
    id?: SortOrder
    etudaint1Id?: SortOrder
    etudaint2Id?: SortOrderInput | SortOrder
    Etudaint1?: EtudaintOrderByWithRelationInput
    Etudaint2?: EtudaintOrderByWithRelationInput
  }

  export type BinomeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    etudaint1Id?: number
    etudaint2Id?: number
    AND?: BinomeWhereInput | BinomeWhereInput[]
    OR?: BinomeWhereInput[]
    NOT?: BinomeWhereInput | BinomeWhereInput[]
    Etudaint1?: XOR<EtudaintScalarRelationFilter, EtudaintWhereInput>
    Etudaint2?: XOR<EtudaintNullableScalarRelationFilter, EtudaintWhereInput> | null
  }, "id" | "etudaint1Id" | "etudaint2Id">

  export type BinomeOrderByWithAggregationInput = {
    id?: SortOrder
    etudaint1Id?: SortOrder
    etudaint2Id?: SortOrderInput | SortOrder
    _count?: BinomeCountOrderByAggregateInput
    _avg?: BinomeAvgOrderByAggregateInput
    _max?: BinomeMaxOrderByAggregateInput
    _min?: BinomeMinOrderByAggregateInput
    _sum?: BinomeSumOrderByAggregateInput
  }

  export type BinomeScalarWhereWithAggregatesInput = {
    AND?: BinomeScalarWhereWithAggregatesInput | BinomeScalarWhereWithAggregatesInput[]
    OR?: BinomeScalarWhereWithAggregatesInput[]
    NOT?: BinomeScalarWhereWithAggregatesInput | BinomeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Binome"> | number
    etudaint1Id?: IntWithAggregatesFilter<"Binome"> | number
    etudaint2Id?: IntNullableWithAggregatesFilter<"Binome"> | number | null
  }

  export type EtudaintWhereInput = {
    AND?: EtudaintWhereInput | EtudaintWhereInput[]
    OR?: EtudaintWhereInput[]
    NOT?: EtudaintWhereInput | EtudaintWhereInput[]
    id?: IntFilter<"Etudaint"> | number
    nom?: StringFilter<"Etudaint"> | string
    prenom?: StringFilter<"Etudaint"> | string
    email?: StringFilter<"Etudaint"> | string
    matricul?: StringFilter<"Etudaint"> | string
    sexe?: EnumSexeUtilisateurFilter<"Etudaint"> | $Enums.SexeUtilisateur
    dateNaissance?: DateTimeFilter<"Etudaint"> | Date | string
    Binome1?: XOR<BinomeNullableScalarRelationFilter, BinomeWhereInput> | null
    Binome2?: XOR<BinomeNullableScalarRelationFilter, BinomeWhereInput> | null
  }

  export type EtudaintOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    matricul?: SortOrder
    sexe?: SortOrder
    dateNaissance?: SortOrder
    Binome1?: BinomeOrderByWithRelationInput
    Binome2?: BinomeOrderByWithRelationInput
  }

  export type EtudaintWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    matricul?: string
    AND?: EtudaintWhereInput | EtudaintWhereInput[]
    OR?: EtudaintWhereInput[]
    NOT?: EtudaintWhereInput | EtudaintWhereInput[]
    nom?: StringFilter<"Etudaint"> | string
    prenom?: StringFilter<"Etudaint"> | string
    sexe?: EnumSexeUtilisateurFilter<"Etudaint"> | $Enums.SexeUtilisateur
    dateNaissance?: DateTimeFilter<"Etudaint"> | Date | string
    Binome1?: XOR<BinomeNullableScalarRelationFilter, BinomeWhereInput> | null
    Binome2?: XOR<BinomeNullableScalarRelationFilter, BinomeWhereInput> | null
  }, "id" | "email" | "matricul">

  export type EtudaintOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    matricul?: SortOrder
    sexe?: SortOrder
    dateNaissance?: SortOrder
    _count?: EtudaintCountOrderByAggregateInput
    _avg?: EtudaintAvgOrderByAggregateInput
    _max?: EtudaintMaxOrderByAggregateInput
    _min?: EtudaintMinOrderByAggregateInput
    _sum?: EtudaintSumOrderByAggregateInput
  }

  export type EtudaintScalarWhereWithAggregatesInput = {
    AND?: EtudaintScalarWhereWithAggregatesInput | EtudaintScalarWhereWithAggregatesInput[]
    OR?: EtudaintScalarWhereWithAggregatesInput[]
    NOT?: EtudaintScalarWhereWithAggregatesInput | EtudaintScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Etudaint"> | number
    nom?: StringWithAggregatesFilter<"Etudaint"> | string
    prenom?: StringWithAggregatesFilter<"Etudaint"> | string
    email?: StringWithAggregatesFilter<"Etudaint"> | string
    matricul?: StringWithAggregatesFilter<"Etudaint"> | string
    sexe?: EnumSexeUtilisateurWithAggregatesFilter<"Etudaint"> | $Enums.SexeUtilisateur
    dateNaissance?: DateTimeWithAggregatesFilter<"Etudaint"> | Date | string
  }

  export type EmailsWhereInput = {
    AND?: EmailsWhereInput | EmailsWhereInput[]
    OR?: EmailsWhereInput[]
    NOT?: EmailsWhereInput | EmailsWhereInput[]
    id?: IntFilter<"Emails"> | number
    email?: StringFilter<"Emails"> | string
  }

  export type EmailsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type EmailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: EmailsWhereInput | EmailsWhereInput[]
    OR?: EmailsWhereInput[]
    NOT?: EmailsWhereInput | EmailsWhereInput[]
  }, "id" | "email">

  export type EmailsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    _count?: EmailsCountOrderByAggregateInput
    _avg?: EmailsAvgOrderByAggregateInput
    _max?: EmailsMaxOrderByAggregateInput
    _min?: EmailsMinOrderByAggregateInput
    _sum?: EmailsSumOrderByAggregateInput
  }

  export type EmailsScalarWhereWithAggregatesInput = {
    AND?: EmailsScalarWhereWithAggregatesInput | EmailsScalarWhereWithAggregatesInput[]
    OR?: EmailsScalarWhereWithAggregatesInput[]
    NOT?: EmailsScalarWhereWithAggregatesInput | EmailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Emails"> | number
    email?: StringWithAggregatesFilter<"Emails"> | string
  }

  export type BinomeCreateInput = {
    Etudaint1: EtudaintCreateNestedOneWithoutBinome1Input
    Etudaint2?: EtudaintCreateNestedOneWithoutBinome2Input
  }

  export type BinomeUncheckedCreateInput = {
    id?: number
    etudaint1Id: number
    etudaint2Id?: number | null
  }

  export type BinomeUpdateInput = {
    Etudaint1?: EtudaintUpdateOneRequiredWithoutBinome1NestedInput
    Etudaint2?: EtudaintUpdateOneWithoutBinome2NestedInput
  }

  export type BinomeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    etudaint1Id?: IntFieldUpdateOperationsInput | number
    etudaint2Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BinomeCreateManyInput = {
    id?: number
    etudaint1Id: number
    etudaint2Id?: number | null
  }

  export type BinomeUpdateManyMutationInput = {

  }

  export type BinomeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    etudaint1Id?: IntFieldUpdateOperationsInput | number
    etudaint2Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EtudaintCreateInput = {
    nom: string
    prenom: string
    email: string
    matricul: string
    sexe: $Enums.SexeUtilisateur
    dateNaissance: Date | string
    Binome1?: BinomeCreateNestedOneWithoutEtudaint1Input
    Binome2?: BinomeCreateNestedOneWithoutEtudaint2Input
  }

  export type EtudaintUncheckedCreateInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    matricul: string
    sexe: $Enums.SexeUtilisateur
    dateNaissance: Date | string
    Binome1?: BinomeUncheckedCreateNestedOneWithoutEtudaint1Input
    Binome2?: BinomeUncheckedCreateNestedOneWithoutEtudaint2Input
  }

  export type EtudaintUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricul?: StringFieldUpdateOperationsInput | string
    sexe?: EnumSexeUtilisateurFieldUpdateOperationsInput | $Enums.SexeUtilisateur
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    Binome1?: BinomeUpdateOneWithoutEtudaint1NestedInput
    Binome2?: BinomeUpdateOneWithoutEtudaint2NestedInput
  }

  export type EtudaintUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricul?: StringFieldUpdateOperationsInput | string
    sexe?: EnumSexeUtilisateurFieldUpdateOperationsInput | $Enums.SexeUtilisateur
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    Binome1?: BinomeUncheckedUpdateOneWithoutEtudaint1NestedInput
    Binome2?: BinomeUncheckedUpdateOneWithoutEtudaint2NestedInput
  }

  export type EtudaintCreateManyInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    matricul: string
    sexe: $Enums.SexeUtilisateur
    dateNaissance: Date | string
  }

  export type EtudaintUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricul?: StringFieldUpdateOperationsInput | string
    sexe?: EnumSexeUtilisateurFieldUpdateOperationsInput | $Enums.SexeUtilisateur
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtudaintUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricul?: StringFieldUpdateOperationsInput | string
    sexe?: EnumSexeUtilisateurFieldUpdateOperationsInput | $Enums.SexeUtilisateur
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailsCreateInput = {
    email: string
  }

  export type EmailsUncheckedCreateInput = {
    id?: number
    email: string
  }

  export type EmailsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmailsCreateManyInput = {
    id?: number
    email: string
  }

  export type EmailsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EtudaintScalarRelationFilter = {
    is?: EtudaintWhereInput
    isNot?: EtudaintWhereInput
  }

  export type EtudaintNullableScalarRelationFilter = {
    is?: EtudaintWhereInput | null
    isNot?: EtudaintWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BinomeCountOrderByAggregateInput = {
    id?: SortOrder
    etudaint1Id?: SortOrder
    etudaint2Id?: SortOrder
  }

  export type BinomeAvgOrderByAggregateInput = {
    id?: SortOrder
    etudaint1Id?: SortOrder
    etudaint2Id?: SortOrder
  }

  export type BinomeMaxOrderByAggregateInput = {
    id?: SortOrder
    etudaint1Id?: SortOrder
    etudaint2Id?: SortOrder
  }

  export type BinomeMinOrderByAggregateInput = {
    id?: SortOrder
    etudaint1Id?: SortOrder
    etudaint2Id?: SortOrder
  }

  export type BinomeSumOrderByAggregateInput = {
    id?: SortOrder
    etudaint1Id?: SortOrder
    etudaint2Id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumSexeUtilisateurFilter<$PrismaModel = never> = {
    equals?: $Enums.SexeUtilisateur | EnumSexeUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.SexeUtilisateur[] | ListEnumSexeUtilisateurFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexeUtilisateur[] | ListEnumSexeUtilisateurFieldRefInput<$PrismaModel>
    not?: NestedEnumSexeUtilisateurFilter<$PrismaModel> | $Enums.SexeUtilisateur
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BinomeNullableScalarRelationFilter = {
    is?: BinomeWhereInput | null
    isNot?: BinomeWhereInput | null
  }

  export type EtudaintCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    matricul?: SortOrder
    sexe?: SortOrder
    dateNaissance?: SortOrder
  }

  export type EtudaintAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EtudaintMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    matricul?: SortOrder
    sexe?: SortOrder
    dateNaissance?: SortOrder
  }

  export type EtudaintMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    matricul?: SortOrder
    sexe?: SortOrder
    dateNaissance?: SortOrder
  }

  export type EtudaintSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumSexeUtilisateurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexeUtilisateur | EnumSexeUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.SexeUtilisateur[] | ListEnumSexeUtilisateurFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexeUtilisateur[] | ListEnumSexeUtilisateurFieldRefInput<$PrismaModel>
    not?: NestedEnumSexeUtilisateurWithAggregatesFilter<$PrismaModel> | $Enums.SexeUtilisateur
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexeUtilisateurFilter<$PrismaModel>
    _max?: NestedEnumSexeUtilisateurFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmailsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type EmailsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmailsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type EmailsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type EmailsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EtudaintCreateNestedOneWithoutBinome1Input = {
    create?: XOR<EtudaintCreateWithoutBinome1Input, EtudaintUncheckedCreateWithoutBinome1Input>
    connectOrCreate?: EtudaintCreateOrConnectWithoutBinome1Input
    connect?: EtudaintWhereUniqueInput
  }

  export type EtudaintCreateNestedOneWithoutBinome2Input = {
    create?: XOR<EtudaintCreateWithoutBinome2Input, EtudaintUncheckedCreateWithoutBinome2Input>
    connectOrCreate?: EtudaintCreateOrConnectWithoutBinome2Input
    connect?: EtudaintWhereUniqueInput
  }

  export type EtudaintUpdateOneRequiredWithoutBinome1NestedInput = {
    create?: XOR<EtudaintCreateWithoutBinome1Input, EtudaintUncheckedCreateWithoutBinome1Input>
    connectOrCreate?: EtudaintCreateOrConnectWithoutBinome1Input
    upsert?: EtudaintUpsertWithoutBinome1Input
    connect?: EtudaintWhereUniqueInput
    update?: XOR<XOR<EtudaintUpdateToOneWithWhereWithoutBinome1Input, EtudaintUpdateWithoutBinome1Input>, EtudaintUncheckedUpdateWithoutBinome1Input>
  }

  export type EtudaintUpdateOneWithoutBinome2NestedInput = {
    create?: XOR<EtudaintCreateWithoutBinome2Input, EtudaintUncheckedCreateWithoutBinome2Input>
    connectOrCreate?: EtudaintCreateOrConnectWithoutBinome2Input
    upsert?: EtudaintUpsertWithoutBinome2Input
    disconnect?: EtudaintWhereInput | boolean
    delete?: EtudaintWhereInput | boolean
    connect?: EtudaintWhereUniqueInput
    update?: XOR<XOR<EtudaintUpdateToOneWithWhereWithoutBinome2Input, EtudaintUpdateWithoutBinome2Input>, EtudaintUncheckedUpdateWithoutBinome2Input>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BinomeCreateNestedOneWithoutEtudaint1Input = {
    create?: XOR<BinomeCreateWithoutEtudaint1Input, BinomeUncheckedCreateWithoutEtudaint1Input>
    connectOrCreate?: BinomeCreateOrConnectWithoutEtudaint1Input
    connect?: BinomeWhereUniqueInput
  }

  export type BinomeCreateNestedOneWithoutEtudaint2Input = {
    create?: XOR<BinomeCreateWithoutEtudaint2Input, BinomeUncheckedCreateWithoutEtudaint2Input>
    connectOrCreate?: BinomeCreateOrConnectWithoutEtudaint2Input
    connect?: BinomeWhereUniqueInput
  }

  export type BinomeUncheckedCreateNestedOneWithoutEtudaint1Input = {
    create?: XOR<BinomeCreateWithoutEtudaint1Input, BinomeUncheckedCreateWithoutEtudaint1Input>
    connectOrCreate?: BinomeCreateOrConnectWithoutEtudaint1Input
    connect?: BinomeWhereUniqueInput
  }

  export type BinomeUncheckedCreateNestedOneWithoutEtudaint2Input = {
    create?: XOR<BinomeCreateWithoutEtudaint2Input, BinomeUncheckedCreateWithoutEtudaint2Input>
    connectOrCreate?: BinomeCreateOrConnectWithoutEtudaint2Input
    connect?: BinomeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumSexeUtilisateurFieldUpdateOperationsInput = {
    set?: $Enums.SexeUtilisateur
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BinomeUpdateOneWithoutEtudaint1NestedInput = {
    create?: XOR<BinomeCreateWithoutEtudaint1Input, BinomeUncheckedCreateWithoutEtudaint1Input>
    connectOrCreate?: BinomeCreateOrConnectWithoutEtudaint1Input
    upsert?: BinomeUpsertWithoutEtudaint1Input
    disconnect?: BinomeWhereInput | boolean
    delete?: BinomeWhereInput | boolean
    connect?: BinomeWhereUniqueInput
    update?: XOR<XOR<BinomeUpdateToOneWithWhereWithoutEtudaint1Input, BinomeUpdateWithoutEtudaint1Input>, BinomeUncheckedUpdateWithoutEtudaint1Input>
  }

  export type BinomeUpdateOneWithoutEtudaint2NestedInput = {
    create?: XOR<BinomeCreateWithoutEtudaint2Input, BinomeUncheckedCreateWithoutEtudaint2Input>
    connectOrCreate?: BinomeCreateOrConnectWithoutEtudaint2Input
    upsert?: BinomeUpsertWithoutEtudaint2Input
    disconnect?: BinomeWhereInput | boolean
    delete?: BinomeWhereInput | boolean
    connect?: BinomeWhereUniqueInput
    update?: XOR<XOR<BinomeUpdateToOneWithWhereWithoutEtudaint2Input, BinomeUpdateWithoutEtudaint2Input>, BinomeUncheckedUpdateWithoutEtudaint2Input>
  }

  export type BinomeUncheckedUpdateOneWithoutEtudaint1NestedInput = {
    create?: XOR<BinomeCreateWithoutEtudaint1Input, BinomeUncheckedCreateWithoutEtudaint1Input>
    connectOrCreate?: BinomeCreateOrConnectWithoutEtudaint1Input
    upsert?: BinomeUpsertWithoutEtudaint1Input
    disconnect?: BinomeWhereInput | boolean
    delete?: BinomeWhereInput | boolean
    connect?: BinomeWhereUniqueInput
    update?: XOR<XOR<BinomeUpdateToOneWithWhereWithoutEtudaint1Input, BinomeUpdateWithoutEtudaint1Input>, BinomeUncheckedUpdateWithoutEtudaint1Input>
  }

  export type BinomeUncheckedUpdateOneWithoutEtudaint2NestedInput = {
    create?: XOR<BinomeCreateWithoutEtudaint2Input, BinomeUncheckedCreateWithoutEtudaint2Input>
    connectOrCreate?: BinomeCreateOrConnectWithoutEtudaint2Input
    upsert?: BinomeUpsertWithoutEtudaint2Input
    disconnect?: BinomeWhereInput | boolean
    delete?: BinomeWhereInput | boolean
    connect?: BinomeWhereUniqueInput
    update?: XOR<XOR<BinomeUpdateToOneWithWhereWithoutEtudaint2Input, BinomeUpdateWithoutEtudaint2Input>, BinomeUncheckedUpdateWithoutEtudaint2Input>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumSexeUtilisateurFilter<$PrismaModel = never> = {
    equals?: $Enums.SexeUtilisateur | EnumSexeUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.SexeUtilisateur[] | ListEnumSexeUtilisateurFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexeUtilisateur[] | ListEnumSexeUtilisateurFieldRefInput<$PrismaModel>
    not?: NestedEnumSexeUtilisateurFilter<$PrismaModel> | $Enums.SexeUtilisateur
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumSexeUtilisateurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexeUtilisateur | EnumSexeUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.SexeUtilisateur[] | ListEnumSexeUtilisateurFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexeUtilisateur[] | ListEnumSexeUtilisateurFieldRefInput<$PrismaModel>
    not?: NestedEnumSexeUtilisateurWithAggregatesFilter<$PrismaModel> | $Enums.SexeUtilisateur
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexeUtilisateurFilter<$PrismaModel>
    _max?: NestedEnumSexeUtilisateurFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EtudaintCreateWithoutBinome1Input = {
    nom: string
    prenom: string
    email: string
    matricul: string
    sexe: $Enums.SexeUtilisateur
    dateNaissance: Date | string
    Binome2?: BinomeCreateNestedOneWithoutEtudaint2Input
  }

  export type EtudaintUncheckedCreateWithoutBinome1Input = {
    id?: number
    nom: string
    prenom: string
    email: string
    matricul: string
    sexe: $Enums.SexeUtilisateur
    dateNaissance: Date | string
    Binome2?: BinomeUncheckedCreateNestedOneWithoutEtudaint2Input
  }

  export type EtudaintCreateOrConnectWithoutBinome1Input = {
    where: EtudaintWhereUniqueInput
    create: XOR<EtudaintCreateWithoutBinome1Input, EtudaintUncheckedCreateWithoutBinome1Input>
  }

  export type EtudaintCreateWithoutBinome2Input = {
    nom: string
    prenom: string
    email: string
    matricul: string
    sexe: $Enums.SexeUtilisateur
    dateNaissance: Date | string
    Binome1?: BinomeCreateNestedOneWithoutEtudaint1Input
  }

  export type EtudaintUncheckedCreateWithoutBinome2Input = {
    id?: number
    nom: string
    prenom: string
    email: string
    matricul: string
    sexe: $Enums.SexeUtilisateur
    dateNaissance: Date | string
    Binome1?: BinomeUncheckedCreateNestedOneWithoutEtudaint1Input
  }

  export type EtudaintCreateOrConnectWithoutBinome2Input = {
    where: EtudaintWhereUniqueInput
    create: XOR<EtudaintCreateWithoutBinome2Input, EtudaintUncheckedCreateWithoutBinome2Input>
  }

  export type EtudaintUpsertWithoutBinome1Input = {
    update: XOR<EtudaintUpdateWithoutBinome1Input, EtudaintUncheckedUpdateWithoutBinome1Input>
    create: XOR<EtudaintCreateWithoutBinome1Input, EtudaintUncheckedCreateWithoutBinome1Input>
    where?: EtudaintWhereInput
  }

  export type EtudaintUpdateToOneWithWhereWithoutBinome1Input = {
    where?: EtudaintWhereInput
    data: XOR<EtudaintUpdateWithoutBinome1Input, EtudaintUncheckedUpdateWithoutBinome1Input>
  }

  export type EtudaintUpdateWithoutBinome1Input = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricul?: StringFieldUpdateOperationsInput | string
    sexe?: EnumSexeUtilisateurFieldUpdateOperationsInput | $Enums.SexeUtilisateur
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    Binome2?: BinomeUpdateOneWithoutEtudaint2NestedInput
  }

  export type EtudaintUncheckedUpdateWithoutBinome1Input = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricul?: StringFieldUpdateOperationsInput | string
    sexe?: EnumSexeUtilisateurFieldUpdateOperationsInput | $Enums.SexeUtilisateur
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    Binome2?: BinomeUncheckedUpdateOneWithoutEtudaint2NestedInput
  }

  export type EtudaintUpsertWithoutBinome2Input = {
    update: XOR<EtudaintUpdateWithoutBinome2Input, EtudaintUncheckedUpdateWithoutBinome2Input>
    create: XOR<EtudaintCreateWithoutBinome2Input, EtudaintUncheckedCreateWithoutBinome2Input>
    where?: EtudaintWhereInput
  }

  export type EtudaintUpdateToOneWithWhereWithoutBinome2Input = {
    where?: EtudaintWhereInput
    data: XOR<EtudaintUpdateWithoutBinome2Input, EtudaintUncheckedUpdateWithoutBinome2Input>
  }

  export type EtudaintUpdateWithoutBinome2Input = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricul?: StringFieldUpdateOperationsInput | string
    sexe?: EnumSexeUtilisateurFieldUpdateOperationsInput | $Enums.SexeUtilisateur
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    Binome1?: BinomeUpdateOneWithoutEtudaint1NestedInput
  }

  export type EtudaintUncheckedUpdateWithoutBinome2Input = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricul?: StringFieldUpdateOperationsInput | string
    sexe?: EnumSexeUtilisateurFieldUpdateOperationsInput | $Enums.SexeUtilisateur
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    Binome1?: BinomeUncheckedUpdateOneWithoutEtudaint1NestedInput
  }

  export type BinomeCreateWithoutEtudaint1Input = {
    Etudaint2?: EtudaintCreateNestedOneWithoutBinome2Input
  }

  export type BinomeUncheckedCreateWithoutEtudaint1Input = {
    id?: number
    etudaint2Id?: number | null
  }

  export type BinomeCreateOrConnectWithoutEtudaint1Input = {
    where: BinomeWhereUniqueInput
    create: XOR<BinomeCreateWithoutEtudaint1Input, BinomeUncheckedCreateWithoutEtudaint1Input>
  }

  export type BinomeCreateWithoutEtudaint2Input = {
    Etudaint1: EtudaintCreateNestedOneWithoutBinome1Input
  }

  export type BinomeUncheckedCreateWithoutEtudaint2Input = {
    id?: number
    etudaint1Id: number
  }

  export type BinomeCreateOrConnectWithoutEtudaint2Input = {
    where: BinomeWhereUniqueInput
    create: XOR<BinomeCreateWithoutEtudaint2Input, BinomeUncheckedCreateWithoutEtudaint2Input>
  }

  export type BinomeUpsertWithoutEtudaint1Input = {
    update: XOR<BinomeUpdateWithoutEtudaint1Input, BinomeUncheckedUpdateWithoutEtudaint1Input>
    create: XOR<BinomeCreateWithoutEtudaint1Input, BinomeUncheckedCreateWithoutEtudaint1Input>
    where?: BinomeWhereInput
  }

  export type BinomeUpdateToOneWithWhereWithoutEtudaint1Input = {
    where?: BinomeWhereInput
    data: XOR<BinomeUpdateWithoutEtudaint1Input, BinomeUncheckedUpdateWithoutEtudaint1Input>
  }

  export type BinomeUpdateWithoutEtudaint1Input = {
    Etudaint2?: EtudaintUpdateOneWithoutBinome2NestedInput
  }

  export type BinomeUncheckedUpdateWithoutEtudaint1Input = {
    id?: IntFieldUpdateOperationsInput | number
    etudaint2Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BinomeUpsertWithoutEtudaint2Input = {
    update: XOR<BinomeUpdateWithoutEtudaint2Input, BinomeUncheckedUpdateWithoutEtudaint2Input>
    create: XOR<BinomeCreateWithoutEtudaint2Input, BinomeUncheckedCreateWithoutEtudaint2Input>
    where?: BinomeWhereInput
  }

  export type BinomeUpdateToOneWithWhereWithoutEtudaint2Input = {
    where?: BinomeWhereInput
    data: XOR<BinomeUpdateWithoutEtudaint2Input, BinomeUncheckedUpdateWithoutEtudaint2Input>
  }

  export type BinomeUpdateWithoutEtudaint2Input = {
    Etudaint1?: EtudaintUpdateOneRequiredWithoutBinome1NestedInput
  }

  export type BinomeUncheckedUpdateWithoutEtudaint2Input = {
    id?: IntFieldUpdateOperationsInput | number
    etudaint1Id?: IntFieldUpdateOperationsInput | number
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
  export const dmmf: runtime.BaseDMMF
}