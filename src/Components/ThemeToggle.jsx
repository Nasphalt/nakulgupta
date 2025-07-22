export default function ThemeToggle() {
  return (
    <div className="flex gap-2 items-center p-2">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
}
