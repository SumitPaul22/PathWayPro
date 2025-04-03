// convex/seed.js
import { mutation } from "./_generated/server";

export const seedQuizData = mutation({
  args: {},
  handler: async ({ db }) => {
    // **Step 1: Define and Insert Questions**
    const questionsData = [
      { text: "What subjects did you enjoy most in school?" },
      { text: "What do you like to do in your free time?" },
      { text: "Which of these activities sounds most appealing?" },
      { text: "What type of books or articles do you enjoy reading?" },
      { text: "If you could learn a new skill, what would it be?" },
      { text: "What do you consider your strongest skill?" },
      { text: "How do you approach a complex problem?" },
      { text: "What type of tasks do you excel at?" },
      { text: "How do you handle stress or pressure?" },
      { text: "What feedback do you often receive from others?" },
      { text: "What kind of work environment do you prefer?" },
      { text: "Do you prefer working indoors or outdoors?" },
      { text: "How important is work-life balance to you?" },
      { text: "Would you rather work for a large corporation or a small startup?" },
      { text: "Do you enjoy traveling for work?" },
      { text: "What’s most important to you in a career?" },
      { text: "How do you feel about job security?" },
      { text: "Would you prefer a job that allows you to help others directly?" },
      { text: "How important is recognition for your work?" },
      { text: "Do you value autonomy in your work?" },
      { text: "Are you more introverted or extroverted?" },
      { text: "Do you prefer working on detailed tasks or big-picture strategies?" },
      { text: "How do you handle conflict?" },
      { text: "Are you more of a planner or spontaneous?" },
      { text: "Do you enjoy taking risks?" },
      { text: "What motivates you the most?" },
      { text: "How do you prefer to learn new things?" },
      { text: "What role do you usually take in a team?" },
      { text: "How important is creativity in your work?" },
      { text: "Do you enjoy public speaking?" },
    ];

    const questionIds = await Promise.all(
      questionsData.map((q) => db.insert("questions", { question_text: q.text }))
    );

    // **Step 2: Define and Insert Answers**
    const answersData = [
      // Q1
      { questionIndex: 0, text: "Math" },
      { questionIndex: 0, text: "Science" },
      { questionIndex: 0, text: "Arts" },
      { questionIndex: 0, text: "Humanities" },
      { questionIndex: 0, text: "Physical Education" },
      // Q2
      { questionIndex: 1, text: "Reading" },
      { questionIndex: 1, text: "Building things" },
      { questionIndex: 1, text: "Helping others" },
      { questionIndex: 1, text: "Creating art" },
      { questionIndex: 1, text: "Analyzing data" },
      // Q3
      { questionIndex: 2, text: "Solving puzzles" },
      { questionIndex: 2, text: "Teaching someone" },
      { questionIndex: 2, text: "Designing a poster" },
      { questionIndex: 2, text: "Writing a story" },
      { questionIndex: 2, text: "Conducting experiments" },
      // Q4
      { questionIndex: 3, text: "Fiction" },
      { questionIndex: 3, text: "Non-fiction" },
      { questionIndex: 3, text: "Technical manuals" },
      { questionIndex: 3, text: "Biographies" },
      { questionIndex: 3, text: "News" },
      // Q5
      { questionIndex: 4, text: "Programming" },
      { questionIndex: 4, text: "Public speaking" },
      { questionIndex: 4, text: "Painting" },
      { questionIndex: 4, text: "Carpentry" },
      { questionIndex: 4, text: "Cooking" },
      // Q6
      { questionIndex: 5, text: "Problem-solving" },
      { questionIndex: 5, text: "Communication" },
      { questionIndex: 5, text: "Creativity" },
      { questionIndex: 5, text: "Organization" },
      { questionIndex: 5, text: "Analytical thinking" },
      // Q7
      { questionIndex: 6, text: "Break it down into smaller parts" },
      { questionIndex: 6, text: "Seek help from others" },
      { questionIndex: 6, text: "Look for patterns" },
      { questionIndex: 6, text: "Try different solutions" },
      { questionIndex: 6, text: "Research extensively" },
      // Q8
      { questionIndex: 7, text: "Working with numbers" },
      { questionIndex: 7, text: "Writing" },
      { questionIndex: 7, text: "Designing" },
      { questionIndex: 7, text: "Managing projects" },
      { questionIndex: 7, text: "Teaching" },
      // Q9
      { questionIndex: 8, text: "Stay calm and focused" },
      { questionIndex: 8, text: "Seek support" },
      { questionIndex: 8, text: "Take breaks" },
      { questionIndex: 8, text: "Work harder" },
      { questionIndex: 8, text: "Avoid the situation" },
      // Q10
      { questionIndex: 9, text: "You’re a good listener" },
      { questionIndex: 9, text: "You’re very creative" },
      { questionIndex: 9, text: "You’re detail-oriented" },
      { questionIndex: 9, text: "You’re a natural leader" },
      { questionIndex: 9, text: "You’re very analytical" },
      // Q11
      { questionIndex: 10, text: "Fast-paced" },
      { questionIndex: 10, text: "Collaborative" },
      { questionIndex: 10, text: "Independent" },
      { questionIndex: 10, text: "Structured" },
      { questionIndex: 10, text: "Creative" },
      // Q12
      { questionIndex: 11, text: "Indoors" },
      { questionIndex: 11, text: "Outdoors" },
      { questionIndex: 11, text: "A mix of both" },
      // Q13
      { questionIndex: 12, text: "Very important" },
      { questionIndex: 12, text: "Somewhat important" },
      { questionIndex: 12, text: "Not important" },
      // Q14
      { questionIndex: 13, text: "Large corporation" },
      { questionIndex: 13, text: "Small startup" },
      { questionIndex: 13, text: "No preference" },
      // Q15
      { questionIndex: 14, text: "Yes" },
      { questionIndex: 14, text: "No" },
      { questionIndex: 14, text: "Sometimes" },
      // Q16
      { questionIndex: 15, text: "Making a difference" },
      { questionIndex: 15, text: "High earnings" },
      { questionIndex: 15, text: "Creativity" },
      { questionIndex: 15, text: "Stability" },
      { questionIndex: 15, text: "Innovation" },
      // Q17
      { questionIndex: 16, text: "Very important" },
      { questionIndex: 16, text: "Somewhat important" },
      { questionIndex: 16, text: "Not important" },
      // Q18
      { questionIndex: 17, text: "Yes" },
      { questionIndex: 17, text: "No" },
      { questionIndex: 17, text: "Not sure" },
      // Q19
      { questionIndex: 18, text: "Very important" },
      { questionIndex: 18, text: "Somewhat important" },
      { questionIndex: 18, text: "Not important" },
      // Q20
      { questionIndex: 19, text: "Yes, very much" },
      { questionIndex: 19, text: "Somewhat" },
      { questionIndex: 19, text: "Not really" },
      // Q21
      { questionIndex: 20, text: "Introverted" },
      { questionIndex: 20, text: "Extroverted" },
      { questionIndex: 20, text: "A mix of both" },
      // Q22
      { questionIndex: 21, text: "Detailed tasks" },
      { questionIndex: 21, text: "Big-picture strategies" },
      { questionIndex: 21, text: "Both" },
      // Q23
      { questionIndex: 22, text: "Address it directly" },
      { questionIndex: 22, text: "Avoid it" },
      { questionIndex: 22, text: "Seek mediation" },
      { questionIndex: 22, text: "Ignore it" },
      { questionIndex: 22, text: "Reflect on it" },
      // Q24
      { questionIndex: 23, text: "Planner" },
      { questionIndex: 23, text: "Spontaneous" },
      { questionIndex: 23, text: "A mix of both" },
      // Q25
      { questionIndex: 24, text: "Yes" },
      { questionIndex: 24, text: "No" },
      { questionIndex: 24, text: "Sometimes" },
      // Q26
      { questionIndex: 25, text: "Achieving goals" },
      { questionIndex: 25, text: "Learning new things" },
      { questionIndex: 25, text: "Helping others" },
      { questionIndex: 25, text: "Financial rewards" },
      { questionIndex: 25, text: "Recognition" },
      // Q27
      { questionIndex: 26, text: "Reading" },
      { questionIndex: 26, text: "Hands-on practice" },
      { questionIndex: 26, text: "Watching videos" },
      { questionIndex: 26, text: "Listening to lectures" },
      { questionIndex: 26, text: "Discussing with others" },
      // Q28
      { questionIndex: 27, text: "Leader" },
      { questionIndex: 27, text: "Supporter" },
      { questionIndex: 27, text: "Idea generator" },
      { questionIndex: 27, text: "Organizer" },
      { questionIndex: 27, text: "Mediator" },
      // Q29
      { questionIndex: 28, text: "Very important" },
      { questionIndex: 28, text: "Somewhat important" },
      { questionIndex: 28, text: "Not important" },
      // Q30
      { questionIndex: 29, text: "Yes" },
      { questionIndex: 29, text: "No" },
      { questionIndex: 29, text: "Sometimes" },
    ];

    const answerIds = await Promise.all(
      answersData.map((a) =>
        db.insert("answers", { question_id: questionIds[a.questionIndex], answer_text: a.text })
      )
    );

    // Create answer lookup for easier weight assignment
    const answerLookup = {};
    answersData.forEach((a, index) => {
      const questionText = questionsData[a.questionIndex].text;
      answerLookup[`${questionText}:${a.text}`] = answerIds[index];
    });

    // **Step 3: Define and Insert Careers**
    const careersData = [
      { name: "Software Developer", description: "Builds software solutions using code." },
      { name: "Data Scientist", description: "Analyzes data to extract insights and build predictive models." },
      { name: "Teacher", description: "Educates and inspires students in various subjects." },
      { name: "Social Worker", description: "Helps individuals and families overcome challenges." },
      { name: "Graphic Designer", description: "Creates visual content for brands and media." },
      { name: "Marketing Specialist", description: "Develops strategies to promote products or services." },
      { name: "Mechanical Engineer", description: "Designs and builds mechanical systems and devices." },
      { name: "Nurse", description: "Provides healthcare and support to patients." },
      { name: "Entrepreneur", description: "Starts and manages businesses, often taking risks." },
      { name: "Writer/Journalist", description: "Creates written content for various media outlets." },
      { name: "Financial Analyst", description: "Analyzes financial data to guide investment decisions." },
      { name: "Environmental Scientist", description: "Studies the environment and develops solutions to environmental problems." },
      { name: "Lawyer", description: "Provides legal advice and represents clients in legal matters." },
      { name: "Architect", description: "Designs buildings and structures." },
      { name: "Psychologist", description: "Studies human behavior and provides mental health support." },
    ];

    const careerIds = await Promise.all(
      careersData.map((c) => db.insert("career_paths", { career_name: c.name, description: c.description }))
    );

    // Create career lookup
    const careerLookup = {};
    careersData.forEach((c, index) => {
      careerLookup[c.name] = careerIds[index];
    });

    // **Step 4: Define and Insert Career Weights**
    const careerWeightsData = [
      {
        career: "Software Developer",
        answerWeights: [
          { question: "What subjects did you enjoy most in school?", answer: "Math", weight: 4 },
          { question: "What do you like to do in your free time?", answer: "Building things", weight: 5 },
          { question: "What’s your strongest skill?", answer: "Problem-solving", weight: 5 },
          { question: "What kind of work environment do you prefer?", answer: "Independent", weight: 3 },
          { question: "What’s most important to you in a career?", answer: "Innovation", weight: 4 },
        ],
      },
      {
        career: "Data Scientist",
        answerWeights: [
          { question: "What subjects did you enjoy most in school?", answer: "Math", weight: 5 },
          { question: "What do you like to do in your free time?", answer: "Analyzing data", weight: 5 },
          { question: "What’s your strongest skill?", answer: "Analytical thinking", weight: 5 },
          { question: "What type of tasks do you excel at?", answer: "Working with numbers", weight: 4 },
          { question: "What motivates you the most?", answer: "Learning new things", weight: 3 },
        ],
      },
      {
        career: "Teacher",
        answerWeights: [
          { question: "What do you like to do in your free time?", answer: "Helping others", weight: 4 },
          { question: "Which of these activities sounds most appealing?", answer: "Teaching someone", weight: 5 },
          { question: "What’s your strongest skill?", answer: "Communication", weight: 5 },
          { question: "What kind of work environment do you prefer?", answer: "Collaborative", weight: 3 },
          { question: "What’s most important to you in a career?", answer: "Making a difference", weight: 4 },
        ],
      },
      {
        career: "Social Worker",
        answerWeights: [
          { question: "What do you like to do in your free time?", answer: "Helping others", weight: 5 },
          { question: "What’s your strongest skill?", answer: "Communication", weight: 4 },
          { question: "Would you prefer a job that allows you to help others directly?", answer: "Yes", weight: 5 },
          { question: "What motivates you the most?", answer: "Helping others", weight: 4 },
          { question: "What feedback do you often receive from others?", answer: "You’re a good listener", weight: 3 },
        ],
      },
      {
        career: "Graphic Designer",
        answerWeights: [
          { question: "What subjects did you enjoy most in school?", answer: "Arts", weight: 5 },
          { question: "Which of these activities sounds most appealing?", answer: "Designing a poster", weight: 5 },
          { question: "What’s your strongest skill?", answer: "Creativity", weight: 5 },
          { question: "How important is creativity in your work?", answer: "Very important", weight: 4 },
          { question: "What kind of work environment do you prefer?", answer: "Creative", weight: 3 },
        ],
      },
      {
        career: "Marketing Specialist",
        answerWeights: [
          { question: "What’s your strongest skill?", answer: "Communication", weight: 4 },
          { question: "What type of tasks do you excel at?", answer: "Managing projects", weight: 4 },
          { question: "What kind of work environment do you prefer?", answer: "Fast-paced", weight: 3 },
          { question: "What’s most important to you in a career?", answer: "Creativity", weight: 3 },
          { question: "Do you enjoy public speaking?", answer: "Yes", weight: 4 },
        ],
      },
      {
        career: "Mechanical Engineer",
        answerWeights: [
          { question: "What subjects did you enjoy most in school?", answer: "Science", weight: 4 },
          { question: "What do you like to do in your free time?", answer: "Building things", weight: 5 },
          { question: "What’s your strongest skill?", answer: "Problem-solving", weight: 4 },
          { question: "What type of tasks do you excel at?", answer: "Designing", weight: 3 },
          { question: "What motivates you the most?", answer: "Achieving goals", weight: 3 },
        ],
      },
      {
        career: "Nurse",
        answerWeights: [
          { question: "What subjects did you enjoy most in school?", answer: "Science", weight: 4 },
          { question: "What do you like to do in your free time?", answer: "Helping others", weight: 5 },
          { question: "Would you prefer a job that allows you to help others directly?", answer: "Yes", weight: 5 },
          { question: "What’s your strongest skill?", answer: "Communication", weight: 3 },
          { question: "What motivates you the most?", answer: "Helping others", weight: 4 },
        ],
      },
      {
        career: "Entrepreneur",
        answerWeights: [
          { question: "What’s your strongest skill?", answer: "Organization", weight: 4 },
          { question: "What kind of work environment do you prefer?", answer: "Fast-paced", weight: 3 },
          { question: "Do you enjoy taking risks?", answer: "Yes", weight: 5 },
          { question: "What motivates you the most?", answer: "Financial rewards", weight: 4 },
          { question: "What role do you usually take in a team?", answer: "Leader", weight: 4 },
        ],
      },
      {
        career: "Writer/Journalist",
        answerWeights: [
          { question: "What subjects did you enjoy most in school?", answer: "Humanities", weight: 4 },
          { question: "Which of these activities sounds most appealing?", answer: "Writing a story", weight: 5 },
          { question: "What’s your strongest skill?", answer: "Creativity", weight: 4 },
          { question: "What type of tasks do you excel at?", answer: "Writing", weight: 5 },
          { question: "How important is creativity in your work?", answer: "Very important", weight: 4 },
        ],
      },
      {
        career: "Financial Analyst",
        answerWeights: [
          { question: "What subjects did you enjoy most in school?", answer: "Math", weight: 5 },
          { question: "What’s your strongest skill?", answer: "Analytical thinking", weight: 5 },
          { question: "What type of tasks do you excel at?", answer: "Working with numbers", weight: 5 },
          { question: "What’s most important to you in a career?", answer: "High earnings", weight: 4 },
          { question: "What feedback do you often receive from others?", answer: "You’re very analytical", weight: 3 },
        ],
      },
      {
        career: "Environmental Scientist",
        answerWeights: [
          { question: "What subjects did you enjoy most in school?", answer: "Science", weight: 5 },
          { question: "Which of these activities sounds most appealing?", answer: "Conducting experiments", weight: 4 },
          { question: "Do you prefer working indoors or outdoors?", answer: "Outdoors", weight: 5 },
          { question: "What’s most important to you in a career?", answer: "Making a difference", weight: 4 },
          { question: "What motivates you the most?", answer: "Learning new things", weight: 3 },
        ],
      },
      {
        career: "Lawyer",
        answerWeights: [
          { question: "What subjects did you enjoy most in school?", answer: "Humanities", weight: 4 },
          { question: "What’s your strongest skill?", answer: "Communication", weight: 5 },
          { question: "How do you handle conflict?", answer: "Address it directly", weight: 4 },
          { question: "What motivates you the most?", answer: "Achieving goals", weight: 3 },
          { question: "Do you enjoy public speaking?", answer: "Yes", weight: 4 },
        ],
      },
      {
        career: "Architect",
        answerWeights: [
          { question: "What subjects did you enjoy most in school?", answer: "Arts", weight: 4 },
          { question: "What do you like to do in your free time?", answer: "Building things", weight: 4 },
          { question: "What’s your strongest skill?", answer: "Creativity", weight: 5 },
          { question: "What type of tasks do you excel at?", answer: "Designing", weight: 5 },
          { question: "How important is creativity in your work?", answer: "Very important", weight: 4 },
        ],
      },
      {
        career: "Psychologist",
        answerWeights: [
          { question: "What do you like to do in your free time?", answer: "Helping others", weight: 4 },
          { question: "What’s your strongest skill?", answer: "Communication", weight: 4 },
          { question: "Would you prefer a job that allows you to help others directly?", answer: "Yes", weight: 5 },
          { question: "What feedback do you often receive from others?", answer: "You’re a good listener", weight: 4 },
          { question: "What motivates you the most?", answer: "Helping others", weight: 4 },
        ],
      },
    ];

    // Insert weights
    for (const careerWeight of careerWeightsData) {
      const careerId = careerLookup[careerWeight.career];
      for (const aw of careerWeight.answerWeights) {
        const answerId = answerLookup[`${aw.question}:${aw.answer}`];
        if (answerId && careerId) {
          await db.insert("answer_career_weights", {
            answer_id: answerId,
            career_id: careerId,
            weight: aw.weight,
          });
        }
      }
    }

    return { success: true };
  },
});