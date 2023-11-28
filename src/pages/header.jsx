import React from "react";

export default function Header() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center  mx-8">
        <h1 className="flex items-center justify-center text-center px-2 text-3xl font-bold lg:text-5xl text-white">
          Welcome to world of Sports
        </h1>
        <p className="my-2 text-white">This page is powered by </p>
        <a
          href="https://www.thesportsdb.com/api.php"
          target="blank"
          className=" text-indigo-600 underline active:text-orange-600"
        >
          The Sportsdb.com
        </a>
      </div>
    </>
  );
}
