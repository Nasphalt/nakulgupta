export default function ContentSection({ heading, content, styling }) {
  return (
    <section
      className={`flex flex-col items-center justify-center p-8 min-h-[100vh] [@media(min-height:500px)]:min-h-[75vh] [@media(min-height:750px)]:min-h-[50vh] w-full ${styling}`}
    >
      <h2 className="text-xl font-bold mb-4">{heading}</h2>
      {content}
    </section>
  );
}
