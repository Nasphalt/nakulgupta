export default function CircularImage({ src, alt }) {
  return (
    <div className="w-40 h-40 rounded-full overflow-hidden flex items-center justify-center">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
