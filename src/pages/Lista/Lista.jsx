import "./Lista.scss"
import MenuLat from "../../components/MenuLateral/Menulat"
import Menunotopo from "../../components/Menunotopo/Menutopo"
import Tabeladados from "../../components/tabeladedados/Tabeladados"


const Lista = () => {
  return (
    <div className="Lista">
      <MenuLat/>
      <div className="ListaContainer">
        <Menunotopo/>
        <Tabeladados/>
      </div>
    </div>
  )
}

export default Lista