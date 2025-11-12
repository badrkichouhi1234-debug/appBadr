import React, { useState } from "react";

function App() {
  const [livres, setLivres] = useState([]);
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [annee, setAnnee] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouveauLivre = { titre, auteur, annee };
    setLivres([...livres, nouveauLivre]); // Ajouter le livre à la liste
    setTitre("");
    setAuteur("");
    setAnnee("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ajouter un livre</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Année"
          value={annee}
          onChange={(e) => setAnnee(e.target.value)}
          required
        />
        <button type="submit">Ajouter</button>
      </form>

      <h3>Liste des livres :</h3>
      <ul>
        {livres.map((livre, index) => (
          <li key={index}>
            {livre.titre} - {livre.auteur} ({livre.annee})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
