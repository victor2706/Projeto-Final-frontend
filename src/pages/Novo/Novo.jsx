import "./Novo.scss"
import MenuLat from "../../components/MenuLateral/Menulat"
import Menunotopo from "../../components/Menunotopo/Menutopo"
import FileUploadSharpIcon from '@mui/icons-material/FileUploadSharp';
import { useState } from "react";

const Novo = ({inputs, title}) => {

  const [file, setFile] = useState("");

  console.log(file)

  return (
    <div className="novo">
      <MenuLat />
      <div className="novoContainer">
        <Menunotopo />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src= {
              file 
              ? URL.createObjectURL(file) 
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
            alt="" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor="file">
                  Imagem: <FileUploadSharpIcon className="icon" />
                </label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])}
                style={{display:"none"}}/>
              </div>

              {inputs.map((input) =>(
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Novo