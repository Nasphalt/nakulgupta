import "./MainHeader.css";
import HeaderInfo from "./HeaderInfo";
import NavigationMenu from "./NavigationMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

export default function MainHeader() {
  return (
    <header className="p-4 header-shadow bg-black min-h-[100vh] [@media(min-height:500px)]:min-h-[75vh] [@media(min-height:750px)]:min-h-[50vh] flex flex-col justify-center relative w-full">
      <a
        href="/Nakul_Gupta_Resume.pdf"
        download
        className="absolute top-8 right-8 bg-gray-200 text-black px-4 py-2 rounded-lg shadow-[2px_2px_5px_rgba(150,150,150,255)] font-semibold hover:bg-white transition-colors"
      >
        <FontAwesomeIcon icon={faFileDownload} /> Resume
      </a>

      <HeaderInfo />
      <NavigationMenu />
    </header>
  );
}

<FontAwesomeIcon icon="fa-solid fa-file-arrow-down" />;
