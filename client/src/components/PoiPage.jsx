import React from "react";
import { useParams } from "react-router-dom";
//import { useState } from "react";
//import { tracksDB } from "../database.js";
import usePoi from "../Hooks/usePoi.jsx";

const PoiPage = () => {
  const { id } = useParams();
  const { pois } = usePoi();

  console.log(id);

  return (
    <>
      <div> {id} </div>
    </>
  );
};

export default PoiPage;