import { useState, useEffect } from 'react';
import axios from 'axios';

import api from "../../services/api"

import HeaderPages from '../../components/header_pages';
import Footer from '../../components/footer';

import "../../assets/css/cadstro_style.css"

export default function CadastrarConsultas() {

    const [listaMedicos, setListaMedicos] = useState([]);
    const [listaPacientes, setListaPacientes] = useState([]);
    const [idPaciente, setIdPaciente] = useState(0);
    const [idMedico, setIdMedico] = useState(0);
    const [data, setData] = useState(new Date())

    function BuscarMedicos() {
        api.get('/Medicos', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('medicos buscados')
                    setListaMedicos(response.data)
                }
            }).catch(erro => {
                console.log(erro)
            })
    }

    function BuscarPacientes() {
        api.get('/Pacientes', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('paciente buscados')
                    setListaPacientes(response.data)
                }
            }).catch(erro => {
                console.log(erro)
            })
    }


    let consulta = {
        idPaciente: idPaciente,
        idMedico: idMedico,
        dataConsulta: data
    }

    function CadastrarConsutla(event) {
        event.preventDefault();
        api.post('/Consulta', consulta, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(response => {
                if (response.status === 201) {
                    console.log('Consulta agendada')
                    setIdPaciente(0);
                    setData(new Date());
                    setIdMedico(0)
                }
            }).catch(erro => { console.log(erro) })
    }

    useEffect(BuscarMedicos, [])
    useEffect(BuscarPacientes, [])

    return (
        <div>
            <HeaderPages />
            <main className="main_c">
                <div className="box_cadastro">
                    <div className="title">
                        <h1>Nova Consulta</h1>
                    </div>
                    <div className="form">
                        <form onSubmit={CadastrarConsutla} action>
                            <select onChange={(campo) => setIdMedico(campo.target.value)} value={idMedico} id='select_medico' name="medico">
                                <option value="0">Selecione o médico</option>

                                {listaMedicos.map(medico => {
                                    return (
                                        <option key={medico.idMedico} value={medico.idMedico}>{medico.nomeMedico}</option>
                                    )
                                })}
                            </select>
                            <select onChange={(campo) => setIdPaciente(campo.target.value)} value={idPaciente} id='select_paciente' name="paciente">
                                    <option value="0">Selecione o paciente</option>
                                    {listaPacientes.map(paciente => {
                                        return (
                                            <option value={paciente.idPaciente}>{paciente.nomePaciente}</option>
                                        )
                                    })}
                                </select>
                            <label htmlFor="data">Data Consulta</label>
                            <input name="data" type="text" />
                        </form>
                        <div className="descricao">
                            <label htmlFor="descricao">Insira uma Descrição</label>
                            <textarea name="descricao" id cols={30} rows={10} defaultValue={""} />
                        </div>
                        <button type="submit">Confirmar Cadastro</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
