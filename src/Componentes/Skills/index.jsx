import Card from "../Card";

function Skills({ skills }) {

  const hablidades = [
    {titulo:"HTML", nivel:"Avançado"},
    {titulo:"CSS", nivel:"Intermediário"},
    {titulo:"JavaScript", nivel:"Básico"},
    {titulo:"React", nivel:"Sênio"}
  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card dados={hablidades}/>
    </div>
  );
}

export default Skills;