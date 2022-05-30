import "./ferramentas.scss"
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import PriceCheckSharpIcon from '@mui/icons-material/PriceCheckSharp';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

const Ferramentas = ({ type }) => {
    let data;

    //temporario

    const conta = 100;
    const diferenca = 20;

    switch(type){
        case "Usuários":
        data = {
            title:"Usuários",
            isMoney:false,
            link: "Usuários cadastrados",
            icon: <PersonOutlineSharpIcon className="icon" 
            style={{color: "goldenrod",backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />

        };
        break;
        case "Produtos":
        data = {
            title:"Produtos",
            isMoney:false,
            link: "Produtos cadastrados",
            icon: <ProductionQuantityLimitsSharpIcon className="icon" style={{color: "goldenrod",backgroundColor: "rgba(218, 165, 32, 0.2)",
        }}/>
        };
        break;
        case "Lojas":
        data = {
            title:"Lojas",
            isMoney:false,
            link: "Quantidade de Lojas",
            icon: <PriceCheckSharpIcon className="icon" style={{color: "goldenrod",backgroundColor: "rgba(218, 165, 32, 0.2)",}}/>
        };
        break;
        case "Fornecedores":
        data = {
            title:"Fornecedores",
            isMoney:false,
            link: "Total de Fornecedores",
            icon: <LocalShippingSharpIcon className="icon" style={{color: "goldenrod",backgroundColor: "rgba(218, 165, 32, 0.2)",
        }}/>
        };
        break;
        case "Envios":
        data={
            title:"Envios",
            isMoney:false,
            link: "Total de Envios",
            icon: <AccountCircleSharpIcon className="icon" style={{color: "goldenrod",backgroundColor: "rgba(218, 165, 32, 0.2)",
        }}/>
        };
        break;
      default:
          break;

    }
  return (
    <div className="ferramentas">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {conta}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            {data.icon}
        </div>
    </div>
  )
}

export default Ferramentas