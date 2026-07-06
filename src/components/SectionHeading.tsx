interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-5 ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="font-mono text-low text-uppercase small d-block mb-2" style={{ letterSpacing: "0.15em" }}>
          {eyebrow}
        </span>
      )}
      <h2 className="font-display fw-bold display-6">{title}</h2>
      {subtitle && (
        <p className="text-mid mt-2 mb-0" style={{ maxWidth: 640, marginInline: align === "center" ? "auto" : undefined }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}