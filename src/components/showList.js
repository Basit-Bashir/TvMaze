import React from "react";
import { Link } from "react-router-dom";

const ShowList = ({ shows }) => {
  return (
    <div>
      <h2>TV Shows</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <Link to={`/show/${show.show.id}`}>
              <h3>{show.show.name}</h3>
              <img
                src={show.show.image && show.show.image.medium}
                alt={show.show.name}
              />
              <p>Genres: {show.show.genres.join(", ")}</p>
              <p>Status: {show.show.status}</p>
              <p>Rating: {show.show.rating && show.show.rating.average}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
