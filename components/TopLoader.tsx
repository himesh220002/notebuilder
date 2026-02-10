'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const TopLoader = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Start loading when pathname or searchParams change
        setLoading(true);
        setProgress(10);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(interval);
                    return 90;
                }
                return prev + 10;
            });
        }, 200);

        // Complete loading after a short delay to ensure rendering is visible
        const timeout = setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
                setLoading(false);
                setProgress(0);
            }, 200);
        }, 500);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [pathname, searchParams]);

    if (!loading) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[1000] h-1 bg-transparent">
            <div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default TopLoader;
