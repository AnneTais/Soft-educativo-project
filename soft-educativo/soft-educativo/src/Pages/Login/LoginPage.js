import './Style.css'
import React from 'react';

function Login() {

  return (
    <div className='loginpage'>
      <div className='conteiner'>
        <form>
          <h1>Cadastro Cacthon</h1>
          <h3>Registre-se para eternizar cada momento desta nova jornada</h3>
          <input name='nome' type='text' placeholder='Nome'/>
          <input name='idade' type='number' placeholder='Idade'/>
          <input name='email' type='email' placeholder='email@gmail.com'/>
          <input name='usuario' type='text' placeholder='Usuário'/>
          <input name='senha' type='password' placeholder='Definir senha'/>
        </form>
           <button type='submit'>Cadastrar</button>

        <div className='divparalogar'>
          <h2>Já sou um Cacthoniano</h2>
          <h3>Login</h3>
          <div className='botoes-login'>
          <button type='button'>Email</button>
          <button type='button'>Google</button>
          </div>
        </div>
      </div>

      <div>
        <img className='foto' src="/imagens/cacto-do-deserto.png" alt="Cacto" />
        <img className='foto2' src="/imagens/cacto-do-deserto.png" alt="Outro Cacto" />
      </div>

    </div>
  )
}

export default Login
