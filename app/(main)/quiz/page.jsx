"use client";

import { useState, useContext, useEffect } from "react";
import { useQuery, useMutation, useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { UserContext } from "@/app/_context/UserContext";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircleIcon } from "lucide-react";

export default function QuizPage({ theme }) {
  const convex = useConvex();
  const questions = useQuery(api.queries.getQuestions);
  const saveQuizResult = useMutation(api.mutations.saveQuizResult);
  const { userData } = useContext(UserContext);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [isLoadingResult, setIsLoadingResult] = useState(false);

  // Initialize selectedAnswers when questions are loaded
  useEffect(() => {
    if (questions && selectedAnswers.length === 0) {
      setSelectedAnswers(Array(questions.length).fill(null));
    }
  }, [questions, selectedAnswers.length]);
  // Loading state
  if (questions === undefined) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
        <p className="text-lg text-gray-600 dark:text-gray-300">Loading questions...</p>
      </div>
    );
  }

  // No questions available
  if (questions === null || questions.length === 0) {
    return (
      <div className={`bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
        <p className="text-lg text-red-600 dark:text-red-400">No questions available.</p>
      </div>
    );
  }

  const handleAnswerSelection = async (answerId) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerId;
    setSelectedAnswers(newSelectedAnswers);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsLoadingResult(true);
      try {
        const career = await convex.query(api.queries.getCareerSuggestion, {
          answerIds: newSelectedAnswers.filter((a) => a !== null),
        });
        setResult(career);
        setIsLoadingResult(false);

        if (career && career.id && userData?.id) {
          await saveQuizResult({
            userId: userData.id,
            answers: newSelectedAnswers.filter((a) => a !== null),
            suggestedCareerId: career.id,
          });
        }
      } catch (error) {
        console.error("Error fetching career suggestion:", error);
        setIsLoadingResult(false);
        setResult({
          career_name: "Error",
          description: "Something went wrong. Please try again.",
        });
      }
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Loading result state
  if (isLoadingResult) {
    return (
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">Calculating your career path...</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Result display
  if (result) {
    return (
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white dark:bg-gray-800 shadow-lg max-w-md w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                Your Suggested Career Path
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                {result.career_name || "No career match found"}
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {result.description || "Try the quiz again!"}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Main quiz interface
  return (
    <div className={`min-h-screen flex bg-gray-100 dark:bg-gray-900 items-center justify-center ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-white dark:bg-gray-800 shadow-lg max-w-md w-full">
          <CardHeader>
            <div className="flex items-center">
              <HelpCircleIcon className="w-6 h-6 text-violet-600 dark:text-violet-300" />
              <CardTitle className="ml-2 text-2xl font-bold text-gray-800 dark:text-white">
                Career Quiz
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{currentQuestion.question_text}</p>
            <div className="mt-4 mb-6">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-violet-600 h-2.5 rounded-full"
                  initial={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
                  animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            <div className="space-y-3">
              {currentQuestion.answers.map((answer) => (
                <motion.button
                  key={answer.id}
                  className={`w-full p-3 rounded-lg transition-colors ${
                    selectedAnswers[currentQuestionIndex] === answer.id
                      ? "bg-violet-700 text-white"
                      : "bg-violet-600 text-white hover:bg-violet-700"
                  }`}
                  onClick={() => handleAnswerSelection(answer.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {answer.answer_text}
                </motion.button>
              ))}
            </div>
            <Button
              onClick={handleBack}
              disabled={currentQuestionIndex === 0}
              className="mt-4 bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            >
              Back
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}