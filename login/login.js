import React from "react"
import "./fedi.css"
import Google from "./R.jfif"
import Facebook from "./fb.png"
import Twitter from "./R.png"
import Password from "./password.png"
import User from "./user.png"
import { Link } from "react-router-dom"
export const Fedi =()=>{
    return(
        <div className="login">
              <div className="login-back">
              </div>
               <h3 className="login-header">Let's start!</h3>
               <div className="login-email">
                <input type="email" name="email" placeholder="username/email"/>
                <img src={User} alt="user" />
               </div>
               <div className="login-password">
               <input type="password" name="password" placeholder="password"/>
                    <img src={Password} alt="secure" />
               </div>
               <button className="create-account">Create account</button>
               <div className="Se-connect">
               J'ai déjà un compte <Link to="/login">Cliquer ici pour s'enregistrer</Link>
               </div>
           <div className="other-login-solution">
               <img src={Facebook} alt="facebook" />
              <img src={Twitter} alt="google" />
               <img src={Google} alt="google" />
           </div>
        </div>
    )
}