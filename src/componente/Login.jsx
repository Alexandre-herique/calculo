import React from "react";

import { Link } from "react-router-dom";

import './Login.css';


function Login () {

        return (
            // <BrowserRouter>
            
                <>
                    <div className="login">        
                        <div className="card1">
                            <h1> Login</h1>
                            <form>
                                <h3>Usuario</h3>
                                <input type="text" name="Nome" placeholder="Insira o nome de usuario" />
                                <h3>Senha</h3>
                                <input type="password" name="Senha" placeholder="Insira a senha" />
                                <Link to="/dashbord" className="Next">
                                    <button className="Next">Logar</button>
                                </Link>
                                <p>Esqueceu sua senha?</p><br/>
                                <p>Não possui uma conta?</p>
                            </form>
                        </div>
                    </div>
                </>
            // </BrowserRouter>
        );          
}

export default Login;