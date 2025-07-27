import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

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
            className="flex flex-col bg-neutral-800 p-4 shadow-[2px_2px_5px_rgba(0,0,0,255)]"
          >
            <div className="flex w-full items-center justify-between m-0 p-0">
              <h4 className="text-white font-semibold text-left">
                {project.name}
              </h4>
              <div className="relative group">
                <button
                  onClick={() => alert(project.name)}
                  aria-label={`More info about ${project.name}`}
                  className="p-1 shadow text-white/80 hover:text-white"
                >
                  <FontAwesomeIcon icon={faCircleInfo} />
                </button>
                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 border-2 border-neutral-950
                     whitespace-nowrap bg-neutral-950 text-white text-xs px-2 py-1 rounded-md opacity-0 shadow-[2px_2px_5px_rgba(0,0,0,255)]
                     group-hover:opacity-100 transition-opacity"
                >
                  More info...
                </span>
              </div>
            </div>
            <p className="text-gray-200 text-sm pt-4 text-left">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
