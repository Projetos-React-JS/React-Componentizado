export default function Card({ dados }) {

    return (
        <>
            {
                dados.map((pegaDados, index) => (
                    <div
                        className="skill-card"
                        key={index}
                        style={
                            {
                                backgroundColor: pegaDados.color
                            }
                        }
                    >
                        <h3>Titulo: {pegaDados.titulo}</h3>
                        <p>Nível: {pegaDados.nivel}</p>
                        <p>Tempo de XP: {pegaDados.tempoxp}</p>
                        <p>{index + 1}</p>
                    </div>
                ))
            }

        </>

    )
}