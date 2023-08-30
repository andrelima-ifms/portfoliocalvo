import './Header.css';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
  return (
    <div>
      <header>
  
        
        <img src= 'logo.png' alt="Logo"></img>
        <button className="glow-on-hover" type="button">
          Saiba mais sobre o IF
        
         </button>
  
       
      </header>
      
    
    </div>
  );
}
