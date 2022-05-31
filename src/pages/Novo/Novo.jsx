import "./Novo.scss"
import MenuLat from "../../components/MenuLateral/Menulat"
import Menunotopo from "../../components/Menunotopo/Menutopo"
import FileUploadSharpIcon from '@mui/icons-material/FileUploadSharp';
import { useState } from "react";
import {addDoc, collection, doc,serverTimestamp,setDoc, Timestamp} from "firebase/firestore";
import {auth ,db} from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

const Novo = ({inputs, title}) => {

  const [file, setFile] = useState("");
  const [data, setData] = useState({})

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  console.log(data)

  const handleAdd = async (e) => {
    e.preventDefault()
    try{
      const res = await createUserWithEmailAndPassword(
        auth, 
        data.email, 
        data.password
        );
      await setDoc(doc(db, "usuarios", res.usuario.uid), {
        ...data,
      timestamp: serverTimestamp()
    });
  } catch (err) {
    console.log(err);
  }
  };

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
            <form onSubmit={handleAdd}>
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
                  <input
                  id={input.id}
                  type={input.type} 
                  placeholder={input.placeholder} 
                  onChange={handleInput}/>
                </div>
              ))}
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Novo