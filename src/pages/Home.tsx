import { useEffect, useState } from "react";
import Box from "../assets/box.svg";
import Caminhao from "../assets/Caminhao.svg";
import Close from "../assets/close.svg";
import Escudo from "../assets/Escudo.svg";
import Facebook from "../assets/facebook 1.png";
import Instagram from "../assets/instagram 1.png";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg"; // ./ -> olha para pasta que esta pages  ../ -> sai da pasta vai para a pasta que guarda a pasta que voce esta
import ProfileImageOne from "../assets/Pessoa1.png";
import RectangleOne from "../assets/RectangleOne.png";
import RectangleTwo from "../assets/RectangleTwo.png";
import Youtube from "../assets/youtube 1.png";
import Button from "../components/Button";
import Card from "../components/Card";
import "../styles/Entrarcontato.css";
import "../styles/Footer.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/utility.css";

import TestimonialCard from "../components/TestimonialCard";
import "../styles/Footer.css";

export default function Home() {

  let TextoplaceDesketop = "Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?";
  let TextoplaceMobile = "Motivo do contato. Ex qual o valor de x?";

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
    <main>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Arrumado.svg" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#solution">Soluções</a>
              </li>

              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>

              <li>
                <a href="#pricing">Preços</a>
              </li>

              <li>
                <a href="#Contato">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>

              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <li>
                        <a
                          onClick={() => setShowMobileMenu(!showMobileMenu)}
                          href="#solution"
                        >
                          Home
                        </a>
                      </li>
                    </li>

                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#solution"
                      >
                        Solucao
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#solution"
                      >
                        Depoimentos
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#pricing"
                      >
                        Preços
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#contact"
                      >
                        Contato
                      </a>
                    </li>
                  </ul>

                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>
      <section id="hero">
        <span className="desktop-only">
          <img src={RectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={RectangleOne} alt="Retangulo dois tela inicial" />
        <div className="container content">
          <p className="desktop-only">Seja Bem Vindo</p>
          <h1>
            Cansou de ser roubado, entao hoje e o seu dia de sorte, estamos aqui
            para te ajudar!
          </h1>
          <p>
            Ja pensou em evitar perder sua encomenda, ou ate mesmo evitar ser
            roubado? Com a nossa tecnologia de ponta, voce pode ficar tranquilo
            sabendo que suas encomendas estao seguras com os nossos
            dispositivos. Nao perca mais tempo se preocupando com o roubo de
            encomendas, junte-se a nos hoje e experimente a diferenca que a
            nossa seguranca pode fazer!
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Para mais informacoes" secondary />
            </span>
          </div>
        </div>
      </section>

      <section id="solution">
        <header>
          <span>
            <h2>Soluções</h2>
            <span className="desktop-only">
              <h2>Sob medida para você</h2>
            </span>
          </span>
          <p>
            Inovação é com a gente! A <strong>DonaFrost </strong>
            já conquistou diversos clientes, seja você mais um deles, veja tudo
            que pode ganhar com nossos serviços.
          </p>
        </header>
        <section className="even-columns">
          <Card img={Box} subtitulo="Produto Vencedor" descricao="Ideia matadora, nosso time já ganhou diversos eventos de
                inovação com nosso produto, entre eles podemos citar o CityFarm
                da FAG e Startup Garage." />
          <Card img={Caminhao} subtitulo="Produto Vencedor" descricao="Ideia matadora, nosso time já ganhou diversos eventos de
                inovação com nosso produto, entre eles podemos citar o CityFarm
                da FAG e Startup Garage." />
          <Card img={Escudo} subtitulo="Produto Vencedor" descricao="Ideia matadora, nosso time já ganhou diversos eventos de
                inovação com nosso produto, entre eles podemos citar o CityFarm
                da FAG e Startup Garage." />
        </section>
      </section>
      {/* Continuar daqui */}


      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">
              Conselho de quem conhece
            </p>
            <h2>Cada cliente importa!</h2>
          </span>
          <p>
            Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
            comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
          </p>

        </header>

        <section className="carousel">
          <div className="carousel-content">
            {/* Aqui replicar */}
            <TestimonialCard
              cargo="CEO links"
              imagem={ProfileImageOne}
              nome="Julios"
              quantidadEstrelas={5}
              testemunho="Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />

            <TestimonialCard
              cargo="CEO links"
              imagem={ProfileImageOne}
              nome="Julios"
              quantidadEstrelas={5}
              testemunho="Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />

            <TestimonialCard
              cargo="CEO links"
              imagem={ProfileImageOne}
              nome="Julios"
              quantidadEstrelas={5}
              testemunho="Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />





          </div>

          <div className="carousel-content">
            {/* Aqui replicar */}
            <TestimonialCard
              cargo="CEO links"
              imagem={ProfileImageOne}
              nome="Julios"
              quantidadEstrelas={5}
              testemunho="Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />

            <TestimonialCard
              cargo="CEO links"
              imagem={ProfileImageOne}
              nome="Julios"
              quantidadEstrelas={5}
              testemunho="Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />

            <TestimonialCard
              cargo="CEO links"
              imagem={ProfileImageOne}
              nome="Julios"
              quantidadEstrelas={5}
              testemunho="Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />



          </div>


        </section>
      </section>


      {/* minha parte */}
      <section id="Contato">
        <header>
          <span>
            <h2>Envie sua duvida</h2>
            <span className="desktop-only">
              <h2>Entre em contato</h2>
            </span>
          </span>
          <p className="textolongo">
            Entre em contato, estamos dispostos a tirar qualquer dúvida,
            seja um orçamento, uma dúvida técnica de algum de nossos produtos.
            Estamos à disposição para responder.😎
          </p>
          <p className="textocurto">Entre em contato, estamos dispostos a <br /> tirar qualquer dúvida😎.</p>
        </header>

        <form className="comunicado">
          <input type="text" placeholder="Seu melhor Email" />

          <input className="placeholder_desketop" type="text" placeholder={TextoplaceDesketop} />
          <input className="placeholder_mobile" type="text" placeholder={TextoplaceMobile} />

          <button className="botao" type="submit">Enviar</button>
        </form>

      </section>

      <footer id="footer">
        <section className="Redesociais">
          <div className="logomarca">
            <h2>LogoMarca</h2>
            <div>
              <img src={Instagram} alt="Instagram" />
              <img src={Facebook} alt="Facebook" />
              <img src={Youtube} alt="Youtube" />
            </div>
          </div>

          <div>
            <h2>Empresa</h2>
            <div className="Empresa">
              <a href="#">Sobre nos</a>
              <a href="#">Faca parte do time</a>
              <a href="#">Blog</a>
            </div>
          </div>

          <div>
            <h2>Funcionalidades</h2>
            <div className="Funcionalidades">
              <a href="#">Marketing</a>
              <a href="#">Analise de dados</a>
              <a href="#">Boot discord</a>
            </div>
          </div>

          <div>
            <h2>Recursos</h2>
            <div className="Recursos">
              <a href="#">IOS & Android</a>
              <a href="#">Teste a Demo</a>
              <a href="#">Clientes</a>
              <a href="#">API</a>
            </div>
          </div>

        </section>
        <section className="Copyright">
          <p>Feito com amor na aula de Programação Web💙 ©2026 SecurityBox - Todos os direitos reservados.</p>
        </section>
      </footer>


    </main>
  );
}
