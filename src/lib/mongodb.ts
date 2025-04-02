import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

// Ensure mongoose is declared in global scope without redeclaration
declare global {
  var mongooseConn: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

// Use existing global mongoose connection object if available
global.mongooseConn = global.mongooseConn || { conn: null, promise: null };

const connectToDatabase = async () => {
  if (global.mongooseConn.conn) return global.mongooseConn.conn;

  if (!global.mongooseConn.promise) {
    global.mongooseConn.promise = mongoose.connect(MONGODB_URI as string, {
      dbName: 'hello-ieee-2',
      bufferCommands: false,
    }).then((mongooseInstance) => mongooseInstance.connection);
  }

  global.mongooseConn.conn = await global.mongooseConn.promise;
  return global.mongooseConn.conn;
};

export default connectToDatabase;
  