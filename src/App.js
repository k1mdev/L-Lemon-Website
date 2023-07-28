import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import ReservationsPage from './Pages/ReservationsPage';
import Footer from './Components/Footer';
import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import ConfirmedBooking from './Pages/ConfirmedBooking';


function App() {
  return (
    <Router>
      
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reservations" element={<ReservationsPage />}></Route>
        <Route path="/reservations/confirmation" element={<ConfirmedBooking />}></Route>
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
