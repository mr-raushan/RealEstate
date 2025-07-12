import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="px-4 shadow-md bg-slate-200">
      <div className="container h-16 mx-auto flex items-center justify-between">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer font-bold text-sm sm:text-xl flex flex-wrap sm:flex-nowrap"
        >
          <span className="text-slate-500">Real</span>{" "}
          <span className="text-slate-700">Estate</span>{" "}
        </h1>
        <form className="w-full flex items-center justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="p-1 pr-8 border border-gray-500 pl-2 rounded-md focus:outline-none bg-slate-100 w-24 sm:w-80"
            />
            <FaSearch
              size={18}
              className="text-slate-600 cursor-pointer absolute right-2 top-1.5"
            />
          </div>
        </form>

        <div>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                to={"/"}
                className="hidden sm:inline text-slate-700 hover:underline transition-all duration-200 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="hidden sm:inline text-slate-700 hover:underline transition-all duration-200 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/sign-in"}
                className="text-slate-700 hover:underline transition-all duration-200 ease-in-out"
              >
                SignIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
