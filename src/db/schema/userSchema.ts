import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

const Users = pgTable("users", {
  id: uuid("id").primaryKey(),
  username: text("username"),
  email: varchar("email"),
  password: varchar("password"),
  role: varchar("role"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export default Users;
