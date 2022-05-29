import "./Login.scss"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"

const Login = () => {

  const [error, setErrado] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const haldleLogin = (e)=>{
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        setErrado(true)
      });
    }
return (
    <div className="Login">
      <form onSubmit={haldleLogin}>
        <p>DashBoard - VICTOR</p>
        <input type="email" placeholder='email' onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        {error && <span>E-MAIL OU SENHA INCORRETOS</span>}
      </form>
    </div>
  )
}

export default Login