export default function SectionTitle({
  kicker,
  title,
  accent,
}: {
  kicker?: string;
  title: string;
  accent?: string;
}) {
  return (
    <div data-reveal className="mb-12 text-center md:mb-16">
      {kicker && (
        <p className="text-sm uppercase tracking-[0.25em] text-accent">
          {kicker}
        </p>
      )}
      <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
        {accent && (
          <>
            {" "}
            <span className="text-gradient">{accent}</span>
          </>
        )}
      </h2>
    </div>
  );
}
