"use client";
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { BorderBeam } from "@/components/magicui/border-beam";

function ChatBox({ theme }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const welcomeMessage = {
      text: "Welcome to PathWayPro! I am your AI mentor, here to provide personalized career guidance, industry insights, and skill-building exercises. Ask me anything!",
      sender: "ai",
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim() === "" || isLoading) return;

    const userMessage = {
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      const aiMessage = {
        text: data.text,
        sender: "ai",
        timestamp: data.timestamp,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Failed to get response. Please try again.",
          sender: "ai",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => setMessages([]);

  return (
    <div className="h-[85vh] bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-2xl flex flex-col relative">
      <div className="p-4 border-b bg-gray-100 dark:bg-gray-800 rounded-t-2xl flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">PathWayPro AI Chat</h2>
        <button
          onClick={handleClearChat}
          className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-red-600 transition-colors dark:bg-pink-500 dark:hover:bg-red-500"
        >
          Clear Chat 🗑️
        </button>
      </div>

      {/* Messages Display */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100 dark:bg-gray-900">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-violet-600 text-white dark:bg-violet-500"
                  : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
              }`}
            >
              {message.sender === "ai" ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                  {message.text}
                </ReactMarkdown>
              ) : (
                <p>{message.text}</p>
              )}
              <span className="text-xs opacity-70">{message.timestamp}</span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[70%] p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-100"></div>
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-4 border-t border-gray-300 dark:border-gray-600 flex gap-2 bg-gray-100 dark:bg-gray-900">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-violet-500 dark:hover:bg-violet-600"
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? "..." : "Send"}
        </button>
      </form>
      <BorderBeam duration={8} size={100} />
    </div>
  );
}

export default ChatBox;