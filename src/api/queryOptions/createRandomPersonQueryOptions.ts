import { queryOptions } from "@tanstack/react-query";
import { getRandomPerson } from "../endpoints/getRandomPerson";

export default function createRandomPersonQueryOptions(_id: string) {
  return queryOptions({
    queryKey: ["randomPerson", _id],
    queryFn: () => getRandomPerson(_id),
  });
}
