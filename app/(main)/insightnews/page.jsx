"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function InsightNews({ theme }) { // Accept theme as a prop
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mockProfile = {
    interests: ["software development", "AI", "cubersecurity"],
  };

  const fetchInsights = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/insights?interests=${mockProfile.interests.join(",")}`
      );
      const data = await response.json();
      if (response.ok) {
        setInsights(data);
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (error) {
      setError("Failed to fetch insights. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} p-6 bg-white dark:bg-gray-800`}>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <motion.h2
          className="text-xl font-semibold mb-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white p-3 rounded-t-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Industry Insights
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Stay updated with trends in {mockProfile.interests.join(", ")}.
        </p>

        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Skeleton className="h-32 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
              </motion.div>
            ))}
          </div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Oops!</AlertTitle>
              <AlertDescription className="text-red-600 dark:text-red-300">{error}</AlertDescription>
              <Button
                variant="outline"
                size="sm"
                onClick={fetchInsights}
                className="mt-2 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Retry
              </Button>
            </Alert>
          </motion.div>
        ) : insights.length > 0 ? (
          <AnimatePresence>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <Card className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
                    {insight.imageUrl && (
                      <motion.img
                        src={insight.imageUrl}
                        alt={insight.title}
                        className="w-full h-48 object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{insight.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{insight.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        asChild
                        variant="link"
                        className="text-violet-600 hover:text-violet-800 dark:text-violet-300 dark:hover:text-violet-100 hover:underline p-0"
                      >
                        <a href={insight.url} target="_blank" rel="noopener noreferrer">
                          Read more
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        ) : (
          <motion.p
            className="text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No insights found for your interests.
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default InsightNews;