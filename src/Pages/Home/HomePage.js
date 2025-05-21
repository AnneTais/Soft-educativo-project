import { MdLogin, MdPersonAdd, MdPrivateConnectivity   } from 'react-icons/md';
import { AiFillPhone, AiFillQuestionCircle   } from 'react-icons/ai';
import { RiCactusFill } from "react-icons/ri";
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container" role="main" aria-label="Página Inicial">
      <header className="header">
      <div className="header-left">
          <span className="site-name">Cac<RiCactusFill size={25} style={{ marginRight: 0}} />hon</span>
        </div>
        <div className="header-right">
          <button className="btn" aria-label="Botão de Login">
          <MdLogin size={18} style={{ marginRight: 10 }} />
            Login
          </button>
          <button className="btn" aria-label="Botão de Cadastro">
          <MdPersonAdd size={18} style={{ marginRight: 10 }} />
            Cadastro</button>
        </div>
      </header>

      <main className="main">
        <h1 className="title">Seja bem-vindo à nossa página!</h1>
        <h2 className="tagline">Aprenda de forma inovadora e divertida com o melhor software educativo.</h2>
        <p className="description">
        Nosso software educativo é superior porque une tecnologia de ponta, conteúdos atualizados e uma metodologia que engaja o aluno desde o primeiro momento. Com recursos interativos, avaliações inteligentes e suporte personalizado, garantimos uma aprendizagem efetiva e motivadora que faz a diferença na vida dos estudantes. Escolha Cacthon e transforme a educação!
        </p>
      </main>

      <footer className="footer">
        <div>
          &copy; 2024 MeuSite | 
          <a href="#sobre" aria-label="Sobre o site" className="footer-link">
            Sobre
            <AiFillQuestionCircle size={20} style={{ marginLeft: 10 }} />
            </a> | 
          <a href="#contato" aria-label="Contato" className="footer-link" >
          Contato
          <AiFillPhone size={20} style={{ marginLeft: 10 }} />
            </a> |
          <a href="#privacidade" aria-label="Política de Privacidade" className="footer-link">
            Privacidade
            <MdPrivateConnectivity size={25} style={{ marginLeft: 10 }} />
            </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;