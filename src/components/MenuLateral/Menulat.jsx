import GridViewIcon from '@mui/icons-material/GridView';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import PriceCheckSharpIcon from '@mui/icons-material/PriceCheckSharp';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import StoreMallDirectorySharpIcon from '@mui/icons-material/StoreMallDirectorySharp';
import "./menulat.scss"


const MenuLat = () => {
  return (
    <div className='menulat'>
      <div className="top">
        <span className="logo">NEW DASHBOARD</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className='alterar'>Painel Principal</p>
          <li><GridViewIcon className='icon'/>
          <span>Dashboard</span>
          </li>
          <p className='alterar'>Lista</p>
          <li><PeopleAltIcon className='icon'/>
          <span>Usuários</span>
          </li>
          <li><ProductionQuantityLimitsSharpIcon className='icon'/>
          <span>Produtos</span>
          </li>
          <li><StoreMallDirectorySharpIcon className='icon'/>
          <span>Lojas</span>
          </li>
          <li><PriceCheckSharpIcon className='icon'/>
          <span>Ordens de Compra</span>
          </li>
          <li><LocalShippingSharpIcon className='icon'/>
          <span>Delivery</span>
          </li>
          <p className='alterar'>Usuário</p>
          <li><AccountCircleSharpIcon className='icon'/>
          <span>Perfil</span>
          </li>
          <li><ExitToAppSharpIcon className='icon'/>
          <span>Sair</span>
          </li>
        </ul>
      </div>
      <div className="bottom">opcões de cores</div>
    </div>
  )
}

export default MenuLat