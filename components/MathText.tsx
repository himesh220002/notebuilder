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
        'frac': '\\frac',
        'text': '\\text',
        'together': '\\text{together}',
        'of': '\\text{ of }',
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
        '₹': '\\text{₹}',
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
            // Regex: checks for optional preceding backslash
            const regex = new RegExp(`(\\\\)?\\b${keyword}\\b`, 'g');
            processed = processed.replace(regex, (match, prefix) => {
                // If there's a preceding backslash, it's already an escaped command; leave it alone
                if (prefix) return match;
                // Otherwise replace the keyword with its LaTeX command
                return replacement;
            });
        });

        return processed;
    };

    // Render logic
    const renderContent = () => {
        // Handle explicit block mode requested via prop
        if (block) {
            let contentToRender = text.trim();
            // Basic cleanup to remove wrapping delimiters if present
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
        // If the entire text is wrapped in '$' (e.g. "$x+y$"), strip it to avoid empty start/end parts
        let mixedText = text;
        if (mixedText.startsWith('$') && mixedText.endsWith('$') && mixedText.split('$').length === 3) {
            // It's a single math expression wrapped in $
            mixedText = mixedText.slice(1, -1);
            return (
                <span
                    className={className}
                    dangerouslySetInnerHTML={{
                        __html: katex.renderToString(processMath(mixedText), {
                            throwOnError: false,
                            displayMode: false
                        })
                    }}
                />
            );
        }

        const parts = mixedText.split('$');
        return (
            <span className={className}>
                {parts.map((part, index) => {
                    // Even index = Text, Odd index = Math
                    if (index % 2 === 0) {
                        // Filter out orphan '$' if any weirdness happened
                        return <span key={index}>{part}</span>;
                    } else {
                        // Math part: ensure we don't accidentally pass empty
                        if (!part.trim()) return null;
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
