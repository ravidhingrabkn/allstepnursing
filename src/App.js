import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Exams from './routes/Exams';
import Nnas from './routes/Nnas';
import Celban from './routes/Celban';
import Cpnre from './routes/Cpnre';
import Nclex from './routes/Nclex';
import Interview from './routes/Interview';

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/nnas" element={<Nnas />} />
          <Route path="/celban" element={<Celban />} />
          <Route path="/cpnre" element={<Cpnre />} />
          <Route path="/nclex" element={<Nclex />} />
          <Route path="/interview" element={<Interview />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;