import Star from "../assets/Estrelas.png";
import Meio_estrela from "../assets/Meio_estrela.png";

interface TestimonialCardProps {
  imagem: string,
  testemunho: string,
  nome: string,
  cargo: string,
  quantidadEstrelas: number;
}

export default function TestimonialCard(props: TestimonialCardProps) {
  const listaEstrelas = new Array(props.quantidadEstrelas).fill(1);
  const listaEstrelasvazias = new Array(5 - props.quantidadEstrelas).fill(1);

  return (
    <div className="carousel-card">
      <img src={props.imagem} alt="Imagem perfil cliente" />

      <span className="testimony">
        <p>
          {props.testemunho}
        </p>
      </span>

      <span className="rating">
        {listaEstrelas.map((_, index) => (
          <img
            key={`estrela-cheia-${index}`}
            src={Star}
            alt="ícone estrela"
            width={22}
            height={20}
          />
        ))}

        {listaEstrelasvazias.map((_, index) => (
          <img
            key={`estrela-vazia-${index}`}
            src={Meio_estrela}
            alt="ícone estrela"
            width={22}
            height={20}
          />
        ))}
      </span>

      <span className="names">
        <p>{props.nome}</p>
        <p>{props.cargo}</p>
      </span>
    </div>
  );
}