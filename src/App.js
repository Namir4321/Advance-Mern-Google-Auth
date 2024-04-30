import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Auth/Login';
import { OTP } from './Components/Auth/OTP';
import { CategoryPage } from './Components/Auth/CategoryPage';
import { ImageCard } from './Components/Auth/ImageCard';
import { MainPage } from './Components/Auth/MainPage';
import { MainCard } from './Components/Auth/MainCard';
import {Routes,Route} from "react-router-dom"
import { AddHotel } from './Components/Auth/AddHotel.js/AddHotel';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<OTP />} />
        <Route path="/cat" element={<CategoryPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/add" element={<AddHotel />} />

        {/* <Route path="" element={user ? <HomePage /> : <LoginPage />} /> */}
        {/* <OTP/> */}
        {/* <CategoryPage/> */}
        {/* <ImageCard/> */}
        {/* <MainPage/> */}
        {/* <MainCard/> */}
      </Routes>
    </div>
  );
}

export default App;
