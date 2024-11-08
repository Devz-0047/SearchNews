import icon from "../../public/icon.png";
import { IoSearch } from "react-icons/io5";
function Navbar() {
  return (
    <div className="min-h-[3.5rem] min-w-[12rem] bg-[#FF742B]">
      <img src={icon} className="h-[3rem]" />
      <p className="text-xl text-gray-900">Search Hacker News</p>
      <form className="bg-white">
        <input type="text">
          <div>
            <IoSearch />
          </div>
        </input>
      </form>
    </div>
  );
}

export default Navbar;
