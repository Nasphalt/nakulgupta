export default function KeyResponsibilities({
  heading,
  description,
  responsibilities,
}) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">{heading}</h2>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-6 mt-4">
        {responsibilities.map((responsibility, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-neutral-800 p-4 rounded-md shadow-[2px_2px_5px_rgba(0,0,0,255)]"
          >
            <p className="text-white text-sm">{responsibility}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
