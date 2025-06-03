// This file defines the main application routes using React Router.
import { Routes, Route } from 'react-router-dom';
// Importing page-level components 
import Home from './pages/Home';
//import About from './pages/About';
//import Projects from './pages/Projects';
//import Experience from './pages/Experience';
//import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  );
}

export default App;
