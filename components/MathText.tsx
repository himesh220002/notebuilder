'use client';

import 'katex/dist/katex.min.css';
import katex from 'katex';
import { useEffect, useRef } from 'react';

interface MathTextProps {
    text: string;
    className?: string;
    block?: boolean;
}

export default function MathText({ text, className = '', block = false }: MathTextProps) {
    const containerRef = useRef<HTMLSpanElement>(null);

    // Function to render math
    const renderMath = (content: string) => {
        // Split by $ but keep delimiters to identify math segments
        // Regex matches $...$ but not \$ (escaped dollars)
        // Simple split by $ works if we assume valid pairs:
        // "Text $math$ text" -> ["Text ", "math", " text"]
        const parts = content.split('$');

        return parts.map((part, index) => {
            // Even indices are text, odd are math
            if (index % 2 === 0) {
                return <span key={index}>{part}</span>;
            } else {
                return (
                    <span
                        key={index}
                        dangerouslySetInnerHTML={{
                            __html: katex.renderToString(part, {
                                throwOnError: false,
                                displayMode: false // Inline by default for mix
                            })
                        }}
                    />
                );
            }
        });
    };

    // If it is a block rendering check
    if (block) {
        const parts = text.split('$');
        // If the entire text is wrapped in $, render as block math
        if (parts.length === 3 && parts[0].trim() === '' && parts[2].trim() === '') {
            return (
                <div
                    className={className}
                    dangerouslySetInnerHTML={{
                        __html: katex.renderToString(parts[1], {
                            throwOnError: false,
                            displayMode: true
                        })
                    }}
                />
            );
        }
    }

    return (
        <span className={className}>
            {renderMath(text)}
        </span>
    );
}
