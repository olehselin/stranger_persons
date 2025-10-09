import { BASE_URl_TMBD } from "../baseUrls";
import { apiKey } from "../apiKey";

const getActor = async (query: string) => {
  const response = await fetch(
    `${BASE_URl_TMBD}` + `/search/person` + `?query=` + `${query}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
export default getActor;
