import { BASE_URl_STRANGER } from "../baseUrls";

export default async function getStrangers() {
  const response = await fetch(`${BASE_URl_STRANGER}` + `api/v1/characters`);
  const data = await response.json();
  // console.log("api characters", data);
  return data;
}
