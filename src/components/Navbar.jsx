import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
function Navbar() {
  return (
    <header className=" w-full flex justify-between sm:px-10 px-5 py-5 items-center">
      <nav className="flex w-full screen-max-width ">
        <img
          className="cursor-pointer hover:scale-110 duration-300"
          src={appleImg}
          alt="apple-logo"
          width={18}
          height={18}
        />

        <div className="  flex flex-1 justify-center max-sm:hidden">
          {navLists.map((i) => (
            <div
              className=" cursor-pointer px-5 text-gray font-semibold hover:text-white hover:scale-110 transition-all duration-300"
              key={i}
            >
              {i}
            </div>
          ))}
        </div>

        <div className="flex gap-7 max-sm:justify-end items-baseline max-sm:flex-1">
          <img
            className="cursor-pointer  hover:scale-110 duration-200"
            src={searchImg}
            alt="search-logo"
            width={18}
            height={18}
          />
          <img
            className="cursor-pointer hover:scale-110 duration-200"
            src={bagImg}
            alt="bag-logo"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
