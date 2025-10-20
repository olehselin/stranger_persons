import createRandomPersonQueryOptions from "@/api/queryOptions/createRandomPersonQueryOptions";
import { useQuery } from "@tanstack/react-query";

const RandomPerson = () => {
  // Math.floor(Math.random() * (max - min + 1)) + min
  const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const { data } = useQuery(createRandomPersonQueryOptions(random.toString()));
  console.log("Random Person Data:", data);

  return (
    <div>
      <h2>Random Person</h2>
      {data && data.length > 0 ? (
        <div>
          <p>Name: {data[0].name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={() => window.location.reload()}>Get Another Person</button>
    </div>
  );
};

export default RandomPerson;
