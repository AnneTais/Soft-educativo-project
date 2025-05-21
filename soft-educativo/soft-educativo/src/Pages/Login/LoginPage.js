import './Style.css';
import React from 'react';


function Login() {
  const avatares = [
    { id: 1, src: '/imagens/calango.jpg', alt: 'Calango nordestino' },
    { id: 2, src: '/imagens/calanga.jpg', alt: 'Calanga nordestina' },
    { id: 3, src: '/imagens/passaro.jpg', alt: 'Pássaro' },
    { id: 4, src: '/imagens/passara.jpg', alt: 'Pássara' },
  ];

  const handleAvatarClick = (avatarId) => {
    console.log(`Avatar ${avatarId} selecionado!`);
  };

  return (
    <div className='loginpage'>
      <div className='conteiner'>
        <form> {}
          <h1>Cadastro Cacthon</h1>
          <h3>Registre-se para eternizar cada momento desta nova jornada</h3>

          {/* Campo Nome */}
          <label htmlFor='nomeInput'>Nome:</label>
          <input name='nome' type='text' placeholder='Digite seu nome completo...' id='nomeInput' />

          {/* Campo Data de Nascimento */}
          <label htmlFor="dataNascimentoInput">Data de nascimento:</label>
          <input name='idade' type='text' placeholder='ex. 01/05/2008' id='dataNascimentoInput' />

          {/* Campo E-mail */}
          <label htmlFor="emailInput">E-mail:</label>
          <input name='email' type='email' placeholder='ex. calangochico@gmail.com' id='emailInput' />

          {/* Campo Nome de Usuário */}
          <label htmlFor="usuarioInput">Nome de usuário:</label>
          <input name='usuario' type='text' placeholder='chico_da_programacao' id='usuarioInput' /> 

          {/* Campo Senha */}
          <label htmlFor="senhaInput">Senha:</label>
          <input name='senha' type='password' placeholder='Escolha uma senha forte...' id='senhaInput' />

          {/* SEÇÃO DE ESCOLHA DE AVATAR */}
          <div className='avatar-selection'>
            <label>Escolha seu avatar:</label>
            <div className='avatar-options'>
              {avatares.map(avatar => (
                <button
                  key={avatar.id}
                  type="button" // MUITO IMPORTANTE: para não submeter o form ao clicar
                  onClick={() => handleAvatarClick(avatar.id)}
                  className="avatar-button"
                >
                  <img src={avatar.src} alt={avatar.alt} />
                </button>
              ))}
            </div>
          </div>
          {/* FIM DA SEÇÃO DE ESCOLHA DE AVATAR */}

          <button type='submit' id='cadastro'>CADASTRAR</button> {/* Botão de cadastro dentro do form */}

        </form> {/* Fim do formulário */}

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
  );
}

export default Login;