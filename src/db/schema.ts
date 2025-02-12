import { boolean, pgTable, serial, varchar, json} from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  imageUrl: varchar("image_url"),
  subscription: boolean("subscription").notNull().default(false),
});

export const VideoData = pgTable("video_data", {
  id: serial("id").primaryKey(),
  script: json("script").notNull(),
  audioFileUrl: varchar("audio_file_url").notNull(),
  caption: json("caption").notNull(),
  imageList: json("image_list").notNull(), // Changed to JSON to store an array
  createdBy: varchar("created_by").notNull(),
});
