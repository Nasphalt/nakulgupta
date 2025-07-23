import "./App.css";
import MainHeader from "./Components/Header/MainHeader";
import ContentSection from "./Components/Sections/ContentSection";
import AboutMe from "./Components/Sections/AboutMe";
import WorkExperience from "./Components/Sections/WorkExperience/WorkExperience";

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
    </>
  );
}

export default App;
