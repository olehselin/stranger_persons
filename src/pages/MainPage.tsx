import { useQuery } from "@tanstack/react-query";
import { createStrangersQueryOptions } from "@/api/queryOptions/createPersonsQueryOptions";
import { Input } from "@/shared/components/ui/input";
import { useState } from "react";
import createStrangersByNameQueryOptions from "@/api/queryOptions/createPersonsQueryByNameOptions";
import useDebounce from "@/hooks/useDebounce";
import ViewAllPersons from "@/components/ViewAllPersons";
import type { Stranger } from "@/types/StrangerThingsAPI/Stranger";
import StrangerCardComponent from "@/components/CardPerson";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [showMainPersons, setShowMainPersons] = useState(false);
  const debounceSearch = useDebounce(search);
  // console.log("debounceSearch", debounceSearch)

  const {
    data: person = [],
    isLoading,
    isSuccess,
    isRefetching,
  } = useQuery(createStrangersByNameQueryOptions(debounceSearch));

  // console.log("person", person)

  const { data: allStrangerPersons } = useQuery(createStrangersQueryOptions());
  // console.log("allStrangerPersons: ", allStrangerPersons);

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
            person.map((p: Stranger) => (
              <StrangerCardComponent key={p._id} person={p} />
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
            allStrangerPersons={allStrangerPersons}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
