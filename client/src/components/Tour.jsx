import React from "react";
import { useHistory } from "react-router-dom";

const Tour = ({ id, image_url, audio_url }) => {
  const history = useHistory();

  const handleViewClick = () => {
    history.push(`/tours/poi/${id}`);
  };

  return (
    <div className="list-tour">
      <p className="list-tour-name">
        <b>Tour name:</b> {id}
      </p>
      <button onClick={handleViewClick}>Tour name: Iwona {id}</button>
    </div>
  );
};

export default Tour;