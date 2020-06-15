import React from "react";

function Header({ setLeftBarIsOpened }) {
  const toggleLeftBar = () => setLeftBarIsOpened((state) => !state);

  return (
    <div className="bg-black w-full h-10 px-5 flex items-center fixed top-0">
      <button
        className="bg-gray-600 p-1 rounded bg-opacity-50"
        onClick={toggleLeftBar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-current text-white"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      </button>
    </div>
  );
}

export default Header;
