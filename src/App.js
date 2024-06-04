import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import Work from './components/work/Work.jsx';
import Spendy from './pages/spendy/Spendy.jsx';
import Reporta from './pages/reporta/Reporta.jsx';
import EduCard from './pages/educard/EduCard.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/#work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/spendy' element={<Spendy />} />
        <Route path='/reporta' element={<Reporta />} />
        <Route path='/educard' element={<EduCard />} />

      </Routes>
    </>
  );
}

export default App;
