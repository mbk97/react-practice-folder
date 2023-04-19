import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loading from "./Loading";
import Card from "./Card";
import { useMemo } from "react";

const InfiniteScroll = () => {
  const fetchUsers = async (page) => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    );
    return data;
  };

  //   ** This hook takes the following parameters
  //* 1 * queryKey is an array of keys or nested objects which is used to manage cache storage
  //* 2 * queryFunc a function that returns a promise, the promise must be resolved or throw an error.
  //* 3 * within the options we need one called getNextPageParam which is a function that returns the information for the next query to the API.

  const { data, hasNextPage, error, fetchNextPage, status } = useInfiniteQuery(
    ["characters"],
    ({ pageParam = 1 }) => fetchUsers(pageParam),
    // ** receives two parameters but we will only use the first one that is the last page received (that is to say the last answer that the API gave us) **//
    {
      getNextPageParam: (lastPage) => {
        const previousPage = lastPage.info.prev
          ? +lastPage.info.prev.split("=")[1]
          : 0;
        const currentPage = previousPage + 1;

        if (currentPage === lastPage.info.pages) return false;
        return currentPage + 1;
      },
    },
  );

  console.log(data?.pages[0]?.results, "Data here");

  const characters = useMemo(
    () =>
      data?.pages.reduce((prev, page) => {
        return {
          info: page.info,
          results: [...prev.results, ...page.results],
        };
      }),
    [data],
  );

  console.log(characters, "Hello");

  if (status === "error") return <h3>Something went wrong...</h3>;
  return (
    <div>
      <h1 className="h-[45px] p-[20px] text-center text-[32px]">
        Infinite scroll
      </h1>

      {status === "loading" && <Loading />}
      {error && <h3>{error}</h3>}
      <InfiniteScroll
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Loading />}
        dataLength={characters ? characters.results.length : 0}
      >
        <div className="mt-[50px] flex flex-wrap gap-[10px]">
          {data?.pages[0].results?.map((character) => {
            return <Card key={character.id} character={character} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScroll;
