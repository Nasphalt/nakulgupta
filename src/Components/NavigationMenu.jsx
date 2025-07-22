import MenuItem from "./MenuItem";

export default function NavigationMenu() {
  return (
    <nav className="absolute bottom-4 left-0 w-full flex justify-center">
      <ul className="flex gap-8 w-full justify-center">
        <MenuItem title="About" href="#about" />
        <MenuItem title="Projects" href="#projects" />
        <MenuItem title="Contact" href="#contact" />
      </ul>
    </nav>
  );
}
