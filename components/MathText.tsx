'use client';

import 'katex/dist/katex.min.css';
import katex from 'katex';
import { useRef } from 'react';

interface MathTextProps {
    text: string;
    className?: string;
    block?: boolean;
}

export default function MathText({ text, className = '', block = false }: MathTextProps) {
    // Comprehensive map of text keywords to LaTeX commands
    const keywordMap: Record<string, string> = {
        'times': '\\times',
        'div': '\\div',
        'rightarrow': '\\rightarrow',
        'leftarrow': '\\leftarrow',
        'Rightarrow': '\\Rightarrow',
        'Leftarrow': '\\Leftarrow',
        'implies': '\\Rightarrow',
        'sqrt': '\\sqrt',
        'pi': '\\pi',
        'theta': '\\theta',
        'alpha': '\\alpha',
        'beta': '\\beta',
        'gamma': '\\gamma',
        'delta': '\\delta',
        'Delta': '\\Delta',
        'lambda': '\\lambda',
        'mu': '\\mu',
        'sigma': '\\sigma',
        'tau': '\\tau',
        'omega': '\\omega',
        'Omega': '\\Omega',
        'infty': '\\infty',
        'pm': '\\pm',
        'approx': '\\approx',
        'neq': '\\neq',
        'le': '\\le',
        'ge': '\\ge',
        'deg': '^\\circ',
        'degree': '^\\circ',
        'degrees': '^\\circ',
    };

    // Map for symbol conversions
    const symbolMap: Record<string, string> = {
        '<=': '\\le',
        '>=': '\\ge',
        '!=': '\\neq',
        '->': '\\rightarrow',
        '=>': '\\Rightarrow',
        '<-': '\\leftarrow',
        '×': '\\times',
        '÷': '\\div',
        '·': '\\cdot',
        '≤': '\\le',
        '≥': '\\ge',
        '≠': '\\neq',
        '≈': '\\approx',
        'π': '\\pi',
        '∞': '\\infty',
        '√': '\\sqrt',
    };

    // Helper to process a raw math string into valid LaTeX
    const processMath = (mathContent: string): string => {
        let processed = mathContent;

        // 1. Replace Common Symbols
        Object.entries(symbolMap).forEach(([symbol, replacement]) => {
            // Escape special regex characters in symbol if necessary
            const safeSymbol = symbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            processed = processed.replace(new RegExp(safeSymbol, 'g'), replacement);
        });

        // 2. Replace Keywords (using word boundaries \b to avoid partial matches)
        // We iterate keys sorted by length desc to prevent substring issues (though \b handles most)
        Object.keys(keywordMap).forEach((keyword) => {
            const replacement = keywordMap[keyword];
            // Regex: \bkeyword\b ensures "times" is matched but "timestamp" is not
            // We also check if it's NOT already preceded by \ (checking for existing commands)
            const regex = new RegExp(`(?<!\\\\)\\b${keyword}\\b`, 'g');
            processed = processed.replace(regex, replacement);
        });

        return processed;
    };

    // Render logic
    const renderContent = () => {
        // Handle explicit block mode requested via prop
        if (block) {
            // If the text comes wrapped in $...$ or $$...$$, strip them for processing
            let contentToRender = text.trim();
            if (contentToRender.startsWith('$$') && contentToRender.endsWith('$$')) {
                contentToRender = contentToRender.slice(2, -2);
            } else if (contentToRender.startsWith('$') && contentToRender.endsWith('$')) {
                contentToRender = contentToRender.slice(1, -1);
            }

            return (
                <div
                    className={className}
                    dangerouslySetInnerHTML={{
                        __html: katex.renderToString(processMath(contentToRender), {
                            throwOnError: false,
                            displayMode: true
                        })
                    }}
                />
            );
        }

        // Inline / Mixed content mode
        // Split by '$' to find math segments
        const parts = text.split('$');

        return (
            <span className={className}>
                {parts.map((part, index) => {
                    // Even index = Text, Odd index = Math (assuming valid pairing)
                    if (index % 2 === 0) {
                        return <span key={index}>{part}</span>;
                    } else {
                        return (
                            <span
                                key={index}
                                dangerouslySetInnerHTML={{
                                    __html: katex.renderToString(processMath(part), {
                                        throwOnError: false,
                                        displayMode: false
                                    })
                                }}
                            />
                        );
                    }
                })}
            </span>
        );
    };

    return renderContent();
}
