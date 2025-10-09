import { BASE_URl_TMBD } from "../baseUrls";
import { apiKey } from "../apiKey";

export const getActorDetails = async (person_id: number) => {
  const response = await fetch(`${BASE_URl_TMBD}` + `/person/${person_id}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const data = await response.json();
  return data;
};
