import "./App.css";
import MainHeader from "./Components/MainHeader";
import ContentSection from "./Components/ContentSection";
import AboutMe from "./Components/AboutMe";
import WorkExperience from "./Components/WorkExperience";

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
