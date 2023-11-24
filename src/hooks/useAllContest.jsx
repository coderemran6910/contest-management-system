import { useQuery } from "@tanstack/react-query";

const useAllContest = () => {

    const { data: allContest = [] } = useQuery({
        queryKey: ["allcotest"],
        queryFn: async () => {
          const res = await fetch("/allcontest.json");
          const data = await res.json();
          return data;
        },
      });
      return [allContest];
};

export default useAllContest;

