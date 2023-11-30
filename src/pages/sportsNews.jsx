import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function SportsNews({ info }) {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = info.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(info.length / itemsPerPage);
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-5">
        {currentItems.map((league) => (
          <Link key={league.idLeague} to={`/single-league/${league.idLeague}`}>
            <div className="bg-slate-500 p-6 rounded-lg shadow-md text-white h-60">
              <h2 className="text-xl font-semibold mb-2">{league.strLeague}</h2>
              <p>{league.strLeagueAlternate}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}