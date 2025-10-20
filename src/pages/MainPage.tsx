import { useState } from "react";

const MainPage = () => {
  const [showMainPersons, setShowMainPersons] = useState(false);
  /* Get data all persons from API. */
  // console.log("allPersons: ", allPersons);

  return (
    <>
      <h1 className="border border-red-400">Stranger Persons</h1>

      <div className="flex">
        <div className="border border-red-400 ml-5">
          {
            <button onClick={() => setShowMainPersons((prev) => !prev)}>
              {showMainPersons ? "Hide" : "Show"} Main Persons
            </button>
          }
        </div>
      </div>
    </>
  );
};

export default MainPage;
