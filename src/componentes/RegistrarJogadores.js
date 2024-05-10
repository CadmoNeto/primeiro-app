import { useEffect, useState } from "react";
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
    const posicoes = ['Levantador', 'Ponteiro', 'Oposto', 'Central', 'Líbero'];

    useEffect( () => {

        async function getGeral() {
            let x = 0;

            switch (posicao) {
                case 'Levantador':
                    x = ((recepcao * 2) + (levantamento * 5) + (ataque) + (bloqueio * 2)) / 10
                    break;
                case 'Ponteiro':
                    x = ((recepcao * 3) + (levantamento * 2) + (ataque * 3) + (bloqueio * 2)) / 10
                    break;
                case 'Oposto':
                    x = ((recepcao) + (levantamento) + (ataque * 6) + (bloqueio * 2)) / 10
                    break;
                case 'Central':
                    x = ((recepcao) + (levantamento) + (ataque * 2) + (bloqueio * 6)) / 10
                    break;
                case 'Líbero':
                    x = ((recepcao * 6) + (levantamento * 4)) / 10
                    break;
                default:
                    break;
            }
            setGeral(x);
        }

        if (posicao){
            getGeral();
        }

    }, [recepcao, levantamento, ataque, bloqueio, posicao] )

    async function handlerSubmit(e) {
        e.preventDefault();

        await setJogador({
            nome: nome,
            geral: geral,
            recepcao: recepcao,
            levantamento: levantamento,
            ataque: ataque,
            bloqueio: bloqueio,
            posicao: posicao
        });
        console.log(jogador)
    }

    return(
        <div>
            <header>
                <strong className="titulo">Cadastro de Jogadores</strong>
            </header>
            <div className="container">
                <form onSubmit={handlerSubmit}>
                    <label><strong>Nome do Jogador:</strong></label>
                    <input
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    /><br/><br/>

                    <label><strong>Nível de Recepção do Jogador:</strong></label>
                    <input
                        required
                        placeholder="0 - 99"
                        value={recepcao}
                        onChange={(e) => setRecepcao(e.target.value)}
                    /><br/><br/>

                    <label><strong>Nível de Levantamento do Jogador:</strong></label>
                    <input
                        required
                        placeholder="0 - 99"
                        value={levantamento}
                        onChange={(e) => setLevantamento(e.target.value)}
                    /><br/><br/>

                    <label><strong>Nível de Ataque do Jogador:</strong></label>
                    <input
                        required
                        placeholder="0 - 99"
                        value={ataque}
                        onChange={(e) => setAtaque(e.target.value)}
                    /><br/><br/>

                    <label><strong>Nível de Bloqueio do Jogador:</strong></label>
                    <input
                        required
                        placeholder="0 - 99"
                        value={bloqueio}
                        onChange={(e) => setBloqueio(e.target.value)}
                    /><br/><br/>

                    <label><strong>Posição do Jogador:</strong></label>
                    <select
                        required
                        name="posicao"
                        onChange={(e) => {
                            setPosicao(e.target.value);
                            console.log({posicao})
                        }}
                    >
                        <option value={''}></option>
                        {posicoes.map((item, index) => {
                            return(
                                <option value={item} key={index}>{item}</option>
                            );
                        })}
                    </select><br/><br/>

                    <button className="botao" type="submit">Registrar Jogador</button>
                </form>
            </div>
        </div>
    );
}

export default RegistrarJogadores;