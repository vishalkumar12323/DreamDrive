import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="mt-auto bg-white dark:bg-gray-900/70 rounded-lg shadow-sm m-4">
      <div className="w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="#" className="hover:underline">
            Dreamdrive™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Code Link
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
