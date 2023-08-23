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
  
const lyrics={
  khudkojaanlere:"Har pal lagta hai mai mai hu nahi mai hu koi aur,Kyu khudko dhooonde mai,Bazaaron me jaha sauda imaano ka,Toote khwabon ki ginti lekar khudko tolu mai,Toote sapno ko lekar raaton ko naa sou mai,Jitna paaya hai ekdin kho dunga ye sochu mai,Jaane kab se  iss bheed me khud ko akela pau mai,Peecha karte ye khwabon ko kaise bhagau mai",
  beintehaa:"Aadhe se chaand ko takta rahu mai,poora ho tere chehre se,Duaon me maangu naa mere liye kuch, jo de wo rab sab tujhko,Aisi lagan tujh se laagi hai jo…na pehle mehsoos kiii thi,Dariya ki geheraai hai kuch nahi,Nadiyaan hai milti samundar me waise,Milte hai dil tere mere,Beintehaan,ishq gawaah,ishq khudaaa,Sehra me bhatka, musafir hu mai,Be mausam baarish hai tu,Band karu ye, aankhein meri,Khud me ho mehsoos tu,Aisi lagan tujh se laagi hai jo…na pehle mehsoos kiii thi,Dariya ki geheraai hai kuch nahi,Nadiyaan hai milti samundar me waise,Milte hai dil tere mere,Beintehaan,ishq gawaah,ishq khudaaa,Beintehaan...",
  manzoorhai:"Wo poori kar gayi aake kahaani ankahee,Tera hua sab kuch mera,Saari bachkaani meri harkatein sahi,Pyaar ki dori thaame dil mera,Meri iss rooh ka sauda manzoor hai,Mere iss dil kaaa sauda manzoor hai,Meri iss rooh ka sauda manzoor hai,Aadha tha waada jo poora manzoor hai...",
  bekaboo:"Laakh,Koshishon seee,Dil meraaa,Hai thak chukaa,Kaiseee,Mai sambhaaluuu,Khudkooo,Ab yahaaa,Pyaar ke saaye me kaisi hai ranjisheinn,Naa kar saku ab mai bayaaannnn,Kya thi galti meriii jo ye silaa milaa Iiiishqq ka,Khudse hi ho gya judaaaa,Bekabooo,Hua jaa raha,Toot rahaaa,Sab Choot rahaaaa,Bekabooo,Hua jaa raha,Toot rahaaa,Sab Choot rahaaaa..."
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
