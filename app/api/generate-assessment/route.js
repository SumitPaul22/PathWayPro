import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req) {
  const { interests, skills } = await req.json();
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `
    Generate 10 multiple-choice questions to assess a user's proficiency in ${interests.join(', ')}, 
    given that they have skills in ${skills.join(', ')}. Each question should have four options and 
    indicate the correct answer. Format the response as a JSON array of objects(without any formatting or Markdown. Do not include triple backticks), each containing 
    "question", "options", and "correctAnswer".
  `;

  try {
    const result = await model.generateContent(prompt);
    const questions = JSON.parse(result.response.text());
    return new Response(JSON.stringify({ questions }), { status: 200 });
  } catch (error) {
    console.error('Error generating questions:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate questions' }), { status: 500 });
  }
}
