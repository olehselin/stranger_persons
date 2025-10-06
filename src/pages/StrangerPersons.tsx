import { useQuery } from "@tanstack/react-query";
import { createStrangerPersonsQueryOptions } from "@/api/queryOptions/createStrangerPersonsQueryOptions";
import { Input } from "@/shared/components/ui/input";
import { useState } from "react";
import createStrangerPersonsByNameQueryOptions from "@/api/queryOptions/createStrangerPersonsQueryByNameOptions";
import type { GetStrangerOptions } from "@/types/GetStrangerOptions";

import useDebounce from "@/hooks/useDebounce";
import { Card } from "@/shared/components/ui/card";
import ViewAllPersons from "@/components/ViewAllPersons";

const StrangerPersons = () => {
  const [search, setSearch] = useState("");
  const [showMainPersons, setShowMainPersons] = useState(false);
  const debounceSearch = useDebounce(search);

  const {
    data: person = [],
    isLoading,
    isSuccess,
    isRefetching,
  } = useQuery(createStrangerPersonsByNameQueryOptions(debounceSearch));

  const { data: allPersons } = useQuery(createStrangerPersonsQueryOptions());
  console.log("AllPersons: ", allPersons);

  return (
    <>
      <h1 className="border border-red-400">Stranger Persons</h1>

      <div className="flex row-auto">
        <div className="border border-red-400 mr-5">
          <Input
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
            placeholder="Find person by name"
          />

          {isLoading || isRefetching ? (
            <div>Loading...</div>
          ) : (
            debounceSearch.length > 0 &&
            person.length == 0 && (
              <div>Not Found Any Person. Try to write correct name.</div>
            )
          )}

          {search.length === 0 && <div>Not typing anything.</div>}

          {isSuccess &&
            person.map((p: GetStrangerOptions) => (
              <Card className="p-5" key={p._id}>
                <div className="flex flex-col">
                  <div>
                    Photo: <img src={p.photo} />
                  </div>
                  <div>Name: {p.name}</div>
                  <div>Born: {p.born}</div>
                  <div>Gender: {p.gender}</div>
                  <div>Status: {p.status}</div>
                </div>
              </Card>
            ))}
        </div>

        <div className="border border-red-400 ml-5">
          {
            <button onClick={() => setShowMainPersons((prev) => !prev)}>
              {showMainPersons ? "Hide" : "Show"} Main Persons
            </button>
          }
          <ViewAllPersons
            showMainPersons={showMainPersons}
            allPersons={allPersons}
          />
        </div>
      </div>
    </>
  );
};

export default StrangerPersons;
