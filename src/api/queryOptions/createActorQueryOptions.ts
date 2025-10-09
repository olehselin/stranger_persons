import { queryOptions } from "@tanstack/react-query";
import { getActorDetails } from "../endpoints/getActorDetails";

export function createActorQueryOptions(portrayedBy: string) {
  return queryOptions({
    queryKey: ["actors"],
    queryFn: () => getActorDetails(portrayedBy),
  });
}
