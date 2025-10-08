import { queryOptions } from "@tanstack/react-query";
import getActors from "../endpoints/getActors";

export function createActorsQueryOptions(query: string) {
  return queryOptions({
    queryKey: ["actors"],
    queryFn: () => getActors(query),
    
  });
}
