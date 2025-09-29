const BASE_URl = "https://stranger-things-api.fly.dev/";

export default async function getStrangerPersons() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${BASE_URl}` + `api/v1/characters`);
  const data = await response.json();
  return data;
}
