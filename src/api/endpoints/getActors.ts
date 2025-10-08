import { BASE_URl_TMBD } from "../baseUrls";

const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2ZlZmEyYjkwZWFiYjZiY2NiZTFkZWIxNDE1Njg4NyIsIm5iZiI6MTc1ODYxNzcxMS4zMjgsInN1YiI6IjY4ZDI2MDZmZTk4NDkzNDJlYjdhNGU4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6c5Dusn9rP21P_y_nBV83RgvR_n39apDoyyQuHwZs-s";

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
