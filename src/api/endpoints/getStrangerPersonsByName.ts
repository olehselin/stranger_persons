import type { GetStrangerOptions } from "@/types/GetStrangerOptions";
import { BASE_URl } from "../baseUrl";

export const getStrangerPersonsByName = async (search: string) => {
  //  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(
    `${BASE_URl}` + `api/v1/characters?name=${search}`
  );

  const data = await response.json();
  console.log(data.map((person: GetStrangerOptions) => person.name));
  return data;
};
