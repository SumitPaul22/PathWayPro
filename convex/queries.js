// convex/queries.js
import { query } from "./_generated/server";
import { v } from "convex/values";

export const getQuestions = query({
  args: {},
  handler: async ({ db }) => {
    const questions = await db.query("questions").collect();
    const answers = await db.query("answers").collect();

    const answersByQuestion = answers.reduce((acc, answer) => {
      acc[answer.question_id] = acc[answer.question_id] || [];
      acc[answer.question_id].push({ id: answer._id, answer_text: answer.answer_text });
      return acc;
    }, {});

    return questions.map((question) => ({
      id: question._id,
      question_text: question.question_text,
      answers: answersByQuestion[question._id] || [],
    }));
  },
});

export const getCareerSuggestion = query({
  args: { answerIds: v.array(v.id("answers")) },
  handler: async ({ db }, { answerIds }) => {
    // Fetch all weights and filter by answerIds
    const weights = await db
      .query("answer_career_weights")
      .collect()
      .then((allWeights) => allWeights.filter((weight) => answerIds.includes(weight.answer_id)));

    // Aggregate weights by career
    const careerScores = {};
    weights.forEach(({ career_id, weight }) => {
      careerScores[career_id] = (careerScores[career_id] || 0) + weight;
    });

    // Find the career with the highest score
    const topCareerId = Object.entries(careerScores).reduce(
      (max, [id, score]) => (score > max.score ? { id, score } : max),
      { id: null, score: -1 }
    ).id;

    if (!topCareerId) return null;

    const career = await db.get(topCareerId);
    return {
      id: career._id,
      career_name: career.career_name,
      description: career.description,
    };
  },
});