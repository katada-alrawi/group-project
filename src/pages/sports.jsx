import React, { useEffect, useState } from "react";
import SportsNews from "./sportsNews";
import Hero from "./hero"
export default function Sports() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
        );
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        setInfo(data.leagues);
        console.log(info)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="h-full bg-slate-800">
        <Hero />
        <SportsNews info={info} />
      </div>
    </>
  );
}