export default function CompanyHeaders({ activeTab, setActiveTab, setCurr }) {
  const data = [
    {
      label: "ORACLE",
      id: 0,
      image: "./oracle.png",
    },
    {
      label: "OCEANEERING",
      id: 1,
      image: "./oceaneering.png",
    },

    {
      label: "KONY",
      id: 2,
      image: "./kony.png",
    },
  ];

  return (
    <ul className="flex w-full justify-evenly mb-8">
      {data.map(({ id, label, image }) => (
        <li
          key={id}
          value={id}
          className="w-[25%] flex items-center justify-center"
        >
          <a
            className="flex items-center h-12 w-full text-center justify-center"
            onClick={() => {
              setActiveTab(id);
              if (id !== activeTab) {
                setCurr(0);
              }
            }}
          >
            <img
              src={image}
              alt={label}
              className={`h-full w-full object-scale-down ${
                activeTab === id
                  ? "opacity-100 drop-shadow-lg drop-shadow-[#FFA500]/75"
                  : "opacity-40"
              }`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
