import { Info, Lightbulb, AlertTriangle, BookOpen } from 'lucide-react';

interface CalloutProps {
  variant: 'info' | 'tip' | 'warning' | 'example';
  title?: string;
  text: string;
}

export function Callout({ variant, title, text }: CalloutProps) {
  const config = {
    info:    { icon: Info,          cls: 'border-gold/30 bg-gold/5',       iconCls: 'text-gold',    label: 'Key Insight' },
    tip:     { icon: Lightbulb,     cls: 'border-success/30 bg-success/5', iconCls: 'text-success', label: 'Practitioner Tip' },
    warning: { icon: AlertTriangle, cls: 'border-warning/30 bg-warning/5', iconCls: 'text-warning', label: 'Watch Out' },
    example: { icon: BookOpen,      cls: 'border-white/15 bg-white/3',     iconCls: 'text-muted',   label: 'Example' },
  };
  const { icon: Icon, cls, iconCls, label } = config[variant];
  return (
    <div className={`rounded-md border p-5 my-4 ${cls}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${iconCls}`} />
        <div>
          {(title || label) && (
            <p className={`text-xs font-sans font-medium tracking-widest uppercase mb-1.5 ${iconCls}`}>
              {title || label}
            </p>
          )}
          <p className="text-muted text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}
