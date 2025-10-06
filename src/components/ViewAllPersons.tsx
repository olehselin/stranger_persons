import type { GetStrangerOptions } from "@/types/GetStrangerOptions";

type Props = {
  showMainPersons: boolean;
  allPersons?: GetStrangerOptions[];
};

const ViewAllPersons: React.FC<Props> = ({ showMainPersons, allPersons = [] }) => {
  return (
    showMainPersons && (
      <div>
        <h1>Main Persons:</h1>
        {allPersons?.map((person: GetStrangerOptions) => (
          <p key={person._id}>{person.name}</p>
        ))}
      </div>
    )
  );
};

export default ViewAllPersons;