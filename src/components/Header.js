import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";
import { FaUserCircle } from "react-icons/fa"; // Importing user icon

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.gptSearchView);
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      {/* Logo */}
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2 items-center">
          {showGptSearch && (
            <select
              className="px-3 py-2 my-4 mx-2 bg-gray-900 text-white rounded-lg"
              onClick={handleLangChange}
            >
              {SUPPORTED_LANGUAGE.map((language) => (
                <option key={language.name} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 text-white px-4 py-2 mx-2 my-4 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          {/* Profile & Sign Out on Larger Screens */}
          <img
            className="w-12 h-12 m-1 cursor-pointer hidden md:inline-block"
            alt="user profile"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="hidden md:inline-block font-bold text-white"
          >
            Sign Out
          </button>

          {/* Mobile: Profile Icon with Dropdown */}
          <div className="relative md:hidden">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              <FaUserCircle size={30} className="text-white" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <ul>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
