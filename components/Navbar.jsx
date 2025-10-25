import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={"/logo.jpg"} alt="logo" width={50} height={50} />
          <span className="text-2xl font-bold text-gray-800">
            Travel Planner
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="text-slate-900 hover:text-sky-500">
            My Trips
          </Link>
          <Link href={"/"} className="text-slate-900 hover:text-sky-500">
            Globe
          </Link>
          <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white rounded-2xl px-3 py-2">
            Sign In
            <svg
              className='ml-2'
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
