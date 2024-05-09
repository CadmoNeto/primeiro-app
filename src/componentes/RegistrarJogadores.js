import { useState } from "react";
import "./RegistrarJogadores.css"

function RegistrarJogadores() {
    const [nome, setNome] = useState('');
    const [geral, setGeral] = useState();
    const [recepcao, setRecepcao] = useState();
    const [levantamento, setLevantamento] = useState();
    const [ataque, setAtaque] = useState();
    const [bloqueio, setBloqueio] = useState();
    const [posicao, setPosicao] = useState('');
    const [jogador, setJogador] = useState({});

    function handlePosicao(e){
        e.preventDefault();

        let posicoes = ['Levantador', 'Ponteiro', 'Oposto', 'Central', 'Líbero'];
        
        if (e.target.value != ''){
            setPosicao(posicoes[e.target.value]);
            console.log({posicao});
        }
    }

    function handlerSubmit(e) {
        e.preventDefault();

        setJogador({
            nome: nome,
            geral: geral
        })

    }

    return(
        <div>
            <header>
                <strong className="titulo">Cadastro de Jogadores</strong>
            </header>
            <div className="container">
                <form onSubmit={handlerSubmit}>
                    <input
                        placeholder="Nome" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    /><br/><br/>

                    <input
                        placeholder="Recepção"
                        value={recepcao}
                        onChange={(e) => setRecepcao(e.target.value)}
                    /><br/><br/>

                    <input
                        placeholder="Levantamento"
                        value={levantamento}
                        onChange={(e) => setLevantamento(e.target.value)}
                    /><br/><br/>

                    <input
                        placeholder="Ataque"
                        value={ataque}
                        onChange={(e) => setAtaque(e.target.value)}
                    /><br/><br/>

                    <input
                        placeholder="Bloqueio"
                        value={bloqueio}
                        onChange={(e) => setBloqueio(e.target.value)}
                    /><br/><br/>

                    <select
                        name="posicao"
                        onChange={handlePosicao}
                    >
                        <option value={''}></option>
                        <option value={0}>Levantador</option>
                        <option value={1}>Ponteiro</option>
                        <option value={2}>Oposto</option>
                        <option value={3}>Central</option>
                        <option value={4}>Líbero</option>
                    </select><br/><br/>

                    <button className="botao" type="submit">Registrar Jogador</button>
                </form>
            </div>
        </div>
    );
}

export default RegistrarJogadores;