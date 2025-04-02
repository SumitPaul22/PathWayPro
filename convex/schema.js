import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users:defineTable({
        name:v.string(),
        email:v.string(),
        interests: v.optional(v.array(v.string())), // Array of strings for multiple interests
        skills: v.optional(v.array(v.string())),   // Array of strings for multiple skills
        goals: v.optional(v.string()),             // Single string for goals
    })
})