import "./App.css";
import MainHeader from "./Components/Header/MainHeader";
import ContentSection from "./Components/Sections/ContentSection";
import AboutMe from "./Components/Sections/AboutMe";
import WorkExperience from "./Components/Sections/WorkExperience/WorkExperience";
import SkillsOverview from "./Components/Sections/Skills/SkillsOverview";

function App() {
  return (
    <>
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
      <ContentSection
        heading="Education"
        content={<div> </div>}
        styling="bg-neutral-950"
      />
    </>
  );
}

export default App;
