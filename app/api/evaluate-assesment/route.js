import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req) {
  const { questions, userAnswers } = await req.json();
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  // Calculate score
  let score = 0;
  questions.forEach((q, index) => {
    if (userAnswers[index] === q.correctAnswer) score++;
  });

  // Determine level
  const level = score <= 3 ? 'Beginner' : score <= 7 ? 'Intermediate' : 'Advanced';

  // Generate recommendations
  const prompt = `
    Based on a ${level} level in ${questions[0].interests}, provide 3 recommendations for next steps.
    Format the response as a single string.
  `;

  try {
    const result = await model.generateContent(prompt);
    const recommendations = result.response.text();
    return new Response(JSON.stringify({ score, level, recommendations }), { status: 200 });
  } catch (error) {
    console.error('Error evaluating assessment:', error);
    return new Response(JSON.stringify({ error: 'Failed to evaluate assessment' }), { status: 500 });
  }
}