import { useQuery } from "@tanstack/react-query";
import { createStrangersQueryOptions } from "@/api/queryOptions/createPersonsQueryOptions";
import { useState } from "react";
import ViewAllPersons from "@/components/ViewAllPersons";
import FindPersonByNameButton from "@/components/FindPersonByNameButton";

const MainPage = () => {
  const [showMainPersons, setShowMainPersons] = useState(false);
  /* Get data all persons from API. */
  const { data: allPersons } = useQuery(createStrangersQueryOptions());
  // console.log("allPersons: ", allPersons);

  return (
    <>
      <h1 className="border border-red-400">Stranger Persons</h1>

      <FindPersonByNameButton />

      <div className="flex">
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

export default MainPage;
