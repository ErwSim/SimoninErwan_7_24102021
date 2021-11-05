
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.4.1
 * Query Engine version: 57771c0558568c7d08bd34c7248af5244ae16bd9
 */
Prisma.prismaVersion = {
  client: "3.4.1",
  engine: "57771c0558568c7d08bd34c7248af5244ae16bd9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  imageUrl: 'imageUrl',
  description: 'description',
  backgroundFallback: 'backgroundFallback'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  createdAt: 'createdAt',
  content: 'content',
  spoiler: 'spoiler',
  userId: 'userId',
  categoryId: 'categoryId',
  messageId: 'messageId'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  password: 'password',
  resetToken: 'resetToken',
  firstname: 'firstname',
  lastname: 'lastname',
  admin: 'admin',
  createdAt: 'createdAt'
});

exports.Prisma.UserPostVoteScalarFieldEnum = makeEnum({
  postId: 'postId',
  userId: 'userId',
  type: 'type',
  createdAt: 'createdAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});
exports.VoteTypes = makeEnum({
  UPVOTE: 'UPVOTE',
  DOWNVOTE: 'DOWNVOTE'
});

exports.Prisma.ModelName = makeEnum({
  Category: 'Category',
  Post: 'Post',
  User: 'User',
  UserPostVote: 'UserPostVote'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
