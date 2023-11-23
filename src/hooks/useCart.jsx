
import {
    useQuery,
  } from '@tanstack/react-query'
const useCarts = () => {

    const { data: popular =[] } = useQuery({
        queryKey: ['popularContests'],
        queryFn: async () => {
          const res = await fetch('/popularContest.json');
          const data = await res.json();
          return data;
        }
      })

    return [popular];
        
};

export default useCarts;