import React from 'react';
import './Perfil.css'
import { MdAccessible, MdAccountBox, MdExitToApp, MdHome, MdLogin, MdPerson, MdPersonAdd } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';

function PerfilPage () {

    return(

      <div className='perfilpage'>

        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="/imagens/IconeApp.png" width="180px" height="100px" alt="" class="d-inline-block align-top"/>
        </a>
        <div>
            <button className="btn" aria-label="Botão de Login"><MdHome size={40} style={{ marginRight: 20}} /></button>
            <button className="btn" aria-label="Botão de Cadastro"><MdPerson size={40} style={{ marginRight: 20}} /></button>
        </div>
      </nav>

      <div className='info'>
        <h1><button className="btn"><MdPerson size={80}/></button> NOME SOBRENOME</h1>
        <h2 className='org2'>IDADE</h2>
        <h3 className='org3'>NIVEL</h3>
      </div>

      <div class="card">
        <div class="card-body">
          <h3>SENHA</h3>
          <h3>USUÁRIO</h3>
          <h3>EMAIL</h3>
        </div>
      </div>

      <div class="card" className='cardbtn'>
         <button type="button" class="btn btn-lg">SAIR DA CONTA <MdExitToApp size={25} color='red'/></button>
      </div>


      <div className='btnexcluir'>
              <button type="button" class="btn  btn-lg">EXCLUIR CONTA <IoMdTrash size={25} color='red'/></button>
      </div>

      </div>
    )

}


export default PerfilPage;
