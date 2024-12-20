import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import RepoList from "./components/ReposList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [ nomeUsuario, setNomeUsuario] = useState('')



  return(
    <div>
      <ul>
          <input placeholder="Digite seu login Github"  type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      </ul>
      {nomeUsuario.length > 4 && (
        <div>
          <Perfil nomeUsuario={nomeUsuario}/>
          <RepoList nomeUsuario={nomeUsuario}/>
        </div>
      )}

      {/* {formularioEstaVisivel && (   
        <Formulario/>
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>Click Aqui</button>*/}
    </div>
  )
}



export default App
