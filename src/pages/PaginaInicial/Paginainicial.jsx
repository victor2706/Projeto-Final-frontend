import "./Paginainicial.scss"
import Menulat from "../../components/MenuLateral/Menulat";
import Menutopo from "../../components/Menunotopo/Menutopo";
import Ferramentas from "../../components/Ferramentas/Ferramentas";
import Tabela from "../../components/Tabela/Tabela";

const Paginainicial = () => {
  return (
    <div className="paginainicial">
        <Menulat />
        <div className="paginainicialContainer">
          <Menutopo />
          <div className="ferramentas">
            <Ferramentas type="Usuários"/>
            <Ferramentas type="Produtos"/>
            <Ferramentas type="Lojas"/>
            <Ferramentas type="Fornecedores"/>
            <Ferramentas type="Envios"/>
          </div>
          <div className="ListaContainer">
            <div className="ListaTitle">Tabela de Produtos</div>
            <Tabela/>
          </div>
        </div>
    </div>
  );
};

export default Paginainicial