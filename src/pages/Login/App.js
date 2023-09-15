import logoIGM from './logo.png'
import './styles.css';
import Cadastro from '../Cadastro/App.js';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import UserService from '../../Services/UserService';

function App() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e) => {
        e.preventDefault(); // Evita que o formulário seja enviado por padrão

        const dadosLogin = {
            email: email,
            senha: senha,
        };

        // Chame a função de serviço para fazer o login
        UserService.fazerLogin(dadosLogin)
            .then((response) => {
                // Lide com a resposta do servidor aqui
                console.log(response);

                // Redirecione ou faça outras ações após o login bem-sucedido
            })
            .catch((error) => {
                // Lide com erros aqui
                console.error(error);
            });
    };


  return(
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleLogin}>
            <span className="login-form-title">
              <img src={logoIGM} alt="mercado"/>
            </span>
             <span className="login-form-title">Login</span>

            <div className="wrap-input"> E-mail:
                <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
              <span clasName="focus-input" name= "" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input "> Senha:
                <input
                    className="input"
                    name=""
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

              <span
               clasName="focus-input" ></span>
            </div>

              <div className="wrap-input">
                  <button className="login-form-btn" type="submit">
                      Continuar
                  </button>
              </div>

            <div className="text-center">
              <span className ="txt1">Não possui conta?</span>

              <Link to="/cadastro" className="txt2">Cadastre-se</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;