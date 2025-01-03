import icon from "../../public/icon.png";
import { IoSearch } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { setQuery } from "../features/filter/filterSlice";

import { useDispatch } from "react-redux";
import {
  useGetUser,
  useIsAuthenticated,
  useLogin,
  useLogout,
} from "../features/auth/auth";
import { debounce } from "lodash";

function Navbar() {
  const dispatch = useDispatch();
  const isAuthencated = useIsAuthenticated();
  const login = useLogin();
  const logout = useLogout();
  const user = useGetUser();
  const handleQueryChange = debounce((value) => {
    dispatch(setQuery(value));
  }, 500);
  return (
    <div className="min-h-[4.5rem] w-full bg-[#FF742B] flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <img src={icon} alt="icon" className="h-[3rem]" />
        <div className="flex flex-col items-start justify-start ">
          <p className="text-xl leading-tight text-gray-900">Search </p>
          <p className="-mt-1 text-xl leading-tight text-gray-900">
            Hacker News{" "}
          </p>
        </div>
      </div>

      <form
        className="flex-grow max-w-xl mx-4 "
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex items-center bg-white rounded-sm">
          <IoSearch className="text-3xl text-[#FF742B] pl-1" />
          <input
            type="text"
            className="flex-grow py-2 pl-2 bg-white outline-none"
            placeholder="Search stories by title, url or author"
            onChange={(e) => {
              handleQueryChange(e.target.value);
            }}
          />
          <button type="submit"></button>
        </div>
      </form>
      <div className="flex items-center gap-2">
        {isAuthencated ? (
          <button
            onClick={() => {
              logout({ logoutParams: { returnTo: window.location.origin } });
            }}
          >
            <img
              src={user.picture}
              alt={user.name}
              className="rounded-full h-7"
            />
          </button>
        ) : (
          <button
            onClick={() => {
              login();
            }}
          >
            <RxAvatar className="text-2xl" />
          </button>
        )}
        <IoSettingsOutline className="text-2xl text-black" />
      </div>
    </div>
  );
}

export default Navbar;
