import type { Person } from "@/types/StrangerThingsAPI/Person";
import { BASE_URl_STRANGER } from "../baseUrls";
export const getRandomPerson = async (_id: string) => {
  const response = await fetch(
    `${BASE_URl_STRANGER}` + `api/v1/characters/random?count=${_id}`
  );

  const data = await response.json();
  data.map((person: Person) => person.name);

  return data;
};
