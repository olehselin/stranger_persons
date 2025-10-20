import { Card } from "@/shared/components/ui/card";
// import CardActor from "./CardActor";
import { useQuery } from "@tanstack/react-query";
import createPersonByNameQueryOptions from "@/api/queryOptions/createPersonsQueryByNameOptions";
import type { Person } from "@/types/StrangerThingsAPI/Person";

// Component to display a card with details about a Stranger Things character
const PersonCard: React.FC<{ person: Person }> = ({ person }) => {
  const { data } = useQuery(createPersonByNameQueryOptions(person.name || ""));

  console.log("data", data);

  return (
    <Card className="p-5">
      <div className="flex flex-col gap-1 p-5">
        <div>
          <span className="font-medium">Name:</span> {person.name}
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-medium">Photo:</span>
          <img
            src={person.photo}
            alt={`${name} photo`}
            loading="lazy"
            className="w-50 h-50 rounded-lg"
          />
        </div>
        <div>
          <span className="font-medium">Born:</span> {person.born}
        </div>
        <div>
          <span className="font-medium">Gender:</span> {person.gender}
        </div>
        <div>
          <span className="font-medium">Status:</span> {person.status}
        </div>
        {/* <div>
          <CardActor portrayedBy={} />
        </div> */}
      </div>
    </Card>
  );
};

export default PersonCard;
