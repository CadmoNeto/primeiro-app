import React, { useEffect, useState } from "react";
import "./style.css"
import RegistrarJogadores from "./componentes/RegistrarJogadores";

// https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadAPI(params) {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setNutri(json);
      })
    }

    loadAPI();

  }, []);

  return(
    // <div className="container">
    //   <header>
    //     <strong>React Nutri</strong>
    //   </header>

    //   {nutri.map((item) => {
    //     return(
    //       <article key={item.id} className="post">
    //         <strong>{item.titulo}</strong>
    //         <img src={item.capa} alt={item.titulo} className="capa" />
    //         <p className="subtitulo">
    //           {item.subtitulo}
    //         </p>
    //         <a className="botao">Acessar</a>
    //       </article>
    //     );
    //   })}

    // </div>
    <div>

      <RegistrarJogadores/>
    </div>
  );
}

export default App;