import HeaderPages from "../../components/header_pages";

import ilustrationFunc from "../../assets/img/undraw_Notes_re_pxhw.svg"

import cadastroIlustration from "../../assets/img/cadastro_novo_ilustration.png"

import iconHome from "../../assets/img/house.png"

import Footer from "../../components/footer";


import "../../assets/css/func_adm_style.css";


export default function funcionalidades() {

    return (
        <div>
            <HeaderPages />
            <main>
                <div className="container posicao">
                    <div>
                        <h1>perfil de administrador</h1>
                        <p>(usuario nome sobrenome)</p>
                    </div>
                    <button>
                        <img src={iconHome} />
                        Início
                    </button>
                </div>
                <div className="container posicao_articles">
                    <img className="img_1" src={ilustrationFunc} />
                    <article className="article_1">ver consultas cadastradas</article>
                    <img className="img_2" src={cadastroIlustration} />
                    <article className="article_2">cadastrar nova consulta</article>
                </div>
            </main>
            <Footer />
        </div>



    )
};
