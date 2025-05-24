import React from 'react';
import './Tela4.css'; // Certifique-se de que o caminho está correto
import { FaRegUserCircle } from 'react-icons/fa';
import { FaHouse } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";

const Tela4 = () => {
  return (
    <div className="container" role="main" aria-label="Página Inicial">
      <header className="header">
        <div className="header-left">
          <img src="/imagens/19.png" width="180px" height="100px" alt="" className="d-inline-block align-top" />
        </div>
        <div className="header-right">
          <button className="btn" aria-label="Botão de Login">
            <FaHouse color='white' size={40} style={{ marginRight: 10 }} />
          </button>
          <button className="btn" aria-label="Botão de Login">
            <FaRegUserCircle color='white' size={40} style={{ marginRight: 10 }} />
          </button>
        </div>
      </header>

    



      <main className="main">
        <div>
        <button className='btnVoltar'>
            <GoArrowLeft  color='green' size={40} style={{ marginRight: 10 }}/>
        </button>
        </div>

      </main>
    </div>
  );
};

export default Tela4;



