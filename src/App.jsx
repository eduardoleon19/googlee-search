import React from "react";
import "./App.css";
import { CgMenuGridO } from "react-icons/cg";
import { HiPencil, HiSearch, HiOutlineMicrophone, HiOutlineCamera, HiPlus } from "react-icons/hi";

const App = ()=> {
  return (  
    <div className="appdiv">
      <div className="barra">
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
          <div>
              <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" />
              <p>Youtube</p>
          </div>
        </a>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" />
          <p>Facebook</p>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png" />
          <p>Twitter</p>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png" />
          <p>Instagram</p>
        </div>
      </div>
      <div className="redes">
        <p className="text1">Gmail</p>
        <p className="text2">Imágenes</p>
        <CgMenuGridO className="icon1" size={25} />
      </div>
      <div className="search">
        <div>
          <img className="logogoogle" src="https://logolook.net/wp-content/uploads/2021/06/Google-Logo.png" />
        </div>
        <div className="search1">
          <div className="icon2" >
            <HiSearch className="icon02" size={20} />
          </div>
          <div>
            <input className="input1" type="text" placeholder="Buscar en Google o escribir una URL"></input>
          </div>
          <div >
            <HiOutlineMicrophone className="icon3" size={20} />
            <HiOutlineCamera className="icon4" size={20} />
          </div>
        </div>
      </div>
      <div className="appicons">
        <div className="appicons1">
          <div className="divapp">
            <div className="divimg">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" />
            </div>
            <p>Youtube</p>
          </div>
          <div className="divapp">
            <div className="divimg">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" />
            </div>
            <p>Facebook</p>
          </div>
          <div className="divapp">
            <div className="divimg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png" />
            </div>
            <p>Twitter</p>
          </div>
          <div className="divapp">
            <div className="divimg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png" />
            </div>
            <p>Instagram</p>
          </div>
          <div className="divapp">
            <div className="divimg">
              <img src="https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338430_1280.png" />
            </div>
            <p>TikTok</p>
          </div>
        </div>
        <div className="appicons2">
        <div className="divapp2">
            <div className="divimg2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Uni-logo_transparente_granate.png" />
            </div>
            <p>UNI VIRTUAL</p>
          </div>
          <div className="divapp2">
            <div className="divimg2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/UTP-logo.svg/2270px-UTP-logo.svg.png" />
            </div>
            <p>Utp virtual</p>
          </div>
          <div className="divapp2">
            <div className="divimg2">
              <img src="https://img.freepik.com/iconos-gratis/microsoft_318-566086.jpg?q=10&h=200" />
            </div>
            <p>Iniciar sesión...</p>
          </div>
          <div className="divapp2">
            <div className="divimg2">
              <HiPlus className="plusicon" size={22} />
            </div>
            <p>Añadir atajo</p>
          </div>
        </div>
      </div>
      <div className="boton">
        <HiPencil size={15} />
        <p className="botontext">Personalizar Chrome</p>
      </div>
    </div>
  )
}

export default App
