import icon from "../../public/icon.png";
import { IoSearch } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="min-h-[3.5rem] w-full bg-[#FF742B] flex items-center justify-evenly px-4">
      <div className="flex items-center gap-2">
        <img src={icon} alt="icon" className="h-[3rem]" />
        <div className="flex flex-col items-start justify-center">
          <p className="text-xl text-gray-900">Search </p>
          <p className="text-xl text-gray-900">Hacker News </p>
        </div>
      </div>

      <form className="flex-grow max-w-xl mx-4 ">
        <div className="flex items-center bg-white rounded-sm">
          <IoSearch className="text-3xl text-[#FF742B] pl-1" />
          <input
            type="text"
            className="flex-grow py-2 pl-2 bg-white outline-none"
            placeholder="Search stories by title, url or author"
          />
        </div>
      </form>
      <IoSettingsOutline className="text-2xl text-black" />
    </div>
  );
}

export default Navbar;
