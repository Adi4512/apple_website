import { appleImg, bagImg, searchImg } from "../utils";

function Navbar() {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="apple-logo" width={14} height={18} />

        <div className="">
          {["Phones", "Macbooks", "Accessories"].map((i) => (
            <div key={i}>{i}</div>
          ))}
        </div>

        <div>
          <img src={searchImg} alt="search-logo" width={18} height={18} />
          <img src={bagImg} alt="bag-logo" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
