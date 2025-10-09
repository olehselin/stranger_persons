import { queryOptions } from "@tanstack/react-query";
import { getActorDetails } from "../endpoints/getActorDetails";

export function createActorsQueryOptions(person_id: number) {
  return queryOptions({
    queryKey: ["actors"],
    queryFn: () => getActorDetails(person_id),
  });
}
