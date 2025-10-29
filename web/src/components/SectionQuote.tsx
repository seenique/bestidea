"use client";

type QuoteProps = {
  text: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotation?: number;
  delay?: string;
};

export default function SectionQuote({ text, top, left, right, bottom, rotation = 0, delay = "0s" }: QuoteProps) {
  return (
    <div
      className="absolute pointer-events-none z-50"
      style={{
        top,
        left,
        right,
        bottom,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div
        className="flex items-start gap-2 animate-shimmer"
        style={{ animationDelay: delay }}
      >
        {/* Opening quote mark - large and prominent */}
        <span className="text-slate-700 text-4xl md:text-5xl lg:text-6xl font-serif leading-none select-none drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
          "
        </span>
        {/* Quote text */}
        <div className="text-xs md:text-sm font-semibold text-slate-900 max-w-[160px] md:max-w-[200px] leading-snug pt-1 drop-shadow-sm">
          {text}
        </div>
      </div>
    </div>
  );
}


