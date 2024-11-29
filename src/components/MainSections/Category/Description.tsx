export default function Description({
  description,
  disc_bg,
}: {
  description: string;
  disc_bg: string;
}) {
  return (
    <section
      className="flex justify-center items-center"
      style={{ backgroundImage: `url(${disc_bg})` }}
      role="region"
      aria-label="Category Description"
    >
      <article 
        className="w-4/5 p-16 text-white text-base md:text-lg lg:text-3xl font-normal font-['Jost'] leading-[21px] md:leading-[26px] lg:leading-[55px] tracking-wide"
      >
        <p>{description}</p>
      </article>
    </section>
  );
}
