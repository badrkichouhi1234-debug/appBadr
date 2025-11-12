import React, { useState } from "react";

function Formulaire() {
  // Déclare l'état pour chaque champ
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    alert(`Nom: ${nom}, Email: ${email}`);
    // Ici tu pourrais envoyer les données à un serveur
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom :</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default Formulaire;
