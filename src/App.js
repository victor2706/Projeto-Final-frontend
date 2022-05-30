import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Paginainicial from "./pages/PaginaInicial/Paginainicial";
import Login from "./pages/Login/Login";
import Lista from "./pages/Lista/Lista";
import Mais from "./pages/Mais/Mais";
import New from "./pages/Novo/Novo";
import { EnviosInputs, FornecedorInputs, LojasInputs, ProdutosInputs, usuariosInputs } from "./formSource";
import "./ModoNot/negro.scss"
import { useContext, useState } from "react";
import { DarkModeContext } from "./contexto/negromodocontexto";
import { AuthContext } from "./contexto/AuthContexto";

function App() {

  const {darkMode} = useContext (DarkModeContext);

  const{currentUser} = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  };

  console.log(currentUser)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="Login" element={<Login />}/>
            <Route index element={<RequireAuth><Paginainicial/></RequireAuth>} />
            <Route path="usuarios">
              <Route index element={<RequireAuth><Lista/></RequireAuth>} />
              <Route path=":usuarioId" element={
              <RequireAuth>
                <Mais/>
                </RequireAuth>
              } />
              <Route
                path="Novo"
                element={<RequireAuth><New inputs={usuariosInputs} title="Adicione um novo Usuário..." /></RequireAuth>}
              />
            </Route>
            <Route path="produtos">
            <Route index element={<RequireAuth><Lista/></RequireAuth>} />
              <Route path=":produtoId" element={<RequireAuth><Mais/></RequireAuth>} />
              <Route
                path="Novo"
                element={<RequireAuth><New inputs={ProdutosInputs} title="Adicine um novo produto..." /></RequireAuth>}
              />
            </Route>
            <Route path="Lojas">
            <Route index element={<RequireAuth><Lista/></RequireAuth>} />
              <Route path=":lojaId" element={<RequireAuth><Mais/></RequireAuth>} />
              <Route
                path="Novo"
                element={
                <RequireAuth>
                  <New inputs={LojasInputs} title="Adicione uma nova Loja..." />
                  </RequireAuth>
                  }
              />
            </Route>
            <Route path="fornecedor">
            <Route index element={
            <RequireAuth>
              <Lista/>
              </RequireAuth>} 
              />
              <Route path=":fornecedorId" element={
              <RequireAuth>
                <Mais/>
                </RequireAuth>
              } 
              />
              <Route
                path="Novo"
                element={
                <RequireAuth>
                  <New inputs={FornecedorInputs} title="Adicione os fornecedores do Produto...." />
                  </RequireAuth>
                  }
              />
            </Route>
            <Route path="Envios">
            <Route index element={<RequireAuth><Lista/></RequireAuth>} />
              <Route path=":EnviosId" element={<RequireAuth><Mais/></RequireAuth>} />
              <Route
                path="Novo"
                element={
                <RequireAuth>
                  <New inputs={EnviosInputs} title="Adicione a data de envio e o valor do frete..." />
                  </RequireAuth>
                  }
              />
            </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
