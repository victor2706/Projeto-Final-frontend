import GridViewIcon from '@mui/icons-material/GridView';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import PriceCheckSharpIcon from '@mui/icons-material/PriceCheckSharp';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import StoreMallDirectorySharpIcon from '@mui/icons-material/StoreMallDirectorySharp';
import "./menulat.scss"
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../contexto/negromodocontexto';
import { useContext } from 'react';

const MenuLat = () => {
  const { dispatch } = useContext (DarkModeContext);
  return (
    <div className='menulat'>
      <div className="top">
        <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">NEW DASHBOARD</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className='alterar'>Painel Principal</p>
          <li><GridViewIcon className='icon'/>
          <span>Dashboard</span>
          </li>
          <p className='alterar'>Lista</p>
          <Link to="/usuarios" style={{textDecoration: "none"}}>
          <li><PeopleAltIcon className='icon'/>
          <span>Usuários</span>
          </li>
          </Link>
          <li><ProductionQuantityLimitsSharpIcon className='icon'/>
          <span>Cadastro de Produtos</span>
          <Link to="/produtos" style={{textDecoration: "none"}}></Link>
          </li>
          <Link to="/Lojas" style={{textDecoration: "none"}}>
          <li><StoreMallDirectorySharpIcon className='icon'/>
          <span>Cadastro de Lojas</span>
          </li>
          </Link>
          <Link to="/fornecedor" style={{textDecoration: "none"}}>
          <li><PriceCheckSharpIcon className='icon'/>
          <span>Cadastro de Fornecedores</span>
          </li>
          </Link>
          <Link to="/Envios" style={{textDecoration: "none"}}>
          <li><LocalShippingSharpIcon className='icon'/>
          <span>Cadastro de Envios</span>
          </li>
          </Link>
          <p className='alterar'>Usuário</p>
          <li><AccountCircleSharpIcon className='icon'/>
          <span>Perfil</span>
          </li>
          <li><ExitToAppSharpIcon className='icon'/>
          <span>Sair</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className='opcaodecores' onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className='opcaodecores' onClick={()=> dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default MenuLat