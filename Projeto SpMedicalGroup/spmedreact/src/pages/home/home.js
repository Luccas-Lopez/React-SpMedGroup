import "../../assets/css/style.css";

import Header from "../../components/header";

import Footer from "../../components/footer";

import objetivo from "../../assets/img/Objetivo.png"

import prancheta from "../../assets/img/prancheta.png"

import clinicas from "../../assets/img/clinicas.png"

export default function home() {

    return (
        <div className="cor-erro">
            <Header />
            <main>
                <section className="container cards_container">
                    <div className="box_cards">
                        <article>
                            <img src={prancheta} alt />
                            <span>Agendamentos</span>
                        </article>
                        <article>
                            <img src={objetivo} alt />
                            <span>Objetivo</span>
                        </article>
                        <article>
                            <img src={clinicas} alt />
                            <span>Clínicas</span>
                        </article>
                    </div>
                </section>
                  <section className="sobre">
                    <div className="container box_sobre">
                        <h1>Lore Ipsum</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                            lobortis velit pretium accumsan nibh purus bibendum sit. Mi integer eu
                            morbi faucibus. Nisi ultricies egestas fermentum turpis tincidunt mauris
                            sed. Ultrices nulla massa tempus, nibh auctor mi varius feugiat. Nadin.
                        </p>
                    </div>
                </section>  
                {/* <section className="clínicas">
                    <div className="container">
                        <h1>Clínicas Afiliadas</h1>
                        <div className="line_1">
                            <div className="contorno">
                                <div className="nome_clinica">
                                    <hr />
                                    <span>Clínica Nome</span>
                                </div>
                            </div>
                            <div className="contorno_2">
                                <div className="nome_clinica">
                                    <hr />
                                    <span>Clínica Nome</span>
                                </div>
                            </div>
                            <div className="contorno_3">
                                <div className="nome_clinica">
                                    <hr />
                                    <span>Clínica Nome</span>
                                </div>
                            </div>
                        </div>
                        <div className="line_1">
                            <div className="contorno">
                                <div className="nome_clinica">
                                    <hr />
                                    <span>Clínica Nome</span>
                                </div>
                            </div>
                            <div className="contorno_2">
                                <div className="nome_clinica">
                                    <hr />
                                    <span>Clínica Nome</span>
                                </div>
                            </div>
                            <div className="contorno_3">
                                <div className="nome_clinica">
                                    <hr />
                                    <span>Clínica Nome</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="duvidas">
                    <div className="box_duvidas">
                        <img className="ilustracao" src="assets/ilustration.svg" alt />
                        <hr />
                        <div>
                            <h1>Dúvidas</h1>
                            <div className="duvidas_frequentes">
                                <div className="duvidas_line">
                                    <span>• Lore pisum tralala?</span>
                                    <button>
                                        {" "}
                                        <img src="assets/setinha.png" alt />
                                    </button>
                                </div>
                                <hr />
                                <div className="duvidas_line">
                                    <span>• Lore pisum tralala?</span>
                                    <button>
                                        {" "}
                                        <img src="assets/setinha.png" alt />
                                    </button>
                                </div>
                                <hr />
                                <div className="duvidas_line">
                                    <span>• Lore pisum tralala?</span>
                                    <button>
                                        {" "}
                                        <img src="assets/setinha.png" alt />
                                    </button>
                                </div>
                                <hr />
                                <div className="duvidas_line">
                                    <span>• Lore pisum tralala?</span>
                                    <button>
                                        {" "}
                                        <img src="assets/setinha.png" alt />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="final_message">
                    <div className="container_message">
                        <span>nos esforçamos pela sua praticidade ao cuidar da sua saúde!</span>
                    </div>
                </section>  */}
            </main>
            <Footer />
        </div>
    )
};