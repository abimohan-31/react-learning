import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="my-3 mx-2 flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            <Link to={"/about"}>About Us </Link>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Here's the about page.
          </p>
        </div>
      </div>
      <div className="my-3 mx-2 flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
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
