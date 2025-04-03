import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
      }).index("by_email", ["email"]),
    questions: defineTable({
        question_text: v.string(), // The text of the question (e.g., "What do you enjoy most?")
      }),
    
      answers: defineTable({
        question_id: v.id("questions"), // Links to the question
        answer_text: v.string(), // The answer option (e.g., "Solving problems")
      }),
    
      career_paths: defineTable({
        career_name: v.string(), // Name of the career (e.g., "Software Developer")
        description: v.string(), // Brief description of the career
      }),
    
      answer_career_weights: defineTable({
        answer_id: v.id("answers"), // Links to the answer
        career_id: v.id("career_paths"), // Links to the career
        weight: v.number(), // How much this answer contributes to the career (e.g., 1-5)
      }),
    
      quiz_results: defineTable({
        user_id: v.string(), // Links to the user (from StackAuth)
        answers: v.array(v.id("answers")), // Array of selected answer IDs
        suggested_career_id: v.id("career_paths"), // The suggested career
        timestamp: v.string(), // When the quiz was completed
      }).index("by_user", ["user_id"]), // Index for quick lookup by user
})