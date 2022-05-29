import "./Login.scss"
import { useContext, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../../contexto/AuthContexto";

const Login = () => {

  const [error, setErrado] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()
  
  const{} = useContext(AuthContext)

  const haldleLogin = (e)=>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navitage("/")
      })
      .catch((error) => {
        setErrado(true)
      });
    }
return (
    <div className="Login">
      <form onSubmit={haldleLogin}>
        <p>DashBoard - VICTOR</p>
        <input type="EMAIL" placeholder="EMAIL" onChange={e=>setEmail(e.target.value)}/>
        <input type="PASSWORD" placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        {error && <span>E-MAIL OU SENHA INCORRETOS</span>}
      </form>
    </div>
  )
}

export default Login