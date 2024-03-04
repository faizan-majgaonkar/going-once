import {
  boolean,
  numeric,
  pgTable,
  text,
  time,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: uuid("id").primaryKey(),
  username: text("username"),
  email: varchar("email"),
  password: varchar("password"),
  role: varchar("role"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const Bids = pgTable("bids", {
  user_id: uuid("user_id").references(() => Users.id),
  product_id: uuid("product_id").references(() => Products.id),
  amount: numeric("amount"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

export const Products = pgTable("products", {
  id: uuid("id"),
  user_id: uuid("user_id").references(() => Users.id),
  title: text("title"),
  desc: text("desc"),
  base_price: numeric("base_price"),
  sold_for: numeric("sold_for"),
  is_listed: boolean("is_listed"),
  bid_duration: time("bid_duration"),
  bid_deadline: timestamp("bid_deadline"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});
