import type { GetStrangerOptions } from "@/types/StrangerThingsAPI/GetStrangerOptions";
import { BASE_URl_STRANGER } from "../baseUrls";

export const getPersonByName = async (search: string) => {
  const response = await fetch(
    `${BASE_URl_STRANGER}` + `api/v1/characters?name=${search}`
  );
  const data = await response.json();
  // console.log("Stranger Person:", data);
  data.map((person: GetStrangerOptions) => person.name);

  return data;
};
