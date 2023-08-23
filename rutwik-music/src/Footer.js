import React from 'react'
import Rutwik from "./covers/Rutwik.svg"
import { BiLogoInstagram } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons

function Footer() {
  return (
    <div style={{backgroundColor:"#121212",padding:"30px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
            <img src={Rutwik}/>
        </div>
        <a href='https://www.instagram.com/rutwik1801/'>
                <IconContext.Provider value={{ size: "4em", color: "#27AE60" }}>
                  <BiLogoInstagram />
                </IconContext.Provider>
              </a>
    </div>
  )
}

export default Footer