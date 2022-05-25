import { BrowserRouter, Route, Routes } from "react-router-dom";
import Paginainicial from "./pages/PaginaInicial/Paginainicial";
import Login from "./pages/Login/Login";
import Lista from "./pages/Lista/Lista";
import Mais from "./pages/Mais/Mais";
import Novo from "./pages/Novo/Novo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route pat="/">
            <Route index element={ <Paginainicial />} />
            <Route path="Login" element={<Login />} />
            <Route path="usuarios">
              <Route index element={<Lista/>} />
              <Route path=":usuarioId" element={<Mais/>} />
              <Route path="novo" element={<Novo/>}/>
            </Route>
            <Route path="produtos">
            <Route index element={<Lista/>} />
              <Route path=":produtoId" element={<Mais/>} />
              <Route path="novo" element={<Novo/>}/>
            </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
