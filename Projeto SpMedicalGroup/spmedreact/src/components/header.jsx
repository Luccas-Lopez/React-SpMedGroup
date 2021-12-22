import "../assets/css/style.css";

import SpMedLogo from "../assets/img/SpMedGroup.png";

import perfilIcon from "../assets/img/perfil.png";

import searchIcon from "../assets/img/Vector.png";

import { Link } from "react-router-dom";



export default function Header() {
    return (
        <div>
            <header className="header">
                <div className=" container  container_header">
                    <div>
                        <div className="logo-conta">
                            <a href>
                                <img className="logo" src={SpMedLogo} alt />
                            </a>
                            <div className="conta">
                                <a>Minha Conta </a>
                                <div className="perfil">
                                    <div className="borda">
                                        <img href src={perfilIcon} alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav>
                            <div className="links_div">

                                <a href="#" className="links">
                                    Home
                                </a>
                                <a href="#" className="links">
                                    Clínicas
                                </a>
                                <Link className="link" to="/funcionalidades" >
                                    <a href="#" className="links">
                                        Consultas
                                    </a>
                                </Link>
                            </div>
                            <div className="input_pesquisa">
                                <input placeholder="Pesquisar clínicas próximas..." type="search" />
                                <button type="sumbit">
                                    {" "}
                                    <img src={searchIcon} />
                                </button>
                            </div>
                        </nav>
                    </div>
                    <div className="mensagem_login container">
                        <h1>
                            AGENDE <span>CONSULTAS</span> DE FORMA <span>RÁPIDA E FÁCIL</span>, NAS
                            CLÍNICAS MAIS PRÓXIMAS DE VOCÊ.
                        </h1>
                    </div>
                    <div className="sign_buttons_box">
                        <div className="sign_buttons">
                            <a className="sign_up">cadastre-se</a>
                            <hr />
                            <Link className="sign_in"
                                to="/login">
                                fazer login {/* <a ></a> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};