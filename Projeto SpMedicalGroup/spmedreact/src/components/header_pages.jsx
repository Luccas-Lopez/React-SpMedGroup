import "../assets/css/func_adm_style.css";

import logoSpMed from "../assets/img/logo_spmed.png";

import perfil from "../assets/img/perfil.png";

export default function HeaderPages() {
    return (
        <div>
            <header>
                <div class="container container_header_f">
                    <img src={logoSpMed} />
                    <span>Bem-vindo, Usário Sobrenome </span>
                    <div class="perfil">
                        <div class="borda">
                            <img href="" src={perfil}/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};