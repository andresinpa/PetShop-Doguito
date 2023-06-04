import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page404 from './pages/page404';
import Header from './components/header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/posts/:id' element={<Post/>}/>
        <Route path='/categoria/:id/*' element={<Categoria/>}/>
        <Route path='*' element={<Page404/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
