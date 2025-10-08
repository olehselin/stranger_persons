import { queryOptions } from "@tanstack/react-query";
import { getStrangersByName } from "../endpoints/getStrangerPersonsByName";

export default function createStrangersByNameQueryOptions(search: string) {
  return queryOptions({
    queryKey: ["person", search],
    queryFn: () => getStrangersByName(search),
    enabled: !!search,
  });

  
}
