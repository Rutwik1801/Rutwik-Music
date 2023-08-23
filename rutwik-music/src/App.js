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
  
const lyrics={
  khudkojaanlere:"Har pal lagta hai mai mai hu nahi mai hu koi aur,khudko mai dhooondu inn,Bazaaron me jaha sauda imaano ka,Toote khwabon ki ginti lekar khudko tolu mai,Toote sapno ko lekar raaton ko naa sou mai,Kya hai iraada uparwaale ka koi samjha de,aake mujhko bhatka hu mai,Khud ko Jaan le re...",
  beintehaa:"Aadhe se chaand ko takta rahu mai,poora ho tere chehre se,Duaon me maangu naa mere liye kuch, jo de wo rab sab tujhko,Aisi lagan tujh se laagi hai jo, pehle na mehsoos kiii thi,Nadiyaan hai milti samundar me jaise,Milte hai dil tere mere,Beintehaan,ishq gawaah,ishq khudaaa,Beintehaan,Sehra me bhatka, musafir hu mai,Be mausam baarish hai tu,Band karu ye, aankhein meri,Khud me ho mehsoos tu,Aisi lagan tujh se laagi hai jo,pehle na mehsoos kiii thi,Nadiyaan hai milti samundar me waise,Milte hai dil tere mere,Beintehaan,ishq gawaah,ishq khudaaa,Beintehaan...",
  manzoorhai:"Wo poori kar gayi aake kahaani ankahee,Tera hua sab kuch mera,Saari bachkaani meri harkatein sahi,Pyaar ki dori thaame dil mera,Meri iss rooh ka sauda manzoor hai,Mere iss dil kaaa sauda manzoor hai,Meri iss rooh ka sauda manzoor hai,Aadha tha waada jo poora manzoor hai...",
  bekaboo:"Laakh,Koshishon seee,Dil meraaa,thak chukaa,Kaiseee,Mai sambhaaluuu,Khudkooo,Ab yahaaa,Pyaar ke saaye me kaisi hai ranjisheinn,Naa kar saku ab mai bayaaan,Kya thi galti meri jo ye sila mila Ishq ka,Khudse hi ho gya judaa,Bekaboo,Hua jaa raha,Toot raha,Choot raha,Bekaboo,Hua jaa raha,Toot raha,Choot raha..."
}

  return (
    <div>
      <img style={{width:"150px"}} src={Rutwik} />
      <div className='container-div'>
      <Player image={beintehaaimg}  title="Beintehaan" song={beintehaan} lyrics={lyrics["beintehaa"]}/>
     <Player image={khudkojaanlereimg} title="Khudko Jaan Le Re" song={khudkojaanlere} lyrics={lyrics["khudkojaanlere"]}/>
     <Player image={manzoorhaiimg} title="Manzoor hai" song={manzoorhai} lyrics={lyrics["manzoorhai"]}/>
     <Player image={bekabooimg} title="Bekaboo" song={bekaboo} lyrics={lyrics["bekaboo"]}/>
      </div>
     <Footer />
    </div>
  );
}

export default App;
