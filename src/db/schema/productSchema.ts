import {
  boolean,
  numeric,
  pgTable,
  text,
  time,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import Users from "./userSchema";

const Products = pgTable("products", {
  id: uuid("id").primaryKey(),
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

export default Products;
