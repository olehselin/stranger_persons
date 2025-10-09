import { queryOptions } from "@tanstack/react-query";
import { getPersonByName } from "../endpoints/getPersonsByName";

export default function createPersonByNameQueryOptions(search: string) {
  return queryOptions({
    queryKey: ["person", search],
    queryFn: () => getPersonByName(search),
    enabled: !!search,
  });
}
