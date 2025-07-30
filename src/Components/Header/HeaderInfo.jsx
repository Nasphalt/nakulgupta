import CircularImage from "./CircularImage";

export default function HeaderInfo() {
  return (
    <div className="flex flex-col items-center text-center">
      <CircularImage src="./profile.png" alt="Profile picture of Nakul Gupta" />
      <h1 className="text-2xl font-bold mt-8">Nakul Gupta</h1>
      <h2 className="text-sm mt-4">Technical Lead | Front-End Developer</h2>
    </div>
  );
}
