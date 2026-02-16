'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight, Home, LayoutGrid, Loader2, Brain } from 'lucide-react';

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
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-indigo-100 w-full overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16">
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
                        <div className="flex flex-col items-center sm:items-start group">
                            <span className="text-slate-500 font-bold text-sm hidden sm:block tracking-widest uppercase">
                                Chapter {currentChapter}
                            </span>
                            <LastScore chapterId={currentChapter} />
                        </div>
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

interface LastScoreProps {
    chapterId: number;
}

const LastScore: React.FC<LastScoreProps> = ({ chapterId }) => {
    const [lastScore, setLastScore] = useState<{ score: number, total: number } | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem(`mcq_score_ch_${chapterId}`);
        if (saved) {
            try {
                setLastScore(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse score", e);
            }
        }
    }, [chapterId]);

    if (!lastScore) return null;

    return (
        <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-0.5 border border-emerald-100 animate-in fade-in slide-in-from-top-1 duration-500">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            LAST SCORE: {lastScore.score}/{lastScore.total}
        </div>
    );
};

export default ChapterNavbar;
