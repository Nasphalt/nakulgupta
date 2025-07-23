export default function MenuItem({ title, href }) {
  return (
    <li className="w-[20%] text-center">
      <div className="text-white hover:font-bold w-full">
        <a href={href}>{title}</a>
      </div>
    </li>
  );
}
