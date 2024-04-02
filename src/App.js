import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import Work from './components/work/Work.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/#work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
