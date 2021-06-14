import { tracksDB } from "../database.js";
import { useState } from "react";

const UseTours1 = () => {
  const [tours, setTours] = useState(tracksDB);

  //setTours(tracksDB);
  return {
    tours: tours
  };
};

export default UseTours1;
