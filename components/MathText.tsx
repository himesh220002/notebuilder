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
        // Sets
        'cup': '\\cup',
        'cap': '\\cap',
        'in': '\\in',
        'notin': '\\notin',
        'subseteq': '\\subseteq',
        'phi': '\\phi',
        'U': '\\mathbb{U}',
        'mathR': '\\mathbb{R}',
        'mathN': '\\mathbb{N}',
        'mathZ': '\\mathbb{Z}',
        // Trig & Logs
        'sin': '\\sin',
        'cos': '\\cos',
        'tan': '\\tan',
        'log': '\\log',
        'ln': '\\ln',
        'antilog': '\\text{antilog}',
        // Others
        'circ': '\\circ',
        'cdot': '\\cdot',
        'bar': '\\bar',
        'Leftrightarrow': '\\Leftrightarrow',
        'iff': '\\iff',
        'lim': '\\lim',
        'sum': '\\sum',
        'int': '\\int',
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
        '<=>': '\\Leftrightarrow',
        '<=> ': '\\Leftrightarrow ',
        '| ': ' \\mid ',
    };

    // Helper to process a raw math string into valid LaTeX
    const processMath = (mathContent: string): string => {
        let processed = mathContent;

        // 1. Replace Common Symbols
        Object.entries(symbolMap).forEach(([symbol, replacement]) => {
            const safeSymbol = symbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            processed = processed.replace(new RegExp(safeSymbol, 'g'), replacement);
        });

        // 2. Replace Keywords
        Object.keys(keywordMap).forEach((keyword) => {
            const replacement = keywordMap[keyword];
            const regex = new RegExp(`(\\\\)?\\b${keyword}\\b`, 'g');
            processed = processed.replace(regex, (match, prefix) => {
                if (prefix) return match;
                return replacement;
            });
        });

        return processed;
    };

    // Helper to check if a string contains un-delimited LaTeX
    const isNakedLatex = (str: string) => {
        return /\\(frac|lim|sum|int|sqrt|alpha|beta|gamma|delta|theta)|[\^_]\{/.test(str);
    };

    // Render logic
    const renderContent = () => {
        // Handle explicit block mode
        if (block) {
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

        // Improved splitting logic using regex to capture delimiters
        // It matches both $$...$$ and $...$
        const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);

        return (
            <span className={className}>
                {parts.map((part, index) => {
                    if (!part) return null;

                    // Check if this part is wrapped in delimiters
                    const isBlock = part.startsWith('$$') && part.endsWith('$$');
                    const isInline = part.startsWith('$') && part.endsWith('$');

                    if (isBlock || isInline) {
                        const content = isBlock ? part.slice(2, -2) : part.slice(1, -1);
                        return (
                            <span
                                key={index}
                                dangerouslySetInnerHTML={{
                                    __html: katex.renderToString(processMath(content), {
                                        throwOnError: false,
                                        displayMode: isBlock
                                    })
                                }}
                            />
                        );
                    }

                    // For parts NOT wrapped in $, check if it's "naked" LaTeX
                    if (isNakedLatex(part)) {
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

                    // Otherwise, just plain text
                    return <span key={index}>{part}</span>;
                })}
            </span>
        );
    };

    return renderContent();
}
