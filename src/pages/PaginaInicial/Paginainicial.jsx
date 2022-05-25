import "./Paginainicial.scss"
import Menulat from "../../components/MenuLateral/Menulat";
import Menutopo from "../../components/Menunotopo/Menutopo";

const Paginainicial = () => {
  return (
    <div className="paginainicial">
        <Menulat />
        <div className="paginainicialContainer">
          <Menutopo />
          container new
        </div>
    </div>
  )
}

export default Paginainicial