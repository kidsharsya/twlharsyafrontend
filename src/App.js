import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/Intro';
import NavLanding from './components/NavLanding';
import MyNavbar from './components/MyNavbar';
import './style/landingpage.css';
import DokterList from './components/DokterList';
import AddDokter from './components/AddDokter';
import EditDokter from './components/EditDokter';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Homepage from './components/Homepage';
import PasienList from './components/PasienList';
import AddPasien from './components/AddPasien';
import EditPasien from './components/EditPasien';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="myBG">
              <NavLanding />
              <Intro />
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <div className="homepage">
              <MyNavbar />
              <Homepage />
            </div>
          }
        />
        <Route
          path="/registrasi"
          element={
            <div className="myBG">
              <NavLanding />
              <RegisterForm />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="myBG">
              <NavLanding />
              <LoginForm />
            </div>
          }
        />
        <Route
          path="/dokter"
          element={
            <div className="myBG">
              <MyNavbar />
              <DokterList />
            </div>
          }
        />
        <Route
          path="/dokter/tambahdokter"
          element={
            <div className="BGpage">
              <MyNavbar />
              <AddDokter />
            </div>
          }
        />
        <Route
          path="/dokter/editdokter/:id"
          element={
            <div className="BGpage">
              <MyNavbar />
              <EditDokter />
            </div>
          }
        />
        <Route
          path="/pasien"
          element={
            <div className="myBG">
              <MyNavbar />
              <PasienList />
            </div>
          }
        />
        <Route
          path="/pasien/tambahpasien"
          element={
            <div className="BGpage">
              <MyNavbar />
              <AddPasien />
            </div>
          }
        />
        <Route
          path="/pasien/editpasien/:id"
          element={
            <div className="BGpage">
              <MyNavbar />
              <EditPasien />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
