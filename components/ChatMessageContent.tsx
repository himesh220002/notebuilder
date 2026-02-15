'use client';

import React from 'react';
import MathText from './MathText';
import { Terminal } from 'lucide-react';

interface ChatMessageContentProps {
    content: string;
}

export default function ChatMessageContent({ content }: ChatMessageContentProps) {
    // 1. Split by code blocks (```language ... ```)
    const codeBlockRegex = /```(\w+)?\n?([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
        // Text before the code block
        if (match.index > lastIndex) {
            parts.push({
                type: 'text',
                content: content.slice(lastIndex, match.index)
            });
        }

        // The code block itself
        parts.push({
            type: 'code',
            language: match[1] || 'text',
            content: match[2].trim()
        });

        lastIndex = codeBlockRegex.lastIndex;
    }

    // Remaining text after last code block
    if (lastIndex < content.length) {
        parts.push({
            type: 'text',
            content: content.slice(lastIndex)
        });
    }

    return (
        <div className="space-y-4">
            {parts.map((part, idx) => {
                if (part.type === 'code') {
                    return (
                        <div key={idx} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                            <div className="bg-slate-800 px-4 py-2 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-3 h-3" />
                                    {part.language || 'code'}
                                </div>
                            </div>
                            <pre className="p-4 bg-slate-900 text-slate-50 text-xs overflow-x-auto custom-scrollbar font-mono leading-relaxed">
                                <code>{part.content}</code>
                            </pre>
                        </div>
                    );
                }

                // Processing text part for simplistic markdown (headers, bold, etc)
                // We split by lines to handle headers and lists
                const lines = part.content.split('\n');
                return (
                    <div key={idx} className="space-y-2">
                        {lines.map((line, lIdx) => {
                            if (line.startsWith('### ')) {
                                return (
                                    <h3 key={lIdx} className="text-sm font-black text-indigo-700 mt-4 mb-2 first:mt-0 italic tracking-tight">
                                        {line.replace('### ', '')}
                                    </h3>
                                );
                            }

                            if (line.startsWith('* ') || line.startsWith('- ')) {
                                return (
                                    <div key={lIdx} className="flex gap-2 text-sm">
                                        <span className="text-indigo-500 font-black">•</span>
                                        <MathText text={line.slice(2)} />
                                    </div>
                                );
                            }

                            if (!line.trim()) return <div key={lIdx} className="h-2" />;

                            return (
                                <div key={lIdx} className="leading-relaxed">
                                    <MathText text={line} />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
