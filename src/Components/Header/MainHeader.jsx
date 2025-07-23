import "./MainHeader.css";
import HeaderInfo from "./HeaderInfo";
import NavigationMenu from "./NavigationMenu";

export default function MainHeader() {
  return (
    <header className="p-4 header-shadow bg-black min-h-[100vh] [@media(min-height:500px)]:min-h-[75vh] [@media(min-height:750px)]:min-h-[50vh] flex flex-col justify-center relative w-full">
      <HeaderInfo />
      <NavigationMenu />
    </header>
  );
}
