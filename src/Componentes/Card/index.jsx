// export default function Card(props) {
//     return(
//         <div className="skill-card">
//             <h3>{props.titulo}</h3>
//             <p>Nível: {props.nivel}</p>
//         </div>
//     )
// }
export default function Card({dados}) {
    return(
        <>
        {
            dados.map(data => (
                <div className="skill-card">
                    <h3>{data.titulo}</h3>
                    <p>Nível: {data.nivel}</p>
                </div>
            ))
        }
        </>
        
    )
}