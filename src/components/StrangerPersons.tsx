import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/shared/components/ui/skeleton";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/shared/components/ui/alert";
import { Terminal } from "lucide-react";
import { createStrangerPersonsQueryOptions } from "@/api/queryOptions/createStrangerPersonsQueryOptions";
import { Input } from "@/shared/components/ui/input";
import { useState } from "react";
import createStrangerPersonsByNameQueryOptions from "@/api/queryOptions/createStrangerPersonsQueryByNameOptions";
import type { GetStrangerOptions } from "@/types/GetStrangerOptions";

const StrangerPersons = () => {
  const [search, setSearch] = useState("");
  const [showMainPersons, setShowMainPersons] = useState(false);

  const { data: person = [] } = useQuery(
    createStrangerPersonsByNameQueryOptions(search)
  );

  const {
    data: allPersons,
    isLoading,
    isError,
    error,
  } = useQuery(createStrangerPersonsQueryOptions());

  if (isLoading) {
    return (
      <Skeleton className="h-[40px] w-[100px] rounded-full text-xl">
        Loading...
      </Skeleton>
    );
  }

  if (isError) {
    return (
      <Alert variant="default">
        <Terminal />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }

  return (
    <>
      <div>
        <h1>Stranger Persons</h1>
        <Input
          className="m-5"
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Find person by name"
        />
        {person.map((p: GetStrangerOptions) => (
          <p key={p._id}>{p.name}</p>
        ))}
      </div>

      <button onClick={() => setShowMainPersons((prev) => !prev)}>
        Show Main Persons
      </button>

      {showMainPersons && (
        <div>
          <h1>Main Persons:</h1>
          {allPersons?.map((person: GetStrangerOptions) => (
            <p key={person._id}>{person.name}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default StrangerPersons;
