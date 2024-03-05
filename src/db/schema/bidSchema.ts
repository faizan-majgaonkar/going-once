import { numeric, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import Users from "./userSchema";
import Products from "./productSchema";

export const Bids = pgTable("bids", {
  user_id: uuid("user_id").references(() => Users.id),
  product_id: uuid("product_id").references(() => Products.id),
  amount: numeric("amount"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

export default Bids;
