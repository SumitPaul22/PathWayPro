// convex/users.js
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
  },
  handler: async ({ db }, { name, email }) => {
    const existingUser = await db
      .query("users")
      .filter((q) => q.eq(q.field("email"), email))
      .first();

    if (existingUser) {
      return existingUser;
    }

    const userId = await db.insert("users", { name, email });
    return { id: userId, name, email };
  },
});