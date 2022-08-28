import React from "react";
import "./Navbar.css";
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";


const Navbar=() =>{
    return(
    <>
    <div class="nav">
        <a href="LogoHere">LOGOHERE</a>
      <a class="active" href="#home">Home</a>
      <a href="#about">PAGE NO.1</a>
      <a href="#contact">pAGE NO.2</a>
      <div class="login-container">
          <a href="#login">Signup</a>
          </div>
          <div class="login-containerr">
          <a href="#signup">Login</a>
      </div>
    </div>
    
    
    <div className="main">
    <div className="sub-n">
    <h1>Add picture here</h1>
      </div>      
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
           </div>
         </div>
         <div >
           <h1>Login to your account</h1>
           <div>
            <div className="raj"><button>
              <p>See what is going on in game world</p>
            </button></div>
            <div className="tr">
              <button><p><i class="fa-brands fa-google"></i>Continue with google</p></button>
            </div>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>


</>
    );
};
export default Navbar;
