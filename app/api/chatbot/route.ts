import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { message, context, history } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: 'Gemini API key is not configured' },
                { status: 500 }
            );
        }

        // Gemini API endpoint (using gemini-flash-latest for stability)
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;

        // Map history to Gemini format (user/model instead of user/assistant)
        const contents = [
            {
                role: "user",
                parts: [{
                    text: `You are a helpful AI learning assistant for an Applied Mathematics notes application. Your role is to explain mathematical concepts, help with problem-solving, and provide hints for Class 11 students.

PAGE CONTEXT (The content currently visible to the user):
${context || 'No specific page context provided.'}

STRICT FORMATTING RULES:
1. Use LaTeX for ALL mathematical expressions. YOU MUST ALWAYS surround inline math with $ and block math with $$. NEVER omit these delimiters.
2. Use standard Markdown for headers (e.g., ### Concept), bold text (**text**), and lists.
3. If providing code or step-by-step algorithms, use Markdown code blocks (\`\`\`python ... \`\`\`).
4. Structure your response clearly with 'Explanation' and 'Practical Example/Code' sections when appropriate.
5. Be encouraging, concise, and professional. Use LaTeX keywords like 'sin', 'cos', 'frac', 'lim', 'sum', etc.` }]
            },
            {
                role: "model",
                parts: [{ text: "Understood. I will act as a Class 11 Applied Mathematics learning assistant, providing concise, encouraging help grounded in the page context provided. How can I help you today?" }]
            },
            ...(history || []).map((m: any) => ({
                role: m.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: m.content }]
            })),
            {
                role: "user",
                parts: [{ text: message }]
            }
        ];

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: contents,
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1000,
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API Error:', errorData);

            const errorMessage = errorData.error?.message || "";
            // Regex to match patterns like "22/20" or "quota reached"
            const quotaMatch = errorMessage.match(/(\d+)\/(\d+)/);

            return NextResponse.json(
                {
                    error: 'Failed to get response from Gemini provider',
                    message: errorMessage,
                    quotaInfo: quotaMatch ? { current: parseInt(quotaMatch[1]), limit: parseInt(quotaMatch[2]) } : null
                },
                { status: response.status }
            );
        }

        const data = await response.json();

        // Extract reply from Gemini response structure
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";

        return NextResponse.json({ reply });
    } catch (error) {
        console.error('Chatbot API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
