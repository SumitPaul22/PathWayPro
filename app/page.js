"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Meteors } from "@/components/magicui/meteors";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SunIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 border-b border-gray-100/50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-black dark:text-white font-bold text-xl tracking-wide">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <p>PathWayPro</p>
          </div>
          <div className="flex items-center space-x-4">
            <UserButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="bg-gray-50 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 z-10">
        <div className="flex flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-left max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-in-top">
              <span className="block">Navigate Your Future with</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600">
                AI-Driven Mentorship
              </span>
            </h1>

            <TypingAnimation className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in delay-300 leading-relaxed">
              PathWayPro brings this program for all class 11 & 12 students,college students to overcome a wide variety of confusions,
              issues and provide ultimate guidance to take them to their ultimate goal.
            </TypingAnimation>

            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-12 py-6 rounded-full text-lg font-semibold shadow-xl transition-all duration-500 hover:shadow-2xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105 animate-pulse"
            >
              <Link href="./dashboard">
                <span className="relative z-10">Click Here To Start</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></span>
                <span className="absolute inset-0 animate-pulse-slow bg-gradient-to-r from-transparent via-white/10 to-transparent"></span>
              </Link>
            </Button>
          </div>

          {/* Image Transition Section - Hidden on small screens, visible on md and up */}
          {/* <div className="relative w-1/2 h-96 hidden sm:block">
            <Image
              src="/image1.jpg"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="animate-fade-loop"
            />
            <Image
              src="/image2.jpg"
              alt="Image 2"
              layout="fill"
              objectFit="cover"
              className="animate-fade-loop-delay"
            />
          </div> */}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto animate-fade-in delay-900">
          <FeatureCard
            title="Personalized Guidance"
            description="AI-crafted advice tailored to your career goals."
            icon="✨"
          />
          <FeatureCard
            title="Skill Mastery"
            description="Practice interviews and build expertise with real-time feedback."
            icon="📚"
          />
          <FeatureCard
            title="Smart Networking"
            description="Grow your professional network with AI-driven insights."
            icon="🌐"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 PathWayPro. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/about" className="hover:text-green-400">About</Link>
            <Link href="/privacy" className="hover:text-green-400">Privacy</Link>
            <Link href="/terms" className="hover:text-green-400">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100/50">
      <div className="text-5xl mb-6 animate-bounce-slow">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}