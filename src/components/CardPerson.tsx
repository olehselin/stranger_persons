import { Card } from "@/shared/components/ui/card";
import type { Stranger } from "@/types/StrangerThingsAPI/Stranger";
import { useQuery } from "@tanstack/react-query";
import { createActorQueryOptions } from "@/api/queryOptions/createActorQueryOptions";

interface StrangerCardProps {
  person: Stranger;
}

const StrangerCardComponent: React.FC<StrangerCardProps> = ({ person }) => {
  const { name, aliases, born, status, gender, photo, portrayedBy } = person;
  console.log("portrayedBy: ", portrayedBy);
  const { data: actor } = useQuery(createActorQueryOptions(portrayedBy));

  console.log("ID Person: ", actor);

  // const { data: detailsPerson } = useQuery(
  //   createActorDetailsQueryOptions(actor?.results[0].id)
  // );

  // console.log("detailsPerson:", detailsPerson);

  return (
    <Card className="p-5">
      <div className="flex flex-col gap-1 p-5">
        <div>
          <span className="font-medium">Name:</span> {name}
        </div>

        <div>
          <span className="font-medium">Aliases:</span> {aliases.join(", ")}
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-medium">Photo:</span>
          <img
            src={photo}
            alt={`${name} photo`}
            loading="lazy"
            className="w-50 h-50 rounded-lg"
          />
        </div>
        <div>
          <span className="font-medium">Born:</span> {born}
        </div>
        <div>
          <span className="font-medium">Gender:</span> {gender}
        </div>
        <div>
          <span className="font-medium">Status:</span> {status}
        </div>

        <div>
          <span className="font-light">More Details About Actor:</span>
          <div>
            <span className="font-medium">Real Name: </span> {portrayedBy}
          </div>

          <div>
            <span className="font-medium">Birthday: </span> {portrayedBy}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StrangerCardComponent;
