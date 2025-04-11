import Link from "next/link";
export const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-violet-600 to-purple-500 dark:bg-gradient-to-r dark:from-violet-950 dark:to-purple-950 rounded-lg shadow-sm m-2 md:m-4 mt-auto md:mt-auto">
      <div className="w-full mx-auto max-w-screen-xl py-4 flex items-center justify-between">
        <span className="text-[12px] md:text-[15px] text-gray-100 sm:text-center dark:text-gray-200 ml-1">
          © 2023{" "}
          <Link href="#" className="hover:underline">
            Dreamdrive™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-100 dark:text-gray-200">
          <li>
            <a
              href="#"
              className="hover:underline me-4 md:me-6 text-[12px] md:text-base"
            >
              Code Link
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
