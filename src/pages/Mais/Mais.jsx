import "./Mais.scss"
import MenuLat from "../../components/MenuLateral/Menulat"
import Menunotopo from "../../components/Menunotopo/Menutopo"
import Lista from "../../components/Tabela/Tabela"

const Mais = () => {
  return (
    <div className="maisstyle">
      <MenuLat />
      <div className="maisContainer">
        <Menunotopo />
        <div className="top">
          <div className="left">
            <div className="editButton">Editar</div>
            <h1 className="title">Informações</h1>
            <div className="item">
              <img 
              src="https://images.pexels.com/photos/1999504/pexels-photo-1999504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
              alt="" 
              className="itemImg" 
              />
              <div className="detalhes">
                <h1 className="itemTitle">Marina Alvez</h1>
                <div className="dataiLItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemKey"> Alvez@gmail.com</span>
                </div>
                <div className="dataiLItem">
                  <span className="itemKey">telefone:</span>
                  <span className="itemKey">  61 9745 8789</span>
                </div>
                <div className="dataiLItem">
                  <span className="itemKey">Endereço:</span>
                  <span className="itemKey">  Qnn3 conjunto J casa 27 Ceilândia Norte</span>
                </div>
                <div className="dataiLItem">
                  <span className="itemKey">Pais:</span>
                  <span className="itemKey">  Brazil</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
          <div className="bottom">
          <h1 className="title">Tabela de Produtos</h1>
            <Lista />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mais