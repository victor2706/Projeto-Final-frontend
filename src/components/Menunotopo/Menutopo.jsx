import "./menutopo.scss"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';

const Menutopo = () => {
  return (
    <div className='menutopo'>
      <div className="wrapper">
        <div className="procurar">
          <input type="text" placeholder="procurando..."/>
          <SearchSharpIcon/>
        </div>
      </div>
    </div>
  )
}

export default Menutopo