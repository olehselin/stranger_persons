import { queryOptions } from "@tanstack/react-query";
import getStrangers from "../endpoints/getPersons";

export function createStrangersQueryOptions() {
  return queryOptions({
    queryKey: ["persons"],
    queryFn: () => getStrangers(),
  });
}
