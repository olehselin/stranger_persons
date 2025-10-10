import { BASE_URl_TMBD } from "../baseUrls";
import { apiKey } from "../apiKey";

export const getActor = async (portrayedBy: string) => {
  const response = await fetch(`${BASE_URl_TMBD}` + `/person/${portrayedBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const data = await response.json();
  console.log(data)
  return data;
};
