import type { GetStrangerOptions } from "@/types/GetStrangerOptions";

type Props = {
  showMainPersons: boolean;
  AllPersons?: GetStrangerOptions[];
};

const ViewAllPersons: React.FC<Props> = ({ showMainPersons, AllPersons = [] }) => {
  return (
    showMainPersons && (
      <div>
        <h1>Main Persons:</h1>
        {AllPersons?.map((person: GetStrangerOptions) => (
          <p key={person._id}>{person.name}</p>
        ))}
      </div>
    )
  );
};

export default ViewAllPersons;