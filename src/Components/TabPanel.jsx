import { useState } from "react";
import CarouselCustom from "./CarouselCustom";
import Oracle from "./Oracle";

export function TabPanel() {
  const data = [
    {
      label: "ORACLE",
      id: 0,
      image: "/oracle.png",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it.`,
    },
    {
      label: "OCEANEERING",
      id: 1,
      image: "/oceaneering.png",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "KONY",
      id: 2,
      image: "/kony.png",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes.`,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mt-4 flex-col justify-center items-center text-center">
      <ul className="flex w-full justify-evenly mb-8">
        {data.map(({ id, label, image }) => (
          <li
            key={id}
            value={id}
            className="w-[25%] flex items-center justify-center"
          >
            <a
              className="flex items-center h-12 w-full text-center justify-center"
              onClick={() => setActiveTab(id)}
            >
              <img
                src={image}
                alt={label}
                className={`h-full w-full object-scale-down ${
                  activeTab === id ? "opacity-100" : "opacity-50"
                }`}
              />
            </a>
          </li>
        ))}
      </ul>
      <div className="w-full">
        <CarouselCustom autoSlide={false}>
          {[<Oracle />, <div>Object 2</div>, <div>Object 3</div>]}
        </CarouselCustom>
      </div>
    </div>
  );
}
