import {AllRoutes} from './Routes/AllRoutes';
import {Navbar} from './Components/Navbar';
import {Footer} from './Components/Footer';
import {Pagination} from './Components/Pagination';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <AllRoutes />
      
      <Footer/>
    </div>
  );
}

export default App;
