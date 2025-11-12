import React from "react";

function Livre({ titre, auteur, annee }) {
  return (
    <div>
      <h4>{titre}</h4>
      <p>Auteur : {auteur}</p>
      <p>Année : {annee}</p>
    </div>
  );
}

export default Livre;