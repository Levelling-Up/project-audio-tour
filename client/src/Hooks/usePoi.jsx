import { tracksDB } from "../database.js";
import { useState } from "react";

const usePoi = () => {
  const [pois, setPois] = useState(tracksDB);

  return {
    pois: pois
  };
};

export default usePoi;