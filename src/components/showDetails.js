import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();

      setShowDetails(data);
    };

    fetchShowDetails();
  }, [id]);

  return (
    <div>
      {showDetails && (
        <div>
          <h2>{showDetails.name}</h2>
          <img
            src={showDetails.image && showDetails.image.original}
            alt={showDetails.name}
          />
          <p>Genres: {showDetails.genres.join(", ")}</p>
          <p>Status: {showDetails.status}</p>
          <p>Rating: {showDetails.rating && showDetails.rating.average}</p>
          <p>Language: {showDetails.language}</p>
          <p>
            Schedule: {showDetails.schedule && showDetails.schedule.time} on{" "}
            {showDetails.schedule && showDetails.schedule.days.join(", ")}
          </p>
          <p>Summary: {showDetails.summary}</p>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
