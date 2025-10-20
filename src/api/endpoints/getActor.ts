import { BASE_URl_TMBD } from "../baseUrls";
import { apiKey } from "../apiKey";

export const getActor = async (portrayedBy: string)=> {
  try {
    const response = await fetch(
      `${BASE_URl_TMBD}` + `/person/${portrayedBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status}, Response URL: ${response.url}`
      );
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching actor:", error);
    
  }
};
