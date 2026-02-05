'use client';

import Image from 'next/image';

interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
}

interface MindMapViewerProps {
  data?: MindMapNode;
  src?: string;
  alt?: string;
}

export default function MindMapViewer({ data, src, alt }: MindMapViewerProps) {
  if (src) {
    return (
      <div className="my-6 p-4 bg-gray-50 rounded-lg">
        <div className="relative w-full h-auto">
          <Image 
            src={src} 
            alt={alt || 'Mind Map'} 
            width={3214}
            height={4512}
            className="w-full h-auto rounded-lg"
            priority={false}
            quality={85}
          />
        </div>
      </div>
    );
  }

  if (data) {
    return (
      <div className="my-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
        <MindMapNode node={data} level={0} />
      </div>
    );
  }

  return null;
}

function MindMapNode({ node, level }: { node: MindMapNode; level: number }) {
  const marginLeft = level * 20;
  
  return (
    <div style={{ marginLeft: `${marginLeft}px` }} className="my-2">
      <div className={`p-3 rounded-lg font-semibold ${
        level === 0 ? 'bg-blue-600 text-white' :
        level === 1 ? 'bg-blue-400 text-white' :
        'bg-blue-100 text-blue-900'
      }`}>
        {node.label}
      </div>
      {node.children && (
        <div>
          {node.children.map((child) => (
            <MindMapNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
