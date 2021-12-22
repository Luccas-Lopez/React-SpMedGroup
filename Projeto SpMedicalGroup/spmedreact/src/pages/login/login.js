import { Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import "../../assets/css/login_style.css";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'mariana@email.com',
            senha: '777',
            erroMensagem: '',
            isLoading: false,
        };
    }

    // Função que faz a chamada para a API para realiza o login
    efetuaLogin = (event) => {
        // ignora o comportamento padrão do navegador (recarregar a página, por exemplo)
        event.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        axios
            .post('http://localhost:5000/api/Login', {
                email: this.state.email,
                senha: this.state.senha,
            })

            .then((resposta) => {

                if (resposta.status === 200) {

                    localStorage.setItem('usuario-login', resposta.data.token);
                    // e define que a requisição terminou
                    this.setState({ isLoading: false });

                    let base64 = localStorage.getItem('usuario-login').split('.')[1];
                    console.log(base64);

                    console.log(this.props);

                    if (parseJwt().role === '1', '2', '3') {
                        this.props.history.push('/');
                        console.log('estou logado: ' + usuarioAutenticado());
                    }
                }
            })
            .catch(() => {
                this.setState({
                    erroMensagem: 'E-mail e/ou senha inválidos!',
                    isLoading: false,
                });
            });
    };

    atualizaStateCampo = (campo) => {

        this.setState({ [campo.target.name]: campo.target.value });
        
    };

    render() {
        return (
            < div >
                <main className="main_l">
                    <section>
                        <div className="ilustration-login"></div>
                        <div className="box_form">
                            <div className="container_form">
                                <h1>Login</h1>
                                <form onSubmit={this.efetuaLogin} >
                                    <div className="inputs">
                                        <label htmlFor="email">email</label>
                                        <input
                                            value={this.state.email}
                                            onChange={this.atualizaStateCampo}
                                            name="email"
                                            placeholder="Insiria um Email válido..."
                                            type="email"
                                        />
                                    </div>
                                    <div className="inputs">
                                        <label htmlFor="senha">senha</label>
                                        <input
                                             value={this.state.senha}
                                             onChange={this.atualizaStateCampo}
                                            name="senha"
                                            placeholder="Digite sua senha..."
                                            type="password"
                                        />
                                    </div>
                                    <button type="submit" >logar</button>
                                </form>
                                <div className="options_form">
                                    <div className="mark">
                                        <input
                                            name="conect"
                                            placeholder="Matenha-me conectado"
                                            type="checkbox"
                                        />
                                        <label htmlFor="conect">Mantenha-me conectado</label>
                                    </div>
                                    <a>Esqueceu sua senha?</a>
                                </div>
                                <div className="ou">
                                    <hr />
                                    <p>ou</p>
                                    <hr />
                                </div>
                                <button className="login_google">
                                    Entrar com o Google
                                    <img src="../../assets/img/google.png" />
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div >
        );
    }
}




