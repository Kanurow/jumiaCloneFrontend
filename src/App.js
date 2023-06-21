import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateProductForm from './form/CreateProductForm';
import Register from './form/Register';
import Signin from './form/SignIn';
import PhonesAndTablets from './categories/PhonesAndTablets';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/createProduct" element={<CreateProductForm />} />
          <Route exact path='/phonesAndTablets' element={<PhonesAndTablets />}></Route>

        </Routes>

        

      </Router>

    </div>
  );
}

export default App;
