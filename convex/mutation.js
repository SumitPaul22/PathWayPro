// convex/mutations.js
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const saveQuizResult = mutation({
  args: {
    userId: v.string(),
    answers: v.array(v.id("answers")),
    suggestedCareerId: v.id("career_paths"),
  },
  handler: async ({ db }, { userId, answers, suggestedCareerId }) => {
    await db.insert("quiz_results", {
      user_id: userId,
      answers,
      suggested_career_id: suggestedCareerId,
      timestamp: new Date().toISOString(),
    });
  },
});