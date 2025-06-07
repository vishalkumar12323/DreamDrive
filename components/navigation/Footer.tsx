import Link from "next/link";
export const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90 border-b border-white/10 backdrop-blur-sm sticky top-0 z-50  shadow-sm mt-auto md:mt-auto">
      <div className="w-full py-4 px-8 flex items-center justify-between">
        <span className="text-[12px] md:text-[15px] text-gray-100 sm:text-center dark:text-gray-200 ml-1">
          © 2023{" "}
          <Link href="#" className="hover:underline">
            Dreamdrive™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-100 dark:text-gray-200">
          <li className="bg-white/10 hover:bg-white/20 transition-colors px-4 py-1 rounded-md">
            <Link
              href="https://github.com/vishalkumar12323/DreamDrive"
              className="text-[12px] md:text-base"
            >
              Source Code
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
