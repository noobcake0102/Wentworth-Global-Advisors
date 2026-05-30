import { CheckCircle, XCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: string;
  options: string[];
  selectedIndex: number | null;
  correctIndex: number;
  explanation: string;
  onSelect: (index: number) => void;
  submitted: boolean;
  number: number;
}

export function QuizQuestion({
  question, options, selectedIndex, correctIndex, explanation,
  onSelect, submitted, number,
}: QuizQuestionProps) {
  return (
    <div className="mb-8">
      <p className="font-sans text-sm text-muted mb-1">Question {number}</p>
      <p className="text-ink text-base leading-relaxed mb-4">{question}</p>
      <div className="space-y-2.5">
        {options.map((opt, i) => {
          let cls = 'border border-border-gold bg-card/50 hover:border-border-hover';
          if (submitted) {
            if (i === correctIndex) cls = 'border-success/50 bg-success/5';
            else if (i === selectedIndex) cls = 'border-danger/50 bg-danger/5';
          } else if (selectedIndex === i) {
            cls = 'border-gold/50 bg-gold/5';
          }
          return (
            <button
              key={i}
              onClick={() => !submitted && onSelect(i)}
              disabled={submitted}
              className={`w-full text-left px-4 py-3.5 rounded-md transition-all duration-200 flex items-center gap-3 group ${cls} disabled:cursor-default`}
            >
              <span className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center text-xs font-medium transition-all
                ${submitted && i === correctIndex ? 'border-success text-success' :
                  submitted && i === selectedIndex ? 'border-danger text-danger' :
                  selectedIndex === i ? 'border-gold text-gold' : 'border-white/20 text-muted group-hover:border-gold/40'}`}>
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-sm text-ink">{opt}</span>
              {submitted && i === correctIndex && <CheckCircle className="w-4 h-4 text-success ml-auto flex-shrink-0" />}
              {submitted && i === selectedIndex && i !== correctIndex && <XCircle className="w-4 h-4 text-danger ml-auto flex-shrink-0" />}
            </button>
          );
        })}
      </div>
      {submitted && (
        <div className="mt-3 p-4 rounded-md bg-white/3 border border-white/8">
          <p className="text-xs font-sans font-medium tracking-widest uppercase text-muted mb-1.5">Explanation</p>
          <p className="text-sm text-muted leading-relaxed">{explanation}</p>
        </div>
      )}
    </div>
  );
}
