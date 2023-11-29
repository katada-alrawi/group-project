import React from 'react';
import { Link, useParams } from 'react-router-dom';
import hero7 from '../assets/hero7.jpg';

export default function SingleLeague({ info }) {
  const { id } = useParams();
  const leagueInfo = info?.find((league) => league.idLeague === id);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img src={hero7} alt="Hero Image" className="w-full h-screen md:h-auto object-cover" />
      </div>
      <div className="md:w-1/2 p-8">
        <div className="mb-8">
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link to="/sports" className="text-blue-500 hover:underline">
            Sports
          </Link>
        </div>
        <div>
  <h2 className="text-3xl font-semibold mb-4 text-white">{leagueInfo?.strLeague}</h2>
  <p className="text-white">{leagueInfo?.strDescriptionEN}</p>
  {leagueInfo ? (
    <pre className="text-white">{JSON.stringify(leagueInfo, null, 2)}</pre>
  ) : (
    <p className="text-white">League information not found.</p>
  )}
</div>

      </div>
    </div>
  );
}










