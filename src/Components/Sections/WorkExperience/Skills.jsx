export default function Skills({ heading, description }) {
  const skillSet = [
    {
      type: "Front-End Skills",
      skills: [
        { name: "JavaScript", icon: "/JavaScript.svg", styling: "" },
        { name: "TypeScript", icon: "/TypeScript.svg", styling: "" },
        { name: "HTML", icon: "/HTML.svg", styling: "p-1 bg-white" },
        { name: "CSS", icon: "/CSS.svg", styling: "" },
        {
          name: "Tailwind CSS",
          icon: "/TailwindCSS.svg",
          styling: "",
        },
        { name: "ReactJS", icon: "/ReactJS.svg", styling: "" },
      ],
    },
    {
      type: "Back-End Skills",
      skills: [
        { name: "SQL", icon: "/SQL.svg", styling: "p-1 bg-white" },
        { name: "Oracle SQL", icon: "/OracleSQL.svg", styling: "p-1 bg-white" },
        { name: "Node.js", icon: "/NodeJS.svg", styling: "p-1 bg-white" },
      ],
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">{heading}</h2>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
      </div>
      {skillSet.map((skillGroup, index) => (
        <div key={index}>
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
