import TabPanel from "./TabPanel";
import CompanyHeaders from "./CompanyHeaders";
import { Oracle } from "./Oracle";

export default function WorkExperience() {
  return (
    <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] flex items-center">
      <TabPanel headers={<CompanyHeaders />} content={Oracle} />
    </div>
  );
}
