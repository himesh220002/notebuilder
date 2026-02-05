'use client';

type VennMode = 'union' | 'intersection' | 'differenceA' | 'differenceB' | 'union3' | 'intersection3';

interface VennDiagramProps {
    mode: VennMode;
    labelA?: string;
    labelB?: string;
    labelC?: string;
}

export default function VennDiagram({ mode, labelA = "A", labelB = "B", labelC = "C" }: VennDiagramProps) {
    const isThreeSet = mode.includes('3');

    // SVG Config
    const w = 300, h = isThreeSet ? 280 : 200;
    const r = 60;

    // Centers for 2 Sets
    const c1 = { x: 110, y: 100 };
    const c2 = { x: 190, y: 100 };

    // Centers for 3 Sets
    const Ca = { x: 150, y: 90 };
    const Cb = { x: 100, y: 170 };
    const Cc = { x: 200, y: 170 };

    // Colors
    const colorA = "#3b82f6"; // blue
    const colorB = "#ef4444"; // red
    const colorC = "#10b981"; // green
    const colorMix = "#8b5cf6"; // purple

    return (
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-4 capitalize">{mode.replace(/([A-Z])/g, ' $1').replace('3', ' (3 Sets)')}</h4>

            <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
                <defs>
                    {/* Definitions for 2-circle */}
                    <circle id="cA" cx={c1.x} cy={c1.y} r={r} />
                    <circle id="cB" cx={c2.x} cy={c2.y} r={r} />

                    {/* Definitions for 3-circle */}
                    <circle id="c3A" cx={Ca.x} cy={Ca.y} r={r} />
                    <circle id="c3B" cx={Cb.x} cy={Cb.y} r={r} />
                    <circle id="c3C" cx={Cc.x} cy={Cc.y} r={r} />

                    <clipPath id="clipB"><use href="#cB" /></clipPath>

                    {/* Clips for 3-set intersections */}
                    <clipPath id="clip3B"><use href="#c3B" /></clipPath>
                    <clipPath id="clip3C"><use href="#c3C" /></clipPath>
                </defs>

                {/* Background U */}
                <rect x="2" y="2" width={w - 4} height={h - 4} rx="10" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <text x="15" y="25" className="text-sm font-bold fill-gray-400">U</text>

                {/* --- 2 SET MODE --- */}
                {!isThreeSet && (
                    <>
                        {/* A Only (A - B) */}
                        {(mode === 'union' || mode === 'differenceA') && (
                            <use href="#cA" fill={colorA} opacity="0.6" mask="url(#maskOutB)" />
                        )}
                        {/* Define Mask on the fly for A-B */}
                        <mask id="maskOutB">
                            <rect x="0" y="0" width={w} height={h} fill="white" />
                            <use href="#cB" fill="black" />
                        </mask>

                        {/* B Only (B - A) */}
                        {(mode === 'union' || mode === 'differenceB') && (
                            <use href="#cB" fill={colorB} opacity="0.6" mask="url(#maskOutA)" />
                        )}
                        <mask id="maskOutA">
                            <rect x="0" y="0" width={w} height={h} fill="white" />
                            <use href="#cA" fill="black" />
                        </mask>

                        {/* Intersection */}
                        {(mode === 'union' || mode === 'intersection') && (
                            <use href="#cA" fill={colorMix} opacity="0.8" clipPath="url(#clipB)" />
                        )}

                        {/* Outlines */}
                        <use href="#cA" fill="none" stroke={colorA} strokeWidth="2" />
                        <use href="#cB" fill="none" stroke={colorB} strokeWidth="2" />

                        {/* Labels */}
                        <text x={c1.x - 20} y={c1.y - r - 5} className="font-bold fill-blue-700 text-sm">{labelA}</text>
                        <text x={c2.x + 10} y={c2.y - r - 5} className="font-bold fill-red-700 text-sm">{labelB}</text>
                    </>
                )}

                {/* --- 3 SET MODE --- */}
                {isThreeSet && (
                    <>
                        {/* Fill Logic for 3 Sets */}

                        {/* Union: Fill all simply */}
                        {mode === 'union3' && (
                            <>
                                <use href="#c3A" fill={colorA} opacity="0.5" />
                                <use href="#c3B" fill={colorB} opacity="0.5" />
                                <use href="#c3C" fill={colorC} opacity="0.5" />
                            </>
                        )}

                        {/* Intersection: A AND B AND C */}
                        {mode === 'intersection3' && (
                            <g>
                                {/* Simpler: Clip A with B's ClipPath. Then take that result and Clip with C's ClipPath? */}
                                <g clipPath="url(#clip3B)">
                                    <g clipPath="url(#clip3C)">
                                        <use href="#c3A" fill="#4f46e5" opacity="1" />
                                    </g>
                                </g>
                            </g>
                        )}

                        {/* Outlines */}
                        <use href="#c3A" fill="none" stroke={colorA} strokeWidth="2" />
                        <use href="#c3B" fill="none" stroke={colorB} strokeWidth="2" />
                        <use href="#c3C" fill="none" stroke={colorC} strokeWidth="2" />

                        {/* Labels */}
                        <text x={Ca.x} y={Ca.y - r + 15} className="font-bold fill-blue-700 text-sm">{labelA}</text>
                        <text x={Cb.x - r + 10} y={Cb.y} className="font-bold fill-red-700 text-sm">{labelB}</text>
                        <text x={Cc.x + r - 20} y={Cc.y} className="font-bold fill-emerald-700 text-sm">{labelC}</text>
                    </>
                )}

            </svg>
        </div>
    );
}
