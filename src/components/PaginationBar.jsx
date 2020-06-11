import React from "react";

function Loader() {
  return (
    <svg
      height="25px"
      version="1.1"
      id="L4"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 0 0"
      className="fill-current text-black flex items-center justify-center"
    >
      <circle stroke="none" cx="21" cy="50" r="8">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle stroke="none" cx="51" cy="50" r="8">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle stroke="none" cx="81" cy="50" r="8">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  );
}
function PaginationBar({ currentPage, pageCount, gotoPage, typeLoading }) {
  const isNextButtonDisabled =
    currentPage === pageCount || typeLoading === "next";
  const isPrevButtonDisabled =
    currentPage === 1 || pageCount === currentPage || typeLoading === "prev";

  return (
    <div className="flex justify-between items-center shadow rounded p-3 bottom-0 left-0 bg-white w-full mt-5 ">
      <div>
        Page <span className="font-bold">{currentPage} </span>
        of <span className="font-bold">{pageCount}</span>
      </div>
      <div>
        <div className="rounded shadow border flex items-center">
          <button
            disabled={isPrevButtonDisabled}
            onClick={() => gotoPage(Math.max(currentPage - 1, 1), "prev")}
            className="p-1 px-3 border-r disabled:text-gray-600"
          >
            {(typeLoading === "prev" && <Loader />) || "Prev"}
          </button>
          <button
            disabled={isNextButtonDisabled}
            className="p-1 px-3 disabled:text-gray-600"
            onClick={() => gotoPage(currentPage + 1, "next")}
          >
            {(typeLoading === "next" && <Loader />) || "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaginationBar;
