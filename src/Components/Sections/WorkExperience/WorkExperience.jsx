import { useState } from "react";
import TabPanel from "./TabPanel";
import CompanyHeaders from "./CompanyHeaders";
import { Oracle } from "./Oracle";
import { Oceaneering } from "./Oceaneering";
import { Kony } from "./Kony";

export default function WorkExperience() {
  const [activeTab, setActiveTab] = useState(0);
  const data = [Oracle, Oceaneering, Kony];

  return (
    <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] flex items-center">
      <TabPanel
        headers={
          <CompanyHeaders activeTab={activeTab} setActiveTab={setActiveTab} />
        }
        content={data[activeTab]}
      />
    </div>
  );
}
