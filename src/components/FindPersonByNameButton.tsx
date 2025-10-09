import createPersonByNameQueryOptions from "@/api/queryOptions/createPersonsQueryByNameOptions";
import { Input } from "@/shared/components/ui/input";
import type { Stranger } from "@/types/StrangerThingsAPI/Stranger";
import { useQuery } from "@tanstack/react-query";
import StrangerCardComponent from "./CardPerson";
import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";

const FindPersonByNameButton = () => {
  const [search, setSearch] = useState("");
  // console.log("debounceSearch", debounceSearch)
  const debounceSearch = useDebounce(search);
  /* Get data person from API. */
  const {
    data: person = [],
    isLoading: isLoadingPerson,
    isSuccess: isSuccessPerson,
    isRefetching: isRefetchingPerson,
  } = useQuery(createPersonByNameQueryOptions(debounceSearch));

  return (
    <div>
      <div className="border border-red-400 mr-5">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Find person by name"
        />
        {isLoadingPerson || isRefetchingPerson ? (
          <div>Loading...</div>
        ) : (
          debounceSearch.length > 0 &&
          person.length == 0 && (
            <div>Not Found Any Person. Try to write correct name.</div>
          )
        )}
        {search.length === 0 && <div>Not typing anything.</div>}
        {isSuccessPerson &&
          person.map((p: Stranger) => (
            <StrangerCardComponent key={p._id} person={p} />
          ))}
      </div>
    </div>
  );
};

export default FindPersonByNameButton;
