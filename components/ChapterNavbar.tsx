'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight, Home, LayoutGrid, Loader2 } from 'lucide-react';

interface ChapterNavbarProps {
    currentChapter: number;
    totalChapters: number;
}

const ChapterNavbar: React.FC<ChapterNavbarProps> = ({ currentChapter, totalChapters }) => {
    const pathname = usePathname();
    const [isNavigating, setIsNavigating] = useState(false);
    const [navDirection, setNavDirection] = useState<'prev' | 'next' | 'home' | null>(null);

    const prevChapter = currentChapter > 1 ? currentChapter - 1 : null;
    const nextChapter = currentChapter < totalChapters ? currentChapter + 1 : null;

    // Reset loading state when pathname changes (meaning navigation completed)
    useEffect(() => {
        setIsNavigating(false);
        setNavDirection(null);
    }, [pathname]);

    const handleNavClick = (direction: 'prev' | 'next' | 'home') => {
        setIsNavigating(true);
        setNavDirection(direction);
    };

    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left: Previous Button */}
                    <div className="flex-1 flex justify-start">
                        {prevChapter ? (
                            <Link
                                href={`/maths11_notes/chapters/chapter${prevChapter}`}
                                onClick={() => handleNavClick('prev')}
                                className={`flex items-center gap-2 font-bold transition-all ${isNavigating && navDirection === 'prev'
                                        ? 'text-gray-400 cursor-not-allowed'
                                        : 'text-indigo-600 hover:text-indigo-800 hover:-translate-x-1'
                                    }`}
                            >
                                {isNavigating && navDirection === 'prev' ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <ChevronLeft className="w-5 h-5" />
                                )}
                                <span className="hidden sm:inline">Prev Chapter</span>
                                <span className="sm:hidden">Prev</span>
                            </Link>
                        ) : (
                            <div className="w-20"></div> // Spacer
                        )}
                    </div>

                    {/* Center: Home/Chapters */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            onClick={() => handleNavClick('home')}
                            className={`p-2 rounded-xl transition-all ${isNavigating && navDirection === 'home'
                                    ? 'text-indigo-400'
                                    : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50'
                                }`}
                            title="Back to Home"
                        >
                            {isNavigating && navDirection === 'home' ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <Home className="w-6 h-6" />
                            )}
                        </Link>
                        <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
                        <span className="text-slate-500 font-bold text-sm hidden sm:block tracking-widest uppercase">
                            Chapter {currentChapter}
                        </span>
                    </div>

                    {/* Right: Next Button */}
                    <div className="flex-1 flex justify-end">
                        {nextChapter ? (
                            <Link
                                href={`/maths11_notes/chapters/chapter${nextChapter}`}
                                onClick={() => handleNavClick('next')}
                                className={`flex items-center gap-2 font-bold transition-all ${isNavigating && navDirection === 'next'
                                        ? 'text-gray-400 cursor-not-allowed'
                                        : 'text-indigo-600 hover:text-indigo-800 hover:translate-x-1'
                                    }`}
                            >
                                <span className="hidden sm:inline">Next Chapter</span>
                                <span className="sm:hidden">Next</span>
                                {isNavigating && navDirection === 'next' ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <ChevronRight className="w-5 h-5" />
                                )}
                            </Link>
                        ) : (
                            <div className="w-20"></div> // Spacer
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default ChapterNavbar;
