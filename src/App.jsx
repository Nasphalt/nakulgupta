import "./App.css";
import MainHeader from "./Components/Header/MainHeader";
import ContentSection from "./Components/Sections/ContentSection";
import AboutMe from "./Components/Sections/AboutMe";
import WorkExperience from "./Components/Sections/WorkExperience/WorkExperience";
import SkillsOverview from "./Components/Sections/Skills/SkillsOverview";
import LandscapeOnly from "./Components/LandscapeOnly";

function App() {
  return (
    <div className="relative">
      <div className="landscape-warning hidden fixed inset-0 bg-black text-white items-center justify-center z-[9999]">
        <p className="text-xl font-bold">
          Please rotate your device to landscape mode.
        </p>
      </div>
      <div>
        <MainHeader />
        <ContentSection heading="About Me" content={<AboutMe />} styling="" />
        <ContentSection
          heading="Work Experience"
          content={<WorkExperience />}
          styling="bg-neutral-950"
        />
        <ContentSection
          heading="Primary Skills"
          content={<SkillsOverview />}
          styling=""
        />
      </div>
    </div>
  );
}

export default App;
