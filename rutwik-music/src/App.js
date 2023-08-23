import logo from './logo.svg';
import './App.css';
import Player from './Player';
import Footer from './Footer';
import Rutwik from "./covers/Rutwik.svg"
import beintehaaimg from "./covers/beintehaa.jpg"
import khudkojaanlereimg from "./covers/khudkojaanlere.jpg"
import beintehaan from "./audio/Beintehaan.mp4";
import bekaboo from "./audio/bekaboo.mp4";
import khudkojaanlere from "./audio/khudkojaanlere.mp4";
import manzoorhai from "./audio/manzoorhai.mp4";
import manzoorhaiimg from "./covers/manzoorhai.jpg"
import bekabooimg from "./covers/bekaboo.jpg"
function App() {
  return (
    <div>
      <img style={{width:"150px"}} src={Rutwik} />
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
      <Player image={beintehaaimg}  title="Beintehaan" song={beintehaan}/>
     <Player image={khudkojaanlereimg} title="Khudko Jaan Le Re" song={khudkojaanlere} />
     <Player image={manzoorhaiimg} title="Manzoor hai" song={manzoorhai} />
     <Player image={bekabooimg} title="Bekaboo" song={bekaboo} />
      </div>
     <Footer />
    </div>
  );
}

export default App;
