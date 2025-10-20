import { queryOptions } from "@tanstack/react-query";
import getPersons from "../endpoints/getPersons";

export default function createPersonsQueryOptions() {
  return queryOptions({
    queryKey: ["persons"],
    queryFn: () => getPersons(),
  });
}
