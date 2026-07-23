interface MarqueeProps {
  text: string;
  className?: string;
}

export default function Marquee({ text, className = "" }: MarqueeProps) {
  // Reference pattern: "about<span>.</span> about<span>.</span> ..."
  const unit = (
    <>
      {text}
      <span style={{ opacity: 0.3, margin: "0 12px" }}>.</span>
    </>
  );

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-block animate-marquee">
        {unit}
        {unit}
        {unit}
        {unit}
        {unit}
        {unit}
        {unit}
        {unit}
      </div>
    </div>
  );
}
