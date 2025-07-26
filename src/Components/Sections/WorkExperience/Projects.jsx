export default function Projects({ description, projects }) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">Projects</h2>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-6 mt-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-neutral-800 p-4 shadow-[2px_2px_5px_rgba(0,0,0,255)]"
          >
            <h3 className="text-white text-lg">{project.name}</h3>
            <p className="text-gray-200 text-md pt-4">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
