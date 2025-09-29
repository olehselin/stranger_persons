import { queryOptions } from "@tanstack/react-query";
import getStrangerPersons from "../endpoints/getStrangerPersons";

export function createStrangerPersonsQueryOptions() {
  return queryOptions({
    queryKey: ["persons"],
    queryFn: () => getStrangerPersons(),
  });
}
