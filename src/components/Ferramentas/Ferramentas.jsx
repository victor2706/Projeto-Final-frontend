import "./ferramentas.scss"
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';

const Ferramentas = ({ type }) => {

    let data;

    switch(type){
        case "Usuários":

            data = {
                title:"Usuários",
                isMoney: false,
                link:"see alll users",
                icons: <PersonOutlineSharpIcon className="icon"/>
            };
            break;
            case "Produtos":

                data = {
                    title:"Produtos",
                    isMoney: false,
                    link:"see alll users",
                    icons: <PersonOutlineSharpIcon className="icon"/>
                };
                break;
                case "user":
    
                    data = {
                        title:"Usuários",
                        isMoney: false,
                        link:"see alll users",
                        icons: <PersonOutlineSharpIcon className="icon"/>
                    };
            default:break;
    }

  return (
    <div className="ferramentas">
        <div className="left">
            <span className="title">Usuários</span>
            <span className="counter">12345</span>
            <span className="link">see all user</span>
        </div>
        <div className="right">
            <div className="porcentagem positivo">
                <ArrowUpwardSharpIcon/>
                20 %
            </div>
            <PersonOutlineSharpIcon className="icon"/>
        </div>
    </div>
  )
}

export default Ferramentas