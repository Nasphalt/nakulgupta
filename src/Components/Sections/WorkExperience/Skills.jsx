export default function Skills({ description, skillSet }) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">Technical Skills</h2>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      {skillSet.map((skillGroup, index) => (
        <div key={index} className="mt-4">
          <h3 className="font-bold mb-2 text-gray-300">{skillGroup.type}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-6">
            {skillGroup.skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  title={skill.name}
                  className={`h-12 w-12 object-contain ${skill.styling}`}
                />
                <p className="text-white text-sm mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
