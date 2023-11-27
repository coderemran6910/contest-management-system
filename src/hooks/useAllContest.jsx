import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllContest = () => {
  const axiosPublic = useAxiosPublic()

    const { data: allContest = [] } = useQuery({
        queryKey: ["allcotest"],
        queryFn: async () => {
          try {
            const response = await axiosPublic.get("/contests");
            return response.data;
          } catch (error) {
            throw new Error(error);
          }
        },
        
      });
      return [allContest];
      
};

export default useAllContest;

