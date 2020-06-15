import React, { useEffect, useState } from "react";
import { fetchUsers, fetchFilters } from "./utils/services";
import Header from "./components/Header";
import Leftbar from "./components/Leftbar";
import MainArea from "./components/MainArea";

function App() {
  const [isLoadingFilters, setIsLoadingFilters] = useState(true);
  const [filters, setFilters] = useState([]);
  const [selectedFilterId, setSelectedFilterId] = useState(null);
  const [isInitiallyLoadingData, setIsInitiallyLoadingData] = useState(true);
  const [data, setData] = useState([]);
  const [isLoadingFilteredData, setIsLoadingFilteredData] = useState(false);
  const [leftBarIsOpened, setLeftBarIsOpened] = useState(true);
  const [typeLoading, setTypeLoading] = useState("");

  useEffect(() => {
    (async () => {
      const [filterResponse, dataResponse] = await Promise.all([
        fetchFilters(),
        fetchUsers(),
      ]);

      setFilters(filterResponse.data);

      setData(dataResponse.data);

      setIsLoadingFilters(false);

      setIsInitiallyLoadingData(false);
    })();
  }, [setIsLoadingFilters, setIsInitiallyLoadingData, setFilters, setData]);

  const fetchWithFilter = async (selectedFilterId) => {
    setSelectedFilterId(selectedFilterId);

    setIsLoadingFilteredData(true);

    const filter = filters.find((filter) => filter.id === selectedFilterId);

    const { data } = await fetchUsers(filter);

    setData(data);

    setIsLoadingFilteredData(false);
  };

  const fetchByPage = async (pageNumber, typeLoading) => {
    setTypeLoading(typeLoading);

    const filter = filters.find((filter) => filter.id === selectedFilterId);

    const { data } = await fetchUsers(filter, {
      currentPage: pageNumber,
    });

    setData(data);

    setTypeLoading("");
  };

  return (
    <div className="min-h-screen antialiased flex flex-col bg-gray-50">
      <Header setLeftBarIsOpened={setLeftBarIsOpened} />
      <div className="flex">
        <Leftbar
          open={leftBarIsOpened}
          isLoadingFilters={isLoadingFilters}
          filters={filters}
          selectedFilterId={selectedFilterId}
          fetchWithFilter={fetchWithFilter}
          isLoadingFilteredData={isLoadingFilteredData}
        />
        <MainArea
          data={data}
          isInitiallyLoadingData={isInitiallyLoadingData}
          fetchByPage={fetchByPage}
          typeLoading={typeLoading}
        />
      </div>
    </div>
  );
}

export default App;
