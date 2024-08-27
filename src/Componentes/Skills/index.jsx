function Skills({ skills }) {
  return (
    <div className="skills">
      <h2>Habilidades</h2>
                <div className="skill-card">
                    <h3>HTML</h3>
                    <p>Nível: Avançado</p>
                </div>
                <div className="skill-card">
                    <h3>CSS</h3>
                    <p>Nível: Intermediário</p>
                </div>
                <div className="skill-card">
                    <h3>JavaScript</h3>
                    <p>Nível: Básico</p>
                </div>
    </div>
  );
}

export default Skills;