export default function LandscapeOnly() {
  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-[9999]">
      <p className="text-center text-lg font-bold p-4">
        Please rotate your device to landscape mode.
      </p>
    </div>
  );
}
