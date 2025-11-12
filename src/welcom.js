function Etudiant(props) {
  return (
    <div>
      <h3>👨‍🎓 Nom : {props.nom}</h3>
      <p>Age : {props.age} ans</p>
      <p>Filière : {props.filiere}</p>
    </div>
  );
}

export default Etudiant;
