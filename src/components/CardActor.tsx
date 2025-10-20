import createActorQueryOptions from "@/api/queryOptions/createActorsQueryOptions";
import { Card } from "@/shared/components/ui/card";
import type { Person } from "@/types/StrangerThingsAPI/Person";
import { useQuery } from "@tanstack/react-query";

const CardActor: React.FC<{portrayedBy: Person}> = ({ portrayedBy }) => {
  const { data: actor } = useQuery(
    createActorQueryOptions(portrayedBy.portrayedBy || "")
  );
  return (
    <Card>
      <div>
        <span className="font-light">More Details About Actor:</span>
        <div>
          <span className="font-medium">Real Name: </span> {actor}
        </div>

        <div>
          <span className="font-medium">Birthday: </span> {}
        </div>
      </div>
    </Card>
  );
};

export default CardActor;
