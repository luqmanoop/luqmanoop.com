export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-4 text-xs">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Luqman Olushi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

