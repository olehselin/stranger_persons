import type { GetStrangerOptions } from "@/types/StrangerThingsAPI/GetStrangerOptions";

type Props = {
  showMainPersons: boolean;
  allStrangerPersons?: GetStrangerOptions[];
};

const ViewallStrangerPersons: React.FC<Props> = ({ showMainPersons, allStrangerPersons = [] }) => {
  return (
    showMainPersons && (
      <div>
        <h1>Main Persons:</h1>
        {allStrangerPersons?.map((person: GetStrangerOptions) => (
          <p key={person._id}>{person.name}</p>
        ))}
      </div>
    )
  );
};

export default ViewallStrangerPersons;