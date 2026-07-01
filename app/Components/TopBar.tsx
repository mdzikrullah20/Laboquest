export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <p>📞 +91 98765 43210</p>

        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-yellow-400">
            Facebook
          </a>
          <a href="#" className="hover:text-yellow-400">
            Twitter
          </a>
          <a href="#" className="hover:text-yellow-400">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}