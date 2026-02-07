'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Home, LayoutGrid } from 'lucide-react';

interface ChapterNavbarProps {
    currentChapter: number;
    totalChapters: number;
}

const ChapterNavbar: React.FC<ChapterNavbarProps> = ({ currentChapter, totalChapters }) => {
    const prevChapter = currentChapter > 1 ? currentChapter - 1 : null;
    const nextChapter = currentChapter < totalChapters ? currentChapter + 1 : null;

    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left: Previous Button */}
                    <div className="flex-1 flex justify-start">
                        {prevChapter ? (
                            <Link
                                href={`/maths11_notes/chapters/chapter${prevChapter}`}
                                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-bold transition-all hover:-translate-x-1"
                            >
                                <ChevronLeft className="w-5 h-5" />
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
                            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                            title="Back to Home"
                        >
                            <Home className="w-6 h-6" />
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
                                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-bold transition-all hover:translate-x-1"
                            >
                                <span className="hidden sm:inline">Next Chapter</span>
                                <span className="sm:hidden">Next</span>
                                <ChevronRight className="w-5 h-5" />
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
