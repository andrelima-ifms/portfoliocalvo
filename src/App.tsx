import './App.css';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import Main from './componentes/main/Main';
import { LinearGradient } from 'expo-linear-gradient';

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Main />
    </div>
  );
}

export default App;