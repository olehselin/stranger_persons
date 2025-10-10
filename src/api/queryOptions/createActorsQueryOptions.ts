import { queryOptions } from "@tanstack/react-query";
import { getActor } from "../endpoints/getActor";

export default function createActorQueryOptions(query: string) {
  return queryOptions({
    queryKey: ["actors"],
    queryFn: () => getActor(query),
  });
}
