import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages & components
import Studentlist from './pages/Studentlist'
import Navbar from './components/Navbar'
import Register from './pages/Register';
import SchoolHomePage from './pages/Home';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<SchoolHomePage/>} 
            />
            <Route 
              path="/Studentlist" 
              element={<Studentlist/>} 
            />
            <Route 
              path="/Register" 
              element={<Register/>} 
            />
            <Route
            path='/Gallery'
            element={<Gallery/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

