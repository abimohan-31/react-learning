import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className=" flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img
          className="size-25 shrink-0"
          src="https://cdn-icons-png.flaticon.com/256/7603/7603333.png"
          alt="ChitChat Logo"
        />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            <Link to={"/about"}>About Us </Link>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Here's the about page.
          </p>
        </div>
      </div>

      <div className=" flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img
          className="size-25 shrink-0"
          src="https://cdn-icons-png.flaticon.com/256/7603/7603333.png"
          alt="ChitChat Logo"
        />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            <Link to={"/contact"}>Contact Us </Link>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Here's the Contact page.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
