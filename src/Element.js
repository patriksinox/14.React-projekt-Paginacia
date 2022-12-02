import React from "react";

const Element = ({ avatar_url, login, html_url }) => {
  return (
    <div className="col-sm-4 text-center okno shadow-sm">
      <img src={avatar_url} alt="fotka" className="mb-3 mt-5" />

      <h6>{login}</h6>

      <div>
        <a
          href={html_url}
          className="btn btn-primary mt-3 mb-5"
          target="_blank"
        >
          Pozri profil
        </a>
      </div>
    </div>
  );
};

export default Element;
