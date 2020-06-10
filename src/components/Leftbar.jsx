import React from "react";
import CircularSpinner from "./CircularSpinner";
import Filter from "./Filter";

function Leftbar({
  open,
  isLoadingFilters,
  filters,
  selectedFilterId,
  fetchWithFilter,
  isLoadingFilteredData,
}) {
  return (
    <aside
      style={{ display: open ? "block" : "none" }}
      className={`absolute left-0 sm:static w-full sm:w-1/3 md:w-1/4 border-r  h-screen overflow-auto no-scroll shadow bg-white`}
    >
      {isLoadingFilters && (
        <div className="h-full flex justify-center items-center">
          <CircularSpinner />
        </div>
      )}
      {!isLoadingFilters && (
        <div>
          {filters.map((filter) => (
            <Filter
              key={filter.id}
              filter={filter}
              loading={selectedFilterId === filter.id && isLoadingFilteredData}
              clickHandler={fetchWithFilter}
              selected={selectedFilterId === filter.id}
            />
          ))}
        </div>
      )}
    </aside>
  );
}

export default Leftbar;
