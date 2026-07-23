interface MarqueeProps {
  text: string;
  className?: string;
}

// 一份内容重复多次，保证宽度足够覆盖视口（无缝循环的前提）
const REPEAT = 8;

export default function Marquee({ text, className = "" }: MarqueeProps) {
  const unit = (
    <span className="inline-flex items-center">
      {text}
      <span style={{ opacity: 0.3, margin: "0 12px" }}>.</span>
    </span>
  );

  const half = (
    <div className="flex shrink-0">
      {Array.from({ length: REPEAT }).map((_, i) => (
        <span key={i}>{unit}</span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      {/* 两份完全相同的 half，动画 translateX(-50%) 正好平移一份宽度 → 无缝循环，无空白/跳变 */}
      <div className="flex w-max animate-marquee">
        {half}
        <div aria-hidden="true" className="flex shrink-0">
          {Array.from({ length: REPEAT }).map((_, i) => (
            <span key={i}>{unit}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
