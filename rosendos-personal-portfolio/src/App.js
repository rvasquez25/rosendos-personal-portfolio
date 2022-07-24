import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" elemnt={<Home />} />
          <Route path="/experience" elemnt={<Projects />} />
          <Route path="/experience" elemnt={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
