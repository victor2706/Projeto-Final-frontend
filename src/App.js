import { BrowserRouter, Route, Routes } from "react-router-dom";
import Paginainicial from "./pages/PaginaInicial/Paginainicial";
import Login from "./pages/Login/Login";
import Lista from "./pages/Lista/Lista";
import Mais from "./pages/Mais/Mais";
import New from "./pages/Novo/Novo";
import { EnviosInputs, FornecedorInputs, LojasInputs, ProdutosInputs, usuariosInputs } from "./formSource";
import "./ModoNot/negro.scss"
import { useContext, useState } from "react";
import { DarkModeContext } from "./contexto/negromodocontexto";

function App() {

  const {darkMode} = useContext (DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={ <Paginainicial/>} />
            <Route path="Login" element={<Login />}/>
            <Route path="usuarios">
              <Route index element={<Lista/>} />
              <Route path=":usuarioId" element={<Mais/>} />
              <Route
                path="Novo"
                element={<New inputs={usuariosInputs} title="Adicione um novo Usuário..." />}
              />
            </Route>
            <Route path="produtos">
            <Route index element={<Lista/>} />
              <Route path=":produtoId" element={<Mais/>} />
              <Route
                path="Novo"
                element={<New inputs={ProdutosInputs} title="Adicine um novo produto..." />}
              />
            </Route>
            <Route path="Lojas">
            <Route index element={<Lista/>} />
              <Route path=":lojaId" element={<Mais/>} />
              <Route
                path="Novo"
                element={<New inputs={LojasInputs} title="Adicione uma nova Loja..." />}
              />
            </Route>
            <Route path="fornecedor">
            <Route index element={<Lista/>} />
              <Route path=":fornecedorId" element={<Mais/>} />
              <Route
                path="Novo"
                element={<New inputs={FornecedorInputs} title="Adicione os fornecedores do Produto...." />}
              />
            </Route>
            <Route path="Envios">
            <Route index element={<Lista/>} />
              <Route path=":EnviosId" element={<Mais/>} />
              <Route
                path="Novo"
                element={<New inputs={EnviosInputs} title="Adicione a data de envio e o valor do frete..." />}
              />
            </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
