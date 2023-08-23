import React from 'react'
import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import beintehaa from "./covers/beintehaa.jpg"
import beintehaan from "./audio/Beintehaan.mp4"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons
function Player({image,title,song,lyrics}) {
    // const lyrics="Aadhe se chaand ko takta rahu mai , poora ho tere chehre se , Duaon me maangu naa mere liye kuch,jo de wo rab sab tujhko,Aisi lagan tujh se laagi hai jo…na pehle mehsoos kiii thi,Nadiyaan hai milti samundar me waise,Milte hai dil tere mere,Beintehaan…..ishq guwaah…ishq khudaaa,poora ho tere chehre se , Duaon me maangu naa mere liye kuch,jo de wo rab sab tujhko,Aisi lagan tujh se laagi hai jo…na pehle mehsoos kiii thi,Nadiyaan hai milti samundar me waise,Milte hai dil tere mere,Beintehaan…..ishq guwaah…ishq khudaaa."
    var formattedString = lyrics.split(",")
    const [showLyrics,setShowLyrics]=useState(false)
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: "",
      }); // current position of the audio in minutes and seconds
    
      const [seconds, setSeconds] = useState(); // current position of the audio in seconds
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(song);
    useEffect(() => { 
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        const time = {
          min: min,
          sec: secRemain
        };
})      
    useEffect(() => {
        const interval = setInterval(() => {
          if (sound) {
            setSeconds(sound.seek([])); // setting the seconds state with the current state
            const min = Math.floor(sound.seek([]) / 60);
            const sec = Math.floor(sound.seek([]) % 60);
            setCurrTime({
              min,
              sec,
            });
          }
        }, 1000);
        return () => clearInterval(interval);
      }, [sound]);
    const playingButton = () => {
        if (isPlaying) {
          pause(); // this will pause the audio
          setIsPlaying(false);
        } else {
          play(); // this will play the audio
          setIsPlaying(true);
        }
      };
      const handleLyricsButtonCLick=()=>{
      setShowLyrics(!showLyrics)
      }
  return (
        <div 
        className="component"
        >
          <div style={{width:"100%",overflow:"hidden",position:"relative"}}>
            <button onClick={handleLyricsButtonCLick} style={{position:"absolute",zIndex:20,right:3,top:3,backgroundColor:"#27856A",border:"1px solid black",fontWeight:300,fontSize:"1em",outline:"none",letterSpacing:"2px",padding:"4px 6px",fontFamily:"Roboto"}}>{!showLyrics?"View Lyrics":"Hide Lyrics"}</button>
          {!showLyrics && <img
          style={{maxWidth:"100%"}}
            src={image}
          />}
                    {showLyrics && 
                    <div>
                        <div style={{position:"absolute",zIndex:2,overflowY:"scroll",textAlign:"center",maxHeight:"100%",marginTop:"15px",width:"100%"}}>
                        {formattedString.map((str)=>{
                            return(
                                <p style={{zIndex:"3",fontSize:"20px",fontWeight:300,lineHeight:1.4,wordSpacing:"2px"}}>{str}</p>
                            )
                        })}
                        </div>
                       
                    <img
          style={{maxWidth:"100%",filter:"brightness(0.4) blur(4px)"}}
            src={image}
          />
                    </div>}
          
          </div>

          <div style={{textAlign:"center"}}>
            <h3 className="title" style={{fontWeight:400,textTransform:"uppercase",letterSpacing:'2px'}}>{title}</h3>
            <p className="subTitle" style={{color:"#E8E8E8",letterSpacing:"2px",fontWeight:100}}>Rutwik</p>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
        {/* <div className="time" style={{textAlign:"center"}}> */}
          {/* <p>
            {currTime.min}:{currTime.sec}
          </p> */}
          {/* <p>
            {time.min}:{time.sec}
          </p> */}
        {/* </div> */}
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
          color='#27ae60'
          style={{backgroundColor:"#27ae60"}}
        />
      </div>
          <div style={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            {/* <button className="playButton">
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <BiSkipPrevious />
              </IconContext.Provider>
            </button> */}
            {!isPlaying ? (
              <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "4em", color: "#27AE60" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </button>
            ) : (
              <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "4em", color: "#27AE60" }}>
                  <AiFillPauseCircle />
                </IconContext.Provider>
              </button>
            )}
            {/* <button className="playButton">
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <BiSkipNext />
              </IconContext.Provider>
            </button> */}
          </div>
        </div>
  )
}

export default Player