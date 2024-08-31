import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "HTML",
      nivel: "Avançado",
      tempoxp: "6 meses",
      color: "red"
    },
    {
      titulo: "Node JS",
      nivel: "Noob",
      tempoxp: "1 meses",
      color: "blue",
      imagemIcone: "/assets/curinthia.png"
    },
    {
      titulo: "Python",
      nivel: "Dó",
      tempoxp: "0 meses",
      color: "green"
    }
  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card dados={habilidades} />
    </div>
  );
}

export default Skills;
