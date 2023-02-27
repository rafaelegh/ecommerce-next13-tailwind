"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [keyword, setKeyword] = React.useState("");

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      router.push(`/?keyword=${keyword}`);
    } else {
      router.push("/");
    }
  };

  return (
    <form 
      onSubmit={submitHandler}
      className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4"
    >
      <input
        className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
        type="text"
        placeholder="Enter your keyword"
        onChange={(e) => setKeyword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="px-4 py-2 inline-block text-white border border-transparent bg-red1 rounded-md hover:bg-red-500"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
