'use client';

interface NoteCardProps {
  title: string;
  content: string;
  type?: 'info' | 'warning' | 'important' | 'tip';
}

export default function NoteCard({ title, content, type = 'info' }: NoteCardProps) {
  const styles = {
    info: 'bg-blue-50 border-blue-300 text-blue-900 from-blue-50 to-cyan-50',
    warning: 'bg-yellow-50 border-yellow-300 text-yellow-900 from-yellow-50 to-orange-50',
    important: 'bg-red-50 border-red-300 text-red-900 from-red-50 to-pink-50',
    tip: 'bg-green-50 border-green-300 text-green-900 from-green-50 to-emerald-50',
  };
  
  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    important: '❗',
    tip: '💡',
  };
  
  const contentLines = content.split('\n');

  return (
    <div className={`my-6 p-5 border-l-4 rounded-lg shadow-md bg-gradient-to-r ${styles[type]}`}>
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl flex-shrink-0 mt-0.5">{icons[type]}</span>
        <h5 className="font-bold text-lg leading-snug flex-1">{title}</h5>
      </div>
      <div className="ml-10 space-y-2">
        {contentLines.map((line, idx) => (
          <p key={idx} className="text-sm font-semibold text-gray-900 leading-relaxed whitespace-pre-wrap">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
