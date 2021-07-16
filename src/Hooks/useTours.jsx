import { useEffect , useState } from "react";
import { API, graphqlOperation } from 'aws-amplify'
import { listTours } from '../graphql/queries';

const UseTours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {

    const fetchTours = async () => {
      try {
        const result = await API.graphql(graphqlOperation(listTours));
        if (result.data){
          setTours(result.data.listTours.items)
        }else{
          setTours([])
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchTours();
  }, [])

  return {
    tours: tours
  };
};

export default UseTours;
