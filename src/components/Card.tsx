interface CardProps {
    img: string;
    subtitulo: string;
    descricao: string;
}

export default function Card({ img, subtitulo, descricao }: CardProps) {
    return (
       <div className="card">
           <span>
            <img src={img} alt="img" />
           </span>
           <div>
            <h3>{subtitulo}</h3>
            <p>{descricao}</p>
            <hr />
           </div>
       </div>
    )
}