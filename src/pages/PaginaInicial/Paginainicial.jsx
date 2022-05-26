import "./Paginainicial.scss"
import Menulat from "../../components/MenuLateral/Menulat";
import Menutopo from "../../components/Menunotopo/Menutopo";
import Ferramentas from "../../components/Ferramentas/Ferramentas";

const Paginainicial = () => {
  return (
    <div className="paginainicial">
        <Menulat />
        <div className="paginainicialContainer">
          <Menutopo />
          <div className="ferramentas">
            <Ferramentas type="Usuários"/>
            <Ferramentas type="Produtos"/>
            <Ferramentas type="Lojas Ordens de compra"/>
            <Ferramentas type="ordens de compras"/>
            <Ferramentas type="Delivery"/>
          </div>
          <div className="graficos">

          </div>
        </div>
    </div>
  )
}

export default Paginainicial