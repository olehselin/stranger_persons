import { queryOptions } from "@tanstack/react-query";
import { getStrangerPersonsByName } from "../endpoints/getStrangerPersonsByName";

export default function createStrangerPersonsByNameQueryOptions(search: string) {
  return queryOptions({
    queryKey: ["person", search],
    queryFn: () => getStrangerPersonsByName(search),
    enabled: !!search,
  });

  
}
