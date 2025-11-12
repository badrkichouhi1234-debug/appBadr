import Etudiant from './Etudiant';

function App() {
  return (
    <div>
      <h1>Liste des étudiants</h1>

      <Etudiant nom="Aya" age="19" filiere="Informatique" />
      <Etudiant nom="Youssef" age="21" filiere="Réseaux" />
      <Etudiant nom="Sara" age="20" filiere="Design" />
    </div>
  );
}

export default App;
