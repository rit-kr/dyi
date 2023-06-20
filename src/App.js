import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import WebDesign from './pages/WebDesign';
import Trainings from './pages/Trainings';




function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/webdesign' element={<WebDesign />} />
        <Route path="trainings" element={<Trainings />} />
      </Routes>
    </>
  );
}

export default App;
