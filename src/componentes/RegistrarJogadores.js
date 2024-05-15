import { useEffect, useState } from "react";
import "./RegistrarJogadores.css"

function RegistrarJogadores() {
    const [nome, setNome] = useState('');
    const [geral, setGeral] = useState('');
    const [recepcao, setRecepcao] = useState('');
    const [levantamento, setLevantamento] = useState('');
    const [ataque, setAtaque] = useState('');
    const [bloqueio, setBloqueio] = useState('');
    const [posicao, setPosicao] = useState('');
    const [jogador, setJogador] = useState({});
    const posicoes = ['Levantador', 'Ponteiro', 'Oposto', 'Central', 'Líbero'];

    useEffect(() => {
        console.log(jogador);
    }, [jogador]);

    useEffect(() => {
        if (recepcao !== 0 && levantamento !== 0 && ataque !== 0 && bloqueio !== 0 && posicao !== '') {
            getGeral();
        }
    }, [recepcao, levantamento, ataque, bloqueio, posicao]);

    function getGeral() {
        let x = 0;

        switch (posicao) {
            case 'Levantador':
                x = Math.round((recepcao * 2) + (levantamento * 5) + (ataque) + (bloqueio * 2)) / 10
                break;
            case 'Ponteiro':
                x = Math.round((recepcao * 3) + (levantamento * 2) + (ataque * 3) + (bloqueio * 2)) / 10
                break;
            case 'Oposto':
                x = Math.round((recepcao) + (levantamento) + (ataque * 6) + (bloqueio * 2)) / 10
                break;
            case 'Central':
                x = Math.round((recepcao) + (levantamento) + (ataque * 2) + (bloqueio * 6)) / 10
                break;
            case 'Líbero':
                x = Math.round((recepcao * 6) + (levantamento * 4)) / 10
                break;
            default:
                break;
        }
        setGeral(x);
    }

    function handlerSubmit(e) {
        e.preventDefault();

        // getGeral();

        setJogador(prevState => ({
            ...prevState,
            nome: nome,
            geral: geral,
            recepcao: recepcao,
            levantamento: levantamento,
            ataque: ataque,
            bloqueio: bloqueio,
            posicao: posicao
        }));
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
                        onChange={(e) => setNome(e.target.value)}
                    /><br/><br/>

                    <label><strong>Nível de Recepção do Jogador:</strong></label>
                    <input
                        required
                        placeholder="0 - 99"
                        maxLength={2}
                        value={recepcao}
                        onChange={(e) => {
                            const valor = e.target.value.replace(/\D/g, '');
                            setRecepcao(valor);
                        }}
                    /><br/><br/>

                    <label><strong>Nível de Levantamento do Jogador:</strong></label>
                    <input
                        required
                        placeholder="0 - 99"
                        min={0}
                        max={99}
                        onChange={(e) => {
                            const valor = e.target.value.replace(/\D/g, '');
                            setLevantamento(e.target.value)
                        }}
                    /><br/><br/>

                    <label><strong>Nível de Ataque do Jogador:</strong></label>
                    <input
                        required
                        placeholder="0 - 99"
                        min={0}
                        max={99}
                        onChange={(e) => {
                            const valor = e.target.value.replace(/\D/g, '');
                            setAtaque(e.target.value)
                        }}
                    /><br/><br/>

                    <label><strong>Nível de Bloqueio do Jogador:</strong></label>
                    <input
                        required
                        placeholder="0 - 99"
                        min={0}
                        max={99}
                        onChange={(e) => {
                            const valor = e.target.value.replace(/\D/g, '');
                            setBloqueio(e.target.value)
                        }}
                    /><br/><br/>

                    <label><strong>Posição do Jogador:</strong></label>
                    <select
                        required
                        onChange={(e) => setPosicao(e.target.value)}
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