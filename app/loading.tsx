'use client';

import React from 'react';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-md transition-opacity duration-300">
            <div className="relative flex items-center justify-center">
                {/* outer ring */}
                <div className="w-20 h-20 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>

                {/* inner pulse */}
                <div className="absolute w-12 h-12 bg-indigo-500 rounded-full animate-pulse opacity-50"></div>

                {/* central icon/dot */}
                <div className="absolute w-4 h-4 bg-indigo-700 rounded-full shadow-[0_0_15px_rgba(67,56,202,0.8)]"></div>
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse">
                    Loading Knowledge...
                </h2>
                <p className="text-gray-500 mt-2 font-medium">Preparing your next chapter</p>
            </div>

            {/* progress bar simulator at bottom of loader */}
            <div className="mt-6 w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-[loading_2s_infinite]"></div>
            </div>

            <style jsx>{`
        @keyframes loading {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0%); }
          100% { width: 0%; transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
}
