import dbConn from ".";
import { migrate } from "drizzle-orm/postgres-js/migrator";

export const migrateDB = async () => {
  console.log("Migrating DB.");
  console.time("Migration complete.");
  await migrate(dbConn, { migrationsFolder: "drizzle" });
  console.timeEnd("Migration complete.");
};

migrateDB();
