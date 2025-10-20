import type { Person } from "@/types/StrangerThingsAPI/Person";
import { BASE_URl_STRANGER } from "../baseUrls";

export const getPersonByName = async (search: string) => {
  const response = await fetch(
    `${BASE_URl_STRANGER}` + `api/v1/characters?name=${search}`
  );
  const data = await response.json();
  // console.log("Stranger Person:", data);
  data.map((person: Person) => person.name);

  return data;
};
