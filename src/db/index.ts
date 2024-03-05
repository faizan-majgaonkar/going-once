import { drizzle } from "drizzle-orm/postgres-js";
import * as dotenv from "dotenv";
dotenv.config();
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

const client = postgres(connectionString!, { prepare: false });
const dbConn = drizzle(client);

export default dbConn;
