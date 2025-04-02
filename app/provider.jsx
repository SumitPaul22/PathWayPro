"use client";
import React, { Suspense } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import AuthProvider from "./AuthProvider";

function Provider({ children }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin border-t-transparent"></div>
            <p className="text-gray-600 text-lg font-semibold animate-pulse">
              Loading PathWayPro...
            </p>
          </div>
        </div>
      }
    >
      <ConvexProvider client={convex}>
        <AuthProvider>{children}</AuthProvider>
      </ConvexProvider>
    </Suspense>
  );
}

export default Provider;