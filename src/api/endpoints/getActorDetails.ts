import { BASE_URl_TMBD } from "../baseUrls";
import { apiKey } from "../apiKey";

export const getActorDetails = async (portrayedBy: string) => {
  const response = await fetch(`${BASE_URl_TMBD}` + `/person/${portrayedBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const data = await response.json();
  return data;
};
