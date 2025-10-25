import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const dbName = "nuxt_auth";

let client: MongoClient | null = null;
let db: any = null;

export async function getDB() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    console.log("✅ MongoDB connected");
  }
  return db;
}
